/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NodeNodeDeactivationInfo class.
 * @constructor
 * @member {number} [nodeDeactivationIntent]
 * 
 * @member {number} [nodeDeactivationStatus]
 * 
 */
function NodeNodeDeactivationInfo(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.nodeDeactivationIntent !== undefined) {
      this.nodeDeactivationIntent = parameters.nodeDeactivationIntent;
    }
    if (parameters.nodeDeactivationStatus !== undefined) {
      this.nodeDeactivationStatus = parameters.nodeDeactivationStatus;
    }
  }    
}


/**
 * Validate the payload against the NodeNodeDeactivationInfo schema
 *
 * @param {JSON} payload
 *
 */
NodeNodeDeactivationInfo.prototype.serialize = function () {
  var payload = {};
  if (this['nodeDeactivationIntent'] !== null && this['nodeDeactivationIntent'] !== undefined) {
    if (typeof this['nodeDeactivationIntent'] !== 'number') {
      throw new Error('this[\'nodeDeactivationIntent\'] must be of type number.');
    }
    payload['NodeDeactivationIntent'] = this['nodeDeactivationIntent'];
  }

  if (this['nodeDeactivationStatus'] !== null && this['nodeDeactivationStatus'] !== undefined) {
    if (typeof this['nodeDeactivationStatus'] !== 'number') {
      throw new Error('this[\'nodeDeactivationStatus\'] must be of type number.');
    }
    payload['NodeDeactivationStatus'] = this['nodeDeactivationStatus'];
  }

  return payload;
};

/**
 * Deserialize the instance to NodeNodeDeactivationInfo schema
 *
 * @param {JSON} instance
 *
 */
NodeNodeDeactivationInfo.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['NodeDeactivationIntent'] !== undefined) {
      this['nodeDeactivationIntent'] = instance['NodeDeactivationIntent'];
    }

    if (instance['NodeDeactivationStatus'] !== undefined) {
      this['nodeDeactivationStatus'] = instance['NodeDeactivationStatus'];
    }
  }

  return this;
};

module.exports = NodeNodeDeactivationInfo;