/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApplicationManifest class.
 * @constructor
 * @member {string} [manifest]
 * 
 */
function ApplicationManifest(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.manifest !== undefined) {
      this.manifest = parameters.manifest;
    }
  }    
}


/**
 * Validate the payload against the ApplicationManifest schema
 *
 * @param {JSON} payload
 *
 */
ApplicationManifest.prototype.serialize = function () {
  var payload = {};
  if (this['manifest'] !== null && this['manifest'] !== undefined) {
    if (typeof this['manifest'].valueOf() !== 'string') {
      throw new Error('this[\'manifest\'] must be of type string.');
    }
    payload['Manifest'] = this['manifest'];
  }

  return payload;
};

/**
 * Deserialize the instance to ApplicationManifest schema
 *
 * @param {JSON} instance
 *
 */
ApplicationManifest.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['Manifest'] !== undefined) {
      this['manifest'] = instance['Manifest'];
    }
  }

  return this;
};

module.exports = ApplicationManifest;