// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .post('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/reboot?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7343cdfb-2987-4cb5-8eb7-2b1f78409048',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '41f85db1-dee1-4fe9-9810-7dd84299ee73',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/reboot',
  date: 'Fri, 22 Apr 2016 06:12:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .post('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/reboot?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7343cdfb-2987-4cb5-8eb7-2b1f78409048',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '41f85db1-dee1-4fe9-9810-7dd84299ee73',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z/reboot',
  date: 'Fri, 22 Apr 2016 06:12:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"rebooting\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T06:12:02.5529523Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a535427f-49fa-4f85-898d-3f6f97c763b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0ad38f7e-0132-4384-b589-bbe2324db8b2',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:12:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-1650185656_1-20160422t053728z\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool/nodes/tvm-1650185656_1-20160422t053728z\",\"state\":\"rebooting\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-22T06:12:02.5529523Z\",\"lastBootTime\":\"2016-04-22T05:54:18.8040259Z\",\"allocationTime\":\"2016-04-22T05:37:28.0108159Z\",\"ipAddress\":\"10.80.34.68\",\"affinityId\":\"TVM:tvm-1650185656_1-20160422t053728z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a535427f-49fa-4f85-898d-3f6f97c763b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0ad38f7e-0132-4384-b589-bbe2324db8b2',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 06:12:02 GMT',
  connection: 'close' });
 return result; }]];