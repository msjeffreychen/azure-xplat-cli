/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceHealthPartitionHealthStatesItem class.
 * @constructor
 * @member {string} [partitionId]
 * 
 * @member {number} [aggregatedHealthState]
 * 
 */
function ServiceHealthPartitionHealthStatesItem(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.partitionId !== undefined) {
      this.partitionId = parameters.partitionId;
    }
    if (parameters.aggregatedHealthState !== undefined) {
      this.aggregatedHealthState = parameters.aggregatedHealthState;
    }
  }    
}


/**
 * Validate the payload against the ServiceHealthPartitionHealthStatesItem schema
 *
 * @param {JSON} payload
 *
 */
ServiceHealthPartitionHealthStatesItem.prototype.serialize = function () {
  var payload = {};
  if (this['partitionId'] !== null && this['partitionId'] !== undefined) {
    if (typeof this['partitionId'].valueOf() !== 'string') {
      throw new Error('this[\'partitionId\'] must be of type string.');
    }
    payload['PartitionId'] = this['partitionId'];
  }

  if (this['aggregatedHealthState'] !== null && this['aggregatedHealthState'] !== undefined) {
    if (typeof this['aggregatedHealthState'] !== 'number') {
      throw new Error('this[\'aggregatedHealthState\'] must be of type number.');
    }
    payload['AggregatedHealthState'] = this['aggregatedHealthState'];
  }

  return payload;
};

/**
 * Deserialize the instance to ServiceHealthPartitionHealthStatesItem schema
 *
 * @param {JSON} instance
 *
 */
ServiceHealthPartitionHealthStatesItem.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['PartitionId'] !== undefined) {
      this['partitionId'] = instance['PartitionId'];
    }

    if (instance['AggregatedHealthState'] !== undefined) {
      this['aggregatedHealthState'] = instance['AggregatedHealthState'];
    }
  }

  return this;
};

module.exports = ServiceHealthPartitionHealthStatesItem;