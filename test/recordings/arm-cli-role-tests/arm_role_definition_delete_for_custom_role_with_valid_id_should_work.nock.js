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
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6856f241-8087-4aa4-8b59-d920c13d3e88',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '45856e7b-157e-48dc-82c1-3f0d459aa9e3',
  'x-ms-routing-request-id': 'WESTUS:20151203T202610Z:45856e7b-157e-48dc-82c1-3f0d459aa9e3',
  date: 'Thu, 03 Dec 2015 20:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6856f241-8087-4aa4-8b59-d920c13d3e88',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '45856e7b-157e-48dc-82c1-3f0d459aa9e3',
  'x-ms-routing-request-id': 'WESTUS:20151203T202610Z:45856e7b-157e-48dc-82c1-3f0d459aa9e3',
  date: 'Thu, 03 Dec 2015 20:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cae189ee-35f4-435e-a74c-03336f81a524',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '75edab6c-8fd7-43cc-9440-d3a324872930',
  'x-ms-routing-request-id': 'WESTUS:20151203T202611Z:75edab6c-8fd7-43cc-9440-d3a324872930',
  date: 'Thu, 03 Dec 2015 20:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cae189ee-35f4-435e-a74c-03336f81a524',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '75edab6c-8fd7-43cc-9440-d3a324872930',
  'x-ms-routing-request-id': 'WESTUS:20151203T202611Z:75edab6c-8fd7-43cc-9440-d3a324872930',
  date: 'Thu, 03 Dec 2015 20:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '585bda6a-993e-459b-99c2-b750e8076a66',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '53b695a0-8a03-4b92-9b80-43945aee1240',
  'x-ms-routing-request-id': 'WESTUS:20151203T202612Z:53b695a0-8a03-4b92-9b80-43945aee1240',
  date: 'Thu, 03 Dec 2015 20:26:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_aff3a6ad-47e8-4ced-95be-26b8247e8b92\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-12-03T20:26:10.1640288Z\",\"updatedOn\":\"2015-12-03T20:26:10.1640288Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"46680347-de6b-4fe5-a058-6bf2b9b0abc7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '738',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '585bda6a-993e-459b-99c2-b750e8076a66',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '53b695a0-8a03-4b92-9b80-43945aee1240',
  'x-ms-routing-request-id': 'WESTUS:20151203T202612Z:53b695a0-8a03-4b92-9b80-43945aee1240',
  date: 'Thu, 03 Dec 2015 20:26:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '46680347-de6b-4fe5-a058-6bf2b9b0abc7' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '368d6bd8-235e-44be-868c-20ca73527a54',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'ba32d73f-7896-4f78-b0e3-5b33dda8b160',
  'x-ms-routing-request-id': 'WESTUS:20151203T202612Z:ba32d73f-7896-4f78-b0e3-5b33dda8b160',
  date: 'Thu, 03 Dec 2015 20:26:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/46680347-de6b-4fe5-a058-6bf2b9b0abc7?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '46680347-de6b-4fe5-a058-6bf2b9b0abc7' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '368d6bd8-235e-44be-868c-20ca73527a54',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'ba32d73f-7896-4f78-b0e3-5b33dda8b160',
  'x-ms-routing-request-id': 'WESTUS:20151203T202612Z:ba32d73f-7896-4f78-b0e3-5b33dda8b160',
  date: 'Thu, 03 Dec 2015 20:26:12 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['aff3a6ad-47e8-4ced-95be-26b8247e8b92','46680347-de6b-4fe5-a058-6bf2b9b0abc7'];};