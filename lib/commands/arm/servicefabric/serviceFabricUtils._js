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

'use strict';

var utils = require('../../../util/utils');
var util = require('util');
var path = require('path');
var fs = require('fs');
var url = require('url');
var childProcess = require('child_process');
var __ = require('underscore');

var constants = {
  filename: 'serviceFabric.json',
  serviceFabricPath: '/home/jeffrey/Desktop/test',//'/opt/microsoft/servicefabric/bin/Fabric/Fabric.Code/AzureCliProxy.exe',
  defaultConfig: {
    noRetryPolicy: true
  }
};

var enumMap = {
  serviceKind: {
    'Stateless': 1,
    'Stateful': 2
  },
  health: {
    'Invalid': 0,
    'Ok': 1,
    'Warning': 2,
    'Error': 3,
    'Unknown': 65535
  },
  serviceStatus: {
    'Invalid': 0,
    'Ready': 1,
    'Upgrading': 2
  },
  upgradeKind: {
    'Invalid': 0,
    'Rolling': 1
  },
  rollingUpgradeMode: {
    'Invalid': 0,
    'UnmonitoredAuto': 1,
    'UnmonitoredManual': 2,
    'Monitored': 3
  },
  failureAction: {
    'Invalid': 0,
    'Rollback': 1,
    'Manual': 2
  },
  upgradeState: {
    'Invalid': 0,
    'RollbackInProgress': 1,
    'RollbackCompleted': 2,
    'RollbackPending': 3,
    'RollforwardInProgress': 4,
    'RollforwardCompleted': 5
  },
  failureReason: {
    'None': 0,
    'Interrupted': 1,
    'HealthCheck': 2,
    'UpgradeDomainTimeout': 3,
    'DeployedServicePackages': 4,
    'OverallUpgradeTimeout': 5
  },
  nodeStatus: {
    'Invalid': 0,
    'Up': 1,
    'Down': 2,
    'Enabling': 3,
    'Disabling': 4,
    'Disabled': 5
  },
  deploymentStatus: {
    'Invalid': 0,
    'Downloading': 1,
    'Activating': 2,
    'Active': 3,
    'Upgrading': 4,
    'Deactivating': 5
  },
  partitionKind: {
    'Invalid': 0,
    'Singleton': 1,
    'Int64Range': 2,
    'Named': 3
  },
  partitionStatus: {
    'Invalid': 0,
    'Ready': 1,
    'NotReady': 2,
    'InquorumLoss': 3
  },
  replicaRole: {
    'Initial': 0,
    'None': 1,
    'Primary': 2,
    'IdleSecondary': 3,
    'ActiveSecondary': 4
  },
  replicaStatus: {
    'Invalid': 0,
    'InBuild': 1,
    'Standby': 2,
    'Ready': 3,
    'Down': 4,
    'Dropped': 5
  },
  currentServiceOperation: {
    'Invalid': 0,
    'None': 1,
    'Open': 2,
    'ChangeRole': 3,
    'Close': 4,
    'Abort': 5
  },
  currentReplicatorOperation: {
    'Invalid': 0,
    'None': 1,
    'Open': 2,
    'ChangeRole': 3,
    'UpdateEpoch': 4,
    'Close': 5,
    'Abort': 6,
    'OnDataLoss': 7,
    'WaitForCatchup': 8,
    'Build': 9
  },
  endpointKind: {
    'Stateless': 1,
    'StatefulPrimary': 2,
    'StatefulSecondary': 3
  },
  serviceTypeRegistrationStatus: {
    'Invalid': 0,
    'Disabled': 1,
    'NotRegistered': 2,
    'Registered': 3,
  }
};

exports.writeConfigFile = function (data, _) {
  var base = __.clone(constants.defaultConfig);
  data = __.extend(base, data);
  var filePath = path.join(utils.azureDir(), constants.filename);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), _);
};

exports.readConfigFile = function (_) {
  var filePath = path.join(utils.azureDir(), constants.filename);
  var dataString = fs.readFile(filePath, _);
  var base = __.clone(constants.defaultConfig);
  var data = JSON.parse(dataString);
  return __.extend(base, data);
};

exports.parseUrl = function (urlString, _) {
  if (urlString === null || urlString === undefined || urlString === '') {
    return urlString;
  }
  if (false) {// workaround for jslint false alarm
    console.log(_);
  }
  var urlObj = url.parse(urlString);
  return urlObj.pathname.replace(/^\//, '');
};

exports.readServiceFabricConfig = function (progress, _) {
  var data = null;
  try {
    var err = fs.access(path.join(utils.azureDir(), constants.filename), fs.F_OK, _);
    if (!err) {
      data = exports.readConfigFile(_);
    }
    else {
      console.log('You have not made a connection.');
      return {};
    }
  }
  catch (err) {
    var errMessage = 'Cannot read servicefabric config file. You are either not connected or having corrupted config file.';
    progress.end();
    throw errMessage;
  }
  return data;
};

exports.createConnectionUrl = function (config, _) {
  if (!config.connectionEndpoint) {
    return null;
  }
  if (false) {// workaround for jslint false alarm
    console.log(_);
  }
  var urlObj = url.parse('http://' + config.connectionEndpoint);
  return url.format(urlObj);
};

exports.isServiceFabricInstalled = function (_) {
  if (false) {// workaround for jslint false alarm
    console.log(_);
  }
  try {
    fs.access(constants.serviceFabricPath, fs.F_OK, _);
  }
  catch (err) {
    return false;
  }
  return true;
};

exports.runChildProcess = function (command, _) {
  if (!exports.isServiceFabricInstalled(_)) {
    var errMessage = 'Service Fabric SDK is not installed, please install Service Fabric SDK for full feature.';
    throw errMessage;
  }
  var fullCommand = 'mono ' + path.join(constants.serviceFabricPath, 'AzureCliProxy.exe') + ' ' + command;
  return childProcess.exec(fullCommand, {env: {'LD_LIBRARY_PATH': constants.serviceFabricPath, 'FabricConfigFileName': path.join(constants.serviceFabricPath, 'AzureCliProxy.cfg')}}, _);
};

exports.pick = function (obj, keys, _) {
  if (false) {// workaround for jslint false alarm
    console.log(_);
  }
  keys = keys.split(',');
  if (Array.isArray(obj)) {
    return __.map(obj, function (item) {
      return __.pick(item, keys);
    });
  }
  else {
    return __.pick(obj, keys);
  }
};

exports.getEnumValue = function (type, value) {
  if (!__.has(enumMap, type)) {
    throw util.format('Enum type %s not found.', type);
  }
  if (__.has(enumMap[type], value)) {
    return enumMap[type][value];
  }
  else if (__.has(__.invert(enumMap[type]), value)) {
    return __.invert(enumMap[type])[value];
  }
  else {
    throw util.format('Enum type %s value %s not found.', type, value);
  }
};
