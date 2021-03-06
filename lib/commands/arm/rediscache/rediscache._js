/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* You can test rediscache commands get loaded by xplat by following steps:
* a. Copy the folder to '<repository root>\lib\commands\arm'
* b. Under <repository root>, run 'node bin/azure config mode arm'
* c. Run 'node bin/azure', you should see 'rediscache' listed as a command set
* d. Run 'node bin/azure', you should see 'create', "delete", etc 
  showing up in the help text 
*/

'use strict';


var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');
var rediscacheUtils = require('./rediscacheUtils');
var resourceUtils = require('../resource/resourceUtils');

var $ = utils.getLocaleString;

var SKU_TYPE = ['Basic', 'Standard', 'Premium'];
var VM_SIZE = ['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'P1', 'P2', 'P3', 'P4'];
var KEY_TYPE = ['Primary', 'Secondary'];
var DefaultRedisVersion = '3.0';

exports.init = function (cli) {
  var log = cli.output;
  var rediscache = cli.category('rediscache')
  .description($('Commands to manage your Azure Redis Cache(s)'));
  
  // Create Cache
  rediscache.command('create [name] [resource-group] [location]')
  .description($('Create a Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group> --location <location> [options]]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group'))
  .option('-l, --location <location>', $('Location to create cache.'))
  .option('-z, --size <size>', util.format($('Size of the Redis Cache. Valid values: [%s]'), VM_SIZE.join(', ')))
  .option('-x, --sku <sku>', util.format($('Redis SKU. Should be one of : [%s]'), SKU_TYPE.join(', ')))
  .option('-e, --enable-non-ssl-port', $('EnableNonSslPort property of the Redis Cache. Add this flag if you want to enable the Non SSL Port for your cache'))
  .option('-c, --redis-configuration <redis-configuration>', $('Redis Configuration. Enter a JSON formatted string of configuration keys and values here. Format:"{\"<key1>\":\"<value1>\",\"<key2>":\"<value2>\"}"'))
  .fileRelatedOption('-f, --redis-configuration-file <redisConfigurationFile>', $('Redis Configuration. Enter the path of a file containing configuration keys and values here. Format for the file entry: {"<key1>":"<value1>","<key2>":"<value2>"}'))
  .option('-r, --shard-count <shard-count>', $('Number of Shards to create on a Premium Cluster Cache'))
  .option('-v, --virtual-network <virtual-network>', $('The exact ARM resource ID of the virtual network to deploy the redis cache in. Example format: /subscriptions/{subid}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1'))
  .option('-t, --subnet <subnet>', $('Required when deploying a redis cache inside an existing Azure Virtual Network'))
  .option('-p, --static-ip <static-ip>', $('Required when deploying a redis cache inside an existing Azure Virtual Network'))
  .option('-s, --subscription <id>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, location, options, _) {
    
    ///////////////////////
    // Parse arguments.  //
    ///////////////////////
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    options.location = options.location || location;
    
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    } else if (!options.location) {
      return cli.missingArgument('location');
    }

	if(options.redisConfiguration && options.redisConfigurationFile){
	  throw new Error('Only one argument among redis-configuration or redis-configuration-file is allowed. Not both');
	}
    
    if (options.enableNonSslPort) {
      options.enableNonSslPort = true;
    }
    else {
      options.enableNonSslPort = false;
    }
    
    var validatedSkuVM = rediscacheUtils.parseSkuVM(options.sku, options.size);
    options.sku = validatedSkuVM.sku;
    options.size = validatedSkuVM.vmSize;
    
    var skuFamily = options.size.substring(0, 1);
    var skuCapacity = parseInt(options.size.substring(1));
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription();
    var client = utils.createRedisCacheManagementClient(subscription);
    
    /////////////////////////////
    // Check if tenant exists. //
    /////////////////////////////
    
    var checkRedisCacheProgress = cli.interaction.progress(util.format($('')));
    var redisCacheNameExists = null;
    try {
      redisCacheNameExists = client.redis.get(options.resourceGroup, options.name, _);
    } catch (e) {
      if ((e.statusCode !== 404)) {
        throw e;
      }
    }
    finally {
      checkRedisCacheProgress.end();
    }
    
    if (redisCacheNameExists) {
      throw new Error(util.format($('The requested cache name is unavailable: %s'), options.name));
    }
    
    ////////////////////////
    // Create the tenant. //
    ////////////////////////
    var skuProperties = {
      capacity: skuCapacity,
      family: skuFamily,
      name: options.sku
    };
    
    var parameters = {
      location: options.location,
      redisVersion: DefaultRedisVersion,
      enableNonSslPort: options.enableNonSslPort,
      sku: skuProperties
    };
    
    var redisConfigurationHashTable;
    if (options.redisConfiguration || options.redisConfigurationFile) {
      redisConfigurationHashTable = rediscacheUtils.getValidRedisConfiguration(options);
      parameters.redisConfiguration = redisConfigurationHashTable;
    }
    
    var indexSku = SKU_TYPE.indexOf(options.sku);
    if (indexSku < 2 && ((options.shardCount) || (options.virtualNetwork) || (options.subnet) || (options.staticIp))) {
      throw new Error('ShardCount/VirtualNetwork are features supported only by Premium Sku');
    }
    
    if (options.sku == SKU_TYPE[2]) {
      if (options.shardCount) parameters.shardCount = parseInt(options.shardCount,10);
      if (options.virtualNetwork) parameters.virtualNetwork = options.virtualNetwork;
      if (options.subnet) parameters.subnet = options.subnet;
      if (options.staticIp) parameters.staticIP = options.staticIp;
    }
    
    
    var progress = cli.interaction.progress(util.format($('Attempting to create Redis Cache %s ...'), options.name));
    var callbackArgs = [];
    var result, response;
    try {
      callbackArgs = client.redis.createOrUpdate(options.resourceGroup, options.name, parameters, [_]);
      result = callbackArgs[0];
      response = callbackArgs[2];
    }
    catch (e) {
      if (e.code === 'NameNotAvailable') {
        throw new Error(util.format($('The requested cache name is unavailable: %s'), options.name));
      }
      else {
        throw e;
      }
    }
    finally {
      progress.end();
    }
    
    cli.interaction.formatOutput(result, function (data) {
      if (!data) {
        log.info($('No Redis Cache information available'));
      } else {
        log.data('');
        log.data($('Provisioning State :'), result.provisioningState);
        log.data('');
        log.data($('Cache Name         :'), result.name);
        log.data($('Resource Group     :'), options.resourceGroup);
        log.data($('Location           :'), result.location);
        log.data($('Host Name          :'), result.hostName);
        log.data($('Port               :'), result.port);
        log.data($('SSL Port           :'), result.sslPort);
        log.data($('Non SSL Enabled    :'), result.enableNonSslPort.toString());
        log.data($('Redis Version      :'), result.redisVersion);
        log.data($('Sku                :'), result.sku.name);
        log.data($('Size               :'), result.sku.family + result.sku.capacity.toString());
        log.data($('Id                 :'), result.id);
        log.data($('Redis Configuration:'), result.redisConfiguration);
        log.data($('Shard Count        :'), result.shardCount);
        log.data($('Virtual Network    :'), result.virtualNetwork);
        log.data($('Subnet             :'), result.subnet);
        log.data($('Static IP          :'), result.staticIp);
        log.data('');
      }
    });
    
    if (response.statusCode == 200) {
      log.info('Redis Cache ' + options.name + ' is getting created...');
    }

  });
  
  //Delete Cache
  rediscache.command('delete [name] [resource-group]')
  .description($('Delete an existing Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group> ]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group under which the cache exists'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, options, _) {
    
    ///////////////////////
    // Parse arguments.  //
    ///////////////////////
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    }
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription();
    var client = utils.createRedisCacheManagementClient(subscription);
    
    /////////////////////////////
    // Check if tenant exists. //
    /////////////////////////////
    
    var SeeIfCacheExists = null;
    try {
      SeeIfCacheExists = client.redis.get(options.resourceGroup, options.name, _);
    }
    catch (e) {
      if (e.code === 'ResourceNotFound') {
        throw new Error(rediscacheUtils.showNotFoundError(options.resourceGroup, options.name));
      }
      else {
        throw e;
      }
    }
    
    ////////////////////
    // Delete Tenant. //
    ////////////////////
    
    var progress = cli.interaction.progress(util.format($('Deleting Redis Cache %s'), options.name));
    var callbackArgs = [];
    var result, response;
    try {
      callbackArgs = client.redis.deleteMethod(options.resourceGroup, options.name, [_]);
      result = callbackArgs[0];
      response = callbackArgs[2];
    } finally {
      progress.end();
    }
    
    
    if (response.statusCode == 200) {
      log.info('Delete command successfully invoked for Redis Cache ' + options.name);
    }
  });
  
  //List Cache
  rediscache.command('list')
  .description($('List all Redis Caches within your Subscription or Resource Group'))
  .usage('[options]')
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (options, _) {
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    var subscription = profile.current.getSubscription();
    var client = utils.createRedisCacheManagementClient(subscription);
    
    ////////////////////////////
    // Get Tenant Properties. //
    ////////////////////////////
    
    var operation;
    if (options.resourceGroup) {
      operation = client.redis.listByResourceGroup(options.resourceGroup, _);
    }
    else {
      operation = client.redis.list(_);
    }
    
    
    var progress = cli.interaction.progress(util.format($('Getting Redis Cache(s) ')));
    var result;
    try {
      result = operation;
      for (var i = 0; i < result.length; ++i) {
        result[i].resourceGroup = resourceUtils.getResourceInformation(result[i].id).resourceGroup;
      }
    } finally {
      progress.end();
    }
    
    if (result.length === 0) {
      log.info($('No redis caches found.'));
    } else {
      log.table(result, function (row, item) {
        row.cell($('Name'), item.name);
        row.cell($('Resource Group'), item.resourceGroup);
        row.cell($('Location'), item.location);
        row.cell($('Host Name'), item.hostName);
        row.cell($('Port'), item.port);
        row.cell($('ProvisioningState'), item.provisioningState);
        row.cell($('SSL Port'), item.sslPort);
        row.cell($('Non SSL Enabled'), item.enableNonSslPort);
        row.cell($('Redis Version'), item.redisVersion);
        row.cell($('Sku'), item.sku.name);
        row.cell($('Size'), item.sku.family + item.sku.capacity.toString());
        row.cell($('Id'), item.id);
        row.cell($('Redis Configuration'), item.redisConfiguration);
        row.cell($('Shard Count'), item.shardCount);
        row.cell($('Virtual Network'), item.virtualNetwork);
        row.cell($('Subnet'), item.subnet);
        row.cell($('Static IP'), item.staticIp);
      });
    }
    
    log.info('Redis Cache Details');
  });
  
  //Show Cache
  rediscache.command('show [name] [resource-group]')
  .description($('Show properties of an existing Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group>]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, options, _) {
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    }
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription(options.subscription);
    var client = utils.createRedisCacheManagementClient(subscription);
    
    /////////////////////////////
    // Check if tenant exists. //
    /////////////////////////////
    
    var operation = null;
    try {
      operation = client.redis.get(options.resourceGroup, options.name, _);
    }
    catch (e) {
      if (e.code === 'ResourceNotFound') {
        throw new Error(rediscacheUtils.showNotFoundError(options.resourceGroup, options.name));
      }
      else {
        throw e;
      }
    }
    
    ////////////////////////////
    // Get Tenant Properties. //
    ////////////////////////////
    
    var progress = cli.interaction.progress(util.format($('Getting Redis Cache(s) ')));
    var result;
    try {
      result = operation;
      result.resourceGroup = resourceUtils.getResourceInformation(result.id).resourceGroup;
    } finally {
      progress.end();
    }
    
    cli.interaction.formatOutput(result, function (data) {
      if (!data) {
        log.info($('No Redis Cache information available'));
      } else {
        log.data($('Cache Name         :'), result.name);
        log.data($('Resource Group     :'), result.resourceGroup);
        log.data($('Location           :'), result.location);
        log.data($('Host Name          :'), result.hostName);
        log.data($('Port               :'), result.port);
        log.data($('Provisioning State :'), result.provisioningState);
        log.data($('SSL Port           :'), result.sslPort);
        log.data($('Non SSL Enabled    :'), result.enableNonSslPort.toString());
        log.data($('Redis Version      :'), result.redisVersion);
        log.data($('Sku                :'), result.sku.name);
        log.data($('Size               :'), result.sku.family + result.sku.capacity.toString());
        log.data($('Id                 :'), result.id);
        log.data($('Redis Configuration:'), result.redisConfiguration);
        log.data($('Shard Count        :'), result.shardCount);
        log.data($('Virtual Network    :'), result.virtualNetwork);
        log.data($('Subnet             :'), result.subnet);
        log.data($('Static IP          :'), result.staticIp);
        log.data('');
      }
    });
    
    log.info('Redis Cache Details');
  });
  
  //Set Cache Policy
  rediscache.command('set [name] [resource-group]')
  .description($('Change settings of an existing Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group> --redis-configuration <redis-configuration>/--redis-configuration-file <redisConfigurationFile>]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group'))
  .option('-c, --redis-configuration <redis-configuration>', $('Redis Configuration. Enter a JSON formatted string of configuration keys and values here.'))
  .fileRelatedOption('-f, --redis-configuration-file <redisConfigurationFile>', $('Redis Configuration. Enter the path of a file containing configuration keys and values here.'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, options, _) {
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    } else if (!options.redisConfiguration && !options.redisConfigurationFile) {
      return cli.missingArgument('redis-configuration or redis-configuration-file');
    }

    if (options.redisConfiguration && options.redisConfigurationFile) {
      throw new Error('Only one argument among redis-configuration or redis-configuration-file is allowed. Not both');
    }
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription(options.subscription);
    var client = utils.createRedisCacheManagementClient(subscription);
    
    ////////////////////////////
    // Get Tenant Properties. //
    ////////////////////////////
    
    var progress = cli.interaction.progress(util.format($('Getting Redis Cache(s) ')));
    var operation = null;
    try {
      operation = client.redis.get(options.resourceGroup, options.name, _);
    }
    catch (e) {
      if (e.code === 'ResourceNotFound') {
        throw new Error(rediscacheUtils.showNotFoundError(options.resourceGroup, options.name));
      }
      else {
        throw e;
      }
    }
    
    var result;
    try {
      result = operation;
      result.resourceGroup = resourceUtils.getResourceInformation(result.id).resourceGroup;
    } finally {
      progress.end();
    }
    
    var redisConfigurationHashTable = rediscacheUtils.getValidRedisConfiguration(options);
    
    var parameters = {
      location: result.location,
      redisVersion: result.redisVersion,
      redisConfiguration: redisConfigurationHashTable,
      enableNonSslPort: result.enableNonSslPort,
      sku: {
        capacity: result.sku.capacity,
        family: result.sku.family,
        name: result.sku.name
      }
    };
    
    var updateProgress = cli.interaction.progress(util.format($('Updating Redis Cache %s ...'), options.name));
    var updateResult;
    try {
      updateResult = client.redis.createOrUpdate(options.resourceGroup, options.name, parameters, _);
    } finally {
      updateProgress.end();
    }
    
    cli.interaction.formatOutput(updateResult, function (data) {
      if (!data) {
        log.info($('No Redis Cache information available'));
      } else {
        log.data($('Provisioning State :'), updateResult.provisioningState);
        log.data('');
        log.data($('Cache Name         :'), updateResult.name);
        log.data($('Resource Group     :'), updateResult.resourceGroup);
        log.data($('Location           :'), updateResult.location);
        log.data($('Host Name          :'), updateResult.hostName);
        log.data($('Port               :'), updateResult.port);
        log.data($('SSL Port           :'), updateResult.sslPort);
        log.data($('Non SSL Enabled    :'), updateResult.enableNonSslPort.toString());
        log.data($('Redis Version      :'), updateResult.redisVersion);
        log.data($('Sku                :'), updateResult.sku.name);
        log.data($('Size               :'), updateResult.sku.family + updateResult.sku.capacity.toString());
        log.data($('Id                 :'), updateResult.id);
        log.data($('Redis Configuration:'), result.redisConfiguration);
        log.data($('Shard Count        :'), result.shardCount);
        log.data($('Virtual Network    :'), result.virtualNetwork);
        log.data($('Subnet             :'), result.subnet);
        log.data($('Static IP          :'), result.staticIp);
        log.data('');
      }
    });
    
    log.info('Redis Cache ' + options.name + ' is getting updated ');
  });
  
  
  //Renew Cache Key
  rediscache.command('renew-key [name] [resource-group]')
  .description($('Renew the authentication key for an existing Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group> ]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group under which cache exists'))
  .option('-t, --key-type <key-type>', $('type of key to renew. Valid values are: \'Primary\', \'Secondary\'.'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, options, _) {
    
    ///////////////////////
    // Parse arguments.  //
    ///////////////////////
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    }
    
    options.keyType = rediscacheUtils.parseEnumArgument('key-type', options.keyType, KEY_TYPE, KEY_TYPE[0]);
    
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription();
    var client = utils.createRedisCacheManagementClient(subscription);
    
    /////////////////////////////
    // Check if tenant exists. //
    /////////////////////////////
    
    var SeeIfCacheExists = null;
    try {
      SeeIfCacheExists = client.redis.get(options.resourceGroup, options.name, _).resource;
    }
    catch (e) {
      if (e.code === 'ResourceNotFound') {
        throw new Error(rediscacheUtils.showNotFoundError(options.resourceGroup, options.name));
      }
      else {
        throw e;
      }
    }
    
    ///////////////
    // Renew Key //
    ///////////////
    
    var progress = cli.interaction.progress(util.format($('Renewing %s key for Redis Cache %s'), options.keyType.toString(), options.name));
    var callbackArgs = [];
    var result, response;
    try {
      callbackArgs = client.redis.regenerateKey(options.resourceGroup, options.name, options.keyType, [_]);
      result = callbackArgs[0];
      response = callbackArgs[2];
    } finally {
      progress.end();
    }
    
    if (response.statusCode == 200) {
      cli.interaction.formatOutput(result, function (data) {
        if (!data) {
          log.info($('No Redis Cache information available'));
        } else {
          log.data($('Primary Key   :'), result.primaryKey);
          log.data($('Secondary Key :'), result.secondaryKey);
          log.data('');
        }
      });
    }
    else {
      log.error('Could not renew key for Redis Cache ' + options.name);
    }
    
    log.info(options.keyType + ' Key renewed for Redis Cache ' + options.name);
  });
  
  //List Cache Keys
  rediscache.command('list-keys [name] [resource-group]')
  .description($('Lists Primary and Secondary key of an existing Redis Cache'))
  .usage('[--name <name> --resource-group <resource-group>]')
  .option('-n, --name <name>', $('Name of the Redis Cache.'))
  .option('-g, --resource-group <resource-group>', $('Name of the Resource Group under which Cache exists'))
  .option('-s, --subscription <subscription>', $('the subscription identifier'))
  .execute(function (name, resourceGroup, options, _) {
    
    ///////////////////////
    // Parse arguments.  //
    ///////////////////////
    
    log.verbose('arguments: ' + JSON.stringify({
      name: name,
      options: options
    }));
    
    options.name = options.name || name;
    options.resourceGroup = options.resourceGroup || resourceGroup;
    
    if (!options.name) {
      return cli.missingArgument('name');
    } else if (!options.resourceGroup) {
      return cli.missingArgument('resource-group');
    }
    
    
    /////////////////////////
    // Create the client.  //
    /////////////////////////
    
    var subscription = profile.current.getSubscription();
    var client = utils.createRedisCacheManagementClient(subscription);
    
    /////////////////////////////
    // Check if tenant exists. //
    /////////////////////////////
    
    var SeeIfCacheExists = null;
    try {
      SeeIfCacheExists = client.redis.get(options.resourceGroup, options.name, _).resource;
    }
    catch (e) {
      if (e.code === 'ResourceNotFound') {
        throw new Error(rediscacheUtils.showNotFoundError(options.resourceGroup, options.name));
      }
      else {
        throw e;
      }
    }
    
    ////////////////////
    // Get Cache Keys //
    ////////////////////
    
    var progress = cli.interaction.progress(util.format($('Getting keys for Redis Cache %s ...'), options.name));
    var result;
    try {
      result = client.redis.listKeys(options.resourceGroup, options.name, _);
    } finally {
      progress.end();
    }
    
    cli.interaction.formatOutput(result, function (data) {
      if (!data) {
        log.info($('No Redis Cache information available'));
      } else {
        log.data($('Primary Key   :'), result.primaryKey);
        log.data($('Secondary Key :'), result.secondaryKey);
        log.data('');
      }
    });
    
    log.info(' Keys for Redis Cache ' + options.name);
  });

};


