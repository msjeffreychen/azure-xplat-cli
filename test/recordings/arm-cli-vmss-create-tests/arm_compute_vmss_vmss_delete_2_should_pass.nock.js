// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1771/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'e53f8719-ac42-48fb-9530-37671318d55b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9ce87057-957b-4fb5-8936-696acb1349e9',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T200724Z:9ce87057-957b-4fb5-8936-696acb1349e9',
  date: 'Tue, 19 Apr 2016 20:07:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate1771/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'e53f8719-ac42-48fb-9530-37671318d55b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9ce87057-957b-4fb5-8936-696acb1349e9',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T200724Z:9ce87057-957b-4fb5-8936-696acb1349e9',
  date: 'Tue, 19 Apr 2016 20:07:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'd5cc37b2-0cd5-4900-b497-19e50e6cacb7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4790263b-1f4a-4e28-b240-41cc2547b8c1',
  'x-ms-routing-request-id': 'WESTUS:20160419T200756Z:4790263b-1f4a-4e28-b240-41cc2547b8c1',
  date: 'Tue, 19 Apr 2016 20:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'd5cc37b2-0cd5-4900-b497-19e50e6cacb7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '4790263b-1f4a-4e28-b240-41cc2547b8c1',
  'x-ms-routing-request-id': 'WESTUS:20160419T200756Z:4790263b-1f4a-4e28-b240-41cc2547b8c1',
  date: 'Tue, 19 Apr 2016 20:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '824e01a4-e008-48eb-b39c-521422d64b42',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0abca98d-e34d-4378-9758-f3c86d847249',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T200827Z:0abca98d-e34d-4378-9758-f3c86d847249',
  date: 'Tue, 19 Apr 2016 20:08:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '824e01a4-e008-48eb-b39c-521422d64b42',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0abca98d-e34d-4378-9758-f3c86d847249',
  'x-ms-routing-request-id': 'CENTRALUS:20160419T200827Z:0abca98d-e34d-4378-9758-f3c86d847249',
  date: 'Tue, 19 Apr 2016 20:08:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'a68367d9-49d1-42cb-9237-47ba08d2538d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1bd3ec6b-966e-4a4e-8aa2-48a7cce150c8',
  'x-ms-routing-request-id': 'WESTUS:20160419T200858Z:1bd3ec6b-966e-4a4e-8aa2-48a7cce150c8',
  date: 'Tue, 19 Apr 2016 20:08:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': 'a68367d9-49d1-42cb-9237-47ba08d2538d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1bd3ec6b-966e-4a4e-8aa2-48a7cce150c8',
  'x-ms-routing-request-id': 'WESTUS:20160419T200858Z:1bd3ec6b-966e-4a4e-8aa2-48a7cce150c8',
  date: 'Tue, 19 Apr 2016 20:08:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '35fe4f75-9538-477f-9301-9493adf663a5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '3997420c-737a-4699-96e6-05149e58e16d',
  'x-ms-routing-request-id': 'WESTUS:20160419T200929Z:3997420c-737a-4699-96e6-05149e58e16d',
  date: 'Tue, 19 Apr 2016 20:09:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '35fe4f75-9538-477f-9301-9493adf663a5',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '3997420c-737a-4699-96e6-05149e58e16d',
  'x-ms-routing-request-id': 'WESTUS:20160419T200929Z:3997420c-737a-4699-96e6-05149e58e16d',
  date: 'Tue, 19 Apr 2016 20:09:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '92abc92e-0c8a-43fc-9915-681c3bda9ee7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '86394f83-732c-469c-b56d-f0e287168746',
  'x-ms-routing-request-id': 'WESTUS:20160419T201000Z:86394f83-732c-469c-b56d-f0e287168746',
  date: 'Tue, 19 Apr 2016 20:10:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '92abc92e-0c8a-43fc-9915-681c3bda9ee7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '86394f83-732c-469c-b56d-f0e287168746',
  'x-ms-routing-request-id': 'WESTUS:20160419T201000Z:86394f83-732c-469c-b56d-f0e287168746',
  date: 'Tue, 19 Apr 2016 20:10:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"endTime\": \"2016-04-19T20:10:28.1996561+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '1c994452-38e8-43d4-952a-1338a8555ec2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '295ad2a1-c792-4fcb-9ba8-d33b3cb89d07',
  'x-ms-routing-request-id': 'WESTUS:20160419T201031Z:295ad2a1-c792-4fcb-9ba8-d33b3cb89d07',
  date: 'Tue, 19 Apr 2016 20:10:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/e53f8719-ac42-48fb-9530-37671318d55b?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"e53f8719-ac42-48fb-9530-37671318d55b\",\r\n  \"startTime\": \"2016-04-19T20:07:24.5434124+00:00\",\r\n  \"endTime\": \"2016-04-19T20:10:28.1996561+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131054786111240908',
  'x-ms-request-id': '1c994452-38e8-43d4-952a-1338a8555ec2',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '295ad2a1-c792-4fcb-9ba8-d33b3cb89d07',
  'x-ms-routing-request-id': 'WESTUS:20160419T201031Z:295ad2a1-c792-4fcb-9ba8-d33b3cb89d07',
  date: 'Tue, 19 Apr 2016 20:10:31 GMT',
  connection: 'close' });
 return result; }]];