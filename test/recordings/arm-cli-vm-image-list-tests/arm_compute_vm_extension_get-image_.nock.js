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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions/2.1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"operatingSystem\": \"Windows\",\r\n    \"computeRole\": \"IaaS\",\r\n    \"vmScaleSetEnabled\": false,\r\n    \"supportsMultipleExtensions\": false\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"2.1\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '58f34859-b823-441d-8323-59bcfac66075',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'deb7633f-2eac-4eae-9490-57f0734c1755',
  'x-ms-routing-request-id': 'CENTRALUS:20160127T190410Z:deb7633f-2eac-4eae-9490-57f0734c1755',
  date: 'Wed, 27 Jan 2016 19:04:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions/2.1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"operatingSystem\": \"Windows\",\r\n    \"computeRole\": \"IaaS\",\r\n    \"vmScaleSetEnabled\": false,\r\n    \"supportsMultipleExtensions\": false\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"2.1\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '398',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '58f34859-b823-441d-8323-59bcfac66075',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'deb7633f-2eac-4eae-9490-57f0734c1755',
  'x-ms-routing-request-id': 'CENTRALUS:20160127T190410Z:deb7633f-2eac-4eae-9490-57f0734c1755',
  date: 'Wed, 27 Jan 2016 19:04:09 GMT',
  connection: 'close' });
 return result; }]];