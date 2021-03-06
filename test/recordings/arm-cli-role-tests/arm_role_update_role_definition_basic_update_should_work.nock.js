// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'AAD_POLICY_ADMINISTRATION_SERVICE_TEST_CLI',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto1@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto0012345';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_d3384822-4230-4300-a00b-726859ab6831\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:15.4871175Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43c0973b-cc89-4519-9260-ed815c9961d0',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'df4552dd-4b2c-4048-9bda-ed71e0905cd1',
  'x-ms-routing-request-id': 'WESTUS:20151203T202616Z:df4552dd-4b2c-4048-9bda-ed71e0905cd1',
  date: 'Thu, 03 Dec 2015 20:26:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_d3384822-4230-4300-a00b-726859ab6831\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:15.4871175Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '43c0973b-cc89-4519-9260-ed815c9961d0',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'df4552dd-4b2c-4048-9bda-ed71e0905cd1',
  'x-ms-routing-request-id': 'WESTUS:20151203T202616Z:df4552dd-4b2c-4048-9bda-ed71e0905cd1',
  date: 'Thu, 03 Dec 2015 20:26:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_d3384822-4230-4300-a00b-726859ab6831\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:15.4871175Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5dc7f6aa-a923-4917-b103-2e2f93316153',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'b08cec53-3ae4-4e8e-94f2-1f8975cda348',
  'x-ms-routing-request-id': 'WESTUS:20151203T202616Z:b08cec53-3ae4-4e8e-94f2-1f8975cda348',
  date: 'Thu, 03 Dec 2015 20:26:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_d3384822-4230-4300-a00b-726859ab6831\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:15.4871175Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5dc7f6aa-a923-4917-b103-2e2f93316153',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'b08cec53-3ae4-4e8e-94f2-1f8975cda348',
  'x-ms-routing-request-id': 'WESTUS:20151203T202616Z:b08cec53-3ae4-4e8e-94f2-1f8975cda348',
  date: 'Thu, 03 Dec 2015 20:26:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:16.8460672Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":null,\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e47b990d-1111-4ae6-958b-9e5770b337d5',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fdb09c5b-cfb9-4c04-8faa-de320e3c68b6',
  'x-ms-routing-request-id': 'WESTUS:20151203T202618Z:fdb09c5b-cfb9-4c04-8faa-de320e3c68b6',
  date: 'Thu, 03 Dec 2015 20:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:16.8460672Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":null,\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e47b990d-1111-4ae6-958b-9e5770b337d5',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fdb09c5b-cfb9-4c04-8faa-de320e3c68b6',
  'x-ms-routing-request-id': 'WESTUS:20151203T202618Z:fdb09c5b-cfb9-4c04-8faa-de320e3c68b6',
  date: 'Thu, 03 Dec 2015 20:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7cb3b111-3b95-4fe5-a8bc-b318cbecc52e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '4f21f5f4-e913-434c-b08a-d851120251ec',
  'x-ms-routing-request-id': 'WESTUS:20151203T202618Z:4f21f5f4-e913-434c-b08a-d851120251ec',
  date: 'Thu, 03 Dec 2015 20:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7cb3b111-3b95-4fe5-a8bc-b318cbecc52e',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': '4f21f5f4-e913-434c-b08a-d851120251ec',
  'x-ms-routing-request-id': 'WESTUS:20151203T202618Z:4f21f5f4-e913-434c-b08a-d851120251ec',
  date: 'Thu, 03 Dec 2015 20:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4779a34-3ec3-49a9-9246-77e196c5893d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8a4214f6-1bab-451e-8a1a-22b69752e87c',
  'x-ms-routing-request-id': 'WESTUS:20151203T202619Z:8a4214f6-1bab-451e-8a1a-22b69752e87c',
  date: 'Thu, 03 Dec 2015 20:26:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_551286fd-89a3-4d3e-882d-9d640889cabb\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:15.4871175Z\",\"updatedOn\":\"2015-12-03T20:26:16.8460672Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a4779a34-3ec3-49a9-9246-77e196c5893d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8a4214f6-1bab-451e-8a1a-22b69752e87c',
  'x-ms-routing-request-id': 'WESTUS:20151203T202619Z:8a4214f6-1bab-451e-8a1a-22b69752e87c',
  date: 'Thu, 03 Dec 2015 20:26:19 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['d3384822-4230-4300-a00b-726859ab6831','c75d87ad-47c7-4d3e-85e1-2fc3768b5a0f','551286fd-89a3-4d3e-882d-9d640889cabb'];};