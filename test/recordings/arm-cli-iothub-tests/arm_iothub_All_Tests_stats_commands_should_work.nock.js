// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/quotaMetrics?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"Name\":\"TotalMessages\",\"CurrentValue\":0,\"MaxValue\":400000},{\"Name\":\"TotalDeviceCount\",\"CurrentValue\":0,\"MaxValue\":500000}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'x-ms-correlation-request-id': '1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235331Z:1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:53:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/quotaMetrics?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"Name\":\"TotalMessages\",\"CurrentValue\":0,\"MaxValue\":400000},{\"Name\":\"TotalDeviceCount\",\"CurrentValue\":0,\"MaxValue\":500000}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'x-ms-correlation-request-id': '1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235331Z:1c5a03bf-94fb-4f8f-b3f2-95b7d0b7b4ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:53:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubStats?api-version=2016-02-03')
  .reply(200, "{\"totalDeviceCount\":0,\"enabledDeviceCount\":0,\"disabledDeviceCount\":0}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '69',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'x-ms-correlation-request-id': '5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235332Z:5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:53:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259/IotHubStats?api-version=2016-02-03')
  .reply(200, "{\"totalDeviceCount\":0,\"enabledDeviceCount\":0,\"disabledDeviceCount\":0}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '69',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'x-ms-correlation-request-id': '5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235332Z:5b329caf-ee9b-4b52-b3c7-f620e4f9205a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:53:31 GMT',
  connection: 'close' });
 return result; }]];