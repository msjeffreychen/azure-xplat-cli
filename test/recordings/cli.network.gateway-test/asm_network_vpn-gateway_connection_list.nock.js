// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway/connections')
  .reply(200, "<Connections xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Connection><AllocatedIPAddresses xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><ConnectivityState>NotConnected</ConnectivityState><EgressBytesTransferred>0</EgressBytesTransferred><EgressPacketsTransferred>0</EgressPacketsTransferred><IngressBytesTransferred>0</IngressBytesTransferred><IngressPacketsTransferred>0</IngressPacketsTransferred><LastConnectionEstablished>1601-01-01T00:00:00Z</LastConnectionEstablished><LastEvent><Id>21601</Id><Message>Unable to establish the cross-premise tunnel for site 'CliGtTestLocNetwork5435'. Previous state: Initializing.  Current state: Not Connected.</Message><Timestamp>2015-06-26T06:45:13.0786293Z</Timestamp></LastEvent><LocalNetworkSiteName>CliGtTestLocNetwork5435</LocalNetworkSiteName></Connection></Connections>", { 'cache-control': 'no-cache',
  'content-length': '899',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd821b1bb6e61b8b989166da572523374',
  date: 'Fri, 26 Jun 2015 06:45:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway/connections')
  .reply(200, "<Connections xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Connection><AllocatedIPAddresses xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><ConnectivityState>NotConnected</ConnectivityState><EgressBytesTransferred>0</EgressBytesTransferred><EgressPacketsTransferred>0</EgressPacketsTransferred><IngressBytesTransferred>0</IngressBytesTransferred><IngressPacketsTransferred>0</IngressPacketsTransferred><LastConnectionEstablished>1601-01-01T00:00:00Z</LastConnectionEstablished><LastEvent><Id>21601</Id><Message>Unable to establish the cross-premise tunnel for site 'CliGtTestLocNetwork5435'. Previous state: Initializing.  Current state: Not Connected.</Message><Timestamp>2015-06-26T06:45:13.0786293Z</Timestamp></LastEvent><LocalNetworkSiteName>CliGtTestLocNetwork5435</LocalNetworkSiteName></Connection></Connections>", { 'cache-control': 'no-cache',
  'content-length': '899',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd821b1bb6e61b8b989166da572523374',
  date: 'Fri, 26 Jun 2015 06:45:41 GMT',
  connection: 'close' });
 return result; }]];