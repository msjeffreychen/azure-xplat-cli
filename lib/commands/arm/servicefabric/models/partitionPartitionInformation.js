/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PartitionPartitionInformation class.
 * @constructor
 * @member {number} [servicePartitionKind]
 * 
 * @member {string} [id]
 * 
 */
function PartitionPartitionInformation(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.servicePartitionKind !== undefined) {
      this.servicePartitionKind = parameters.servicePartitionKind;
    }
    if (parameters.id !== undefined) {
      this.id = parameters.id;
    }
  }    
}


/**
 * Validate the payload against the PartitionPartitionInformation schema
 *
 * @param {JSON} payload
 *
 */
PartitionPartitionInformation.prototype.serialize = function () {
  var payload = {};
  if (this['servicePartitionKind'] !== null && this['servicePartitionKind'] !== undefined) {
    if (typeof this['servicePartitionKind'] !== 'number') {
      throw new Error('this[\'servicePartitionKind\'] must be of type number.');
    }
    payload['ServicePartitionKind'] = this['servicePartitionKind'];
  }

  if (this['id'] !== null && this['id'] !== undefined) {
    if (typeof this['id'].valueOf() !== 'string') {
      throw new Error('this[\'id\'] must be of type string.');
    }
    payload['Id'] = this['id'];
  }

  return payload;
};

/**
 * Deserialize the instance to PartitionPartitionInformation schema
 *
 * @param {JSON} instance
 *
 */
PartitionPartitionInformation.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['ServicePartitionKind'] !== undefined) {
      this['servicePartitionKind'] = instance['ServicePartitionKind'];
    }

    if (instance['Id'] !== undefined) {
      this['id'] = instance['Id'];
    }
  }

  return this;
};

module.exports = PartitionPartitionInformation;