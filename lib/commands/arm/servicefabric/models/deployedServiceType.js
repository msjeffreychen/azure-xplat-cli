/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeployedServiceType class.
 * @constructor
 * @member {string} [serviceTypeName]
 * 
 * @member {string} [codePackageName]
 * 
 * @member {string} [serviceManifestName]
 * 
 * @member {number} [status]
 * 
 */
function DeployedServiceType(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.serviceTypeName !== undefined) {
      this.serviceTypeName = parameters.serviceTypeName;
    }
    if (parameters.codePackageName !== undefined) {
      this.codePackageName = parameters.codePackageName;
    }
    if (parameters.serviceManifestName !== undefined) {
      this.serviceManifestName = parameters.serviceManifestName;
    }
    if (parameters.status !== undefined) {
      this.status = parameters.status;
    }
  }    
}


/**
 * Validate the payload against the DeployedServiceType schema
 *
 * @param {JSON} payload
 *
 */
DeployedServiceType.prototype.serialize = function () {
  var payload = {};
  if (this['serviceTypeName'] !== null && this['serviceTypeName'] !== undefined) {
    if (typeof this['serviceTypeName'].valueOf() !== 'string') {
      throw new Error('this[\'serviceTypeName\'] must be of type string.');
    }
    payload['ServiceTypeName'] = this['serviceTypeName'];
  }

  if (this['codePackageName'] !== null && this['codePackageName'] !== undefined) {
    if (typeof this['codePackageName'].valueOf() !== 'string') {
      throw new Error('this[\'codePackageName\'] must be of type string.');
    }
    payload['CodePackageName'] = this['codePackageName'];
  }

  if (this['serviceManifestName'] !== null && this['serviceManifestName'] !== undefined) {
    if (typeof this['serviceManifestName'].valueOf() !== 'string') {
      throw new Error('this[\'serviceManifestName\'] must be of type string.');
    }
    payload['ServiceManifestName'] = this['serviceManifestName'];
  }

  if (this['status'] !== null && this['status'] !== undefined) {
    if (typeof this['status'] !== 'number') {
      throw new Error('this[\'status\'] must be of type number.');
    }
    payload['Status'] = this['status'];
  }

  return payload;
};

/**
 * Deserialize the instance to DeployedServiceType schema
 *
 * @param {JSON} instance
 *
 */
DeployedServiceType.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['ServiceTypeName'] !== undefined) {
      this['serviceTypeName'] = instance['ServiceTypeName'];
    }

    if (instance['CodePackageName'] !== undefined) {
      this['codePackageName'] = instance['CodePackageName'];
    }

    if (instance['ServiceManifestName'] !== undefined) {
      this['serviceManifestName'] = instance['ServiceManifestName'];
    }

    if (instance['Status'] !== undefined) {
      this['status'] = instance['Status'];
    }
  }

  return this;
};

module.exports = DeployedServiceType;