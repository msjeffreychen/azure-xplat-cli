/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the LoadMetricInformation class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {boolean} [isBalancedBefore]
 * 
 * @member {boolean} [isBalancedAfter]
 * 
 * @member {number} [deviationBefore]
 * 
 * @member {number} [deviationAfter]
 * 
 * @member {number} [balancingThreshold]
 * 
 * @member {string} [action]
 * 
 * @member {number} [activityThreshold]
 * 
 * @member {string} [clusterCapacity]
 * 
 * @member {string} [clusterLoad]
 * 
 * @member {string} [remainingUnbufferedCapacity]
 * 
 * @member {number} [nodeBufferPercentage]
 * 
 * @member {string} [bufferedCapacity]
 * 
 * @member {string} [remainingBufferedCapacity]
 * 
 * @member {boolean} [isClusterCapacityViolation]
 * 
 * @member {string} [minNodeLoadValue]
 * 
 * @member {object} [minNodeLoadId]
 * 
 * @member {string} [minNodeLoadId.id]
 * 
 * @member {string} [maxNodeLoadValue]
 * 
 * @member {object} [maxNodeLoadId]
 * 
 * @member {string} [maxNodeLoadId.id]
 * 
 */
function LoadMetricInformation(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.isBalancedBefore !== undefined) {
      this.isBalancedBefore = parameters.isBalancedBefore;
    }
    if (parameters.isBalancedAfter !== undefined) {
      this.isBalancedAfter = parameters.isBalancedAfter;
    }
    if (parameters.deviationBefore !== undefined) {
      this.deviationBefore = parameters.deviationBefore;
    }
    if (parameters.deviationAfter !== undefined) {
      this.deviationAfter = parameters.deviationAfter;
    }
    if (parameters.balancingThreshold !== undefined) {
      this.balancingThreshold = parameters.balancingThreshold;
    }
    if (parameters.action !== undefined) {
      this.action = parameters.action;
    }
    if (parameters.activityThreshold !== undefined) {
      this.activityThreshold = parameters.activityThreshold;
    }
    if (parameters.clusterCapacity !== undefined) {
      this.clusterCapacity = parameters.clusterCapacity;
    }
    if (parameters.clusterLoad !== undefined) {
      this.clusterLoad = parameters.clusterLoad;
    }
    if (parameters.remainingUnbufferedCapacity !== undefined) {
      this.remainingUnbufferedCapacity = parameters.remainingUnbufferedCapacity;
    }
    if (parameters.nodeBufferPercentage !== undefined) {
      this.nodeBufferPercentage = parameters.nodeBufferPercentage;
    }
    if (parameters.bufferedCapacity !== undefined) {
      this.bufferedCapacity = parameters.bufferedCapacity;
    }
    if (parameters.remainingBufferedCapacity !== undefined) {
      this.remainingBufferedCapacity = parameters.remainingBufferedCapacity;
    }
    if (parameters.isClusterCapacityViolation !== undefined) {
      this.isClusterCapacityViolation = parameters.isClusterCapacityViolation;
    }
    if (parameters.minNodeLoadValue !== undefined) {
      this.minNodeLoadValue = parameters.minNodeLoadValue;
    }
    if (parameters.minNodeLoadId) {
      this.minNodeLoadId = new models['LoadMetricInformationMinNodeLoadId'](parameters.minNodeLoadId);
    }
    if (parameters.maxNodeLoadValue !== undefined) {
      this.maxNodeLoadValue = parameters.maxNodeLoadValue;
    }
    if (parameters.maxNodeLoadId) {
      this.maxNodeLoadId = new models['LoadMetricInformationMaxNodeLoadId'](parameters.maxNodeLoadId);
    }
  }    
}


/**
 * Validate the payload against the LoadMetricInformation schema
 *
 * @param {JSON} payload
 *
 */
LoadMetricInformation.prototype.serialize = function () {
  var payload = {};
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['Name'] = this['name'];
  }

  if (this['isBalancedBefore'] !== null && this['isBalancedBefore'] !== undefined) {
    if (typeof this['isBalancedBefore'] !== 'boolean') {
      throw new Error('this[\'isBalancedBefore\'] must be of type boolean.');
    }
    payload['IsBalancedBefore'] = this['isBalancedBefore'];
  }

  if (this['isBalancedAfter'] !== null && this['isBalancedAfter'] !== undefined) {
    if (typeof this['isBalancedAfter'] !== 'boolean') {
      throw new Error('this[\'isBalancedAfter\'] must be of type boolean.');
    }
    payload['IsBalancedAfter'] = this['isBalancedAfter'];
  }

  if (this['deviationBefore'] !== null && this['deviationBefore'] !== undefined) {
    if (typeof this['deviationBefore'] !== 'number') {
      throw new Error('this[\'deviationBefore\'] must be of type number.');
    }
    payload['DeviationBefore'] = this['deviationBefore'];
  }

  if (this['deviationAfter'] !== null && this['deviationAfter'] !== undefined) {
    if (typeof this['deviationAfter'] !== 'number') {
      throw new Error('this[\'deviationAfter\'] must be of type number.');
    }
    payload['DeviationAfter'] = this['deviationAfter'];
  }

  if (this['balancingThreshold'] !== null && this['balancingThreshold'] !== undefined) {
    if (typeof this['balancingThreshold'] !== 'number') {
      throw new Error('this[\'balancingThreshold\'] must be of type number.');
    }
    payload['BalancingThreshold'] = this['balancingThreshold'];
  }

  if (this['action'] !== null && this['action'] !== undefined) {
    if (typeof this['action'].valueOf() !== 'string') {
      throw new Error('this[\'action\'] must be of type string.');
    }
    payload['Action'] = this['action'];
  }

  if (this['activityThreshold'] !== null && this['activityThreshold'] !== undefined) {
    if (typeof this['activityThreshold'] !== 'number') {
      throw new Error('this[\'activityThreshold\'] must be of type number.');
    }
    payload['ActivityThreshold'] = this['activityThreshold'];
  }

  if (this['clusterCapacity'] !== null && this['clusterCapacity'] !== undefined) {
    if (typeof this['clusterCapacity'].valueOf() !== 'string') {
      throw new Error('this[\'clusterCapacity\'] must be of type string.');
    }
    payload['ClusterCapacity'] = this['clusterCapacity'];
  }

  if (this['clusterLoad'] !== null && this['clusterLoad'] !== undefined) {
    if (typeof this['clusterLoad'].valueOf() !== 'string') {
      throw new Error('this[\'clusterLoad\'] must be of type string.');
    }
    payload['ClusterLoad'] = this['clusterLoad'];
  }

  if (this['remainingUnbufferedCapacity'] !== null && this['remainingUnbufferedCapacity'] !== undefined) {
    if (typeof this['remainingUnbufferedCapacity'].valueOf() !== 'string') {
      throw new Error('this[\'remainingUnbufferedCapacity\'] must be of type string.');
    }
    payload['RemainingUnbufferedCapacity'] = this['remainingUnbufferedCapacity'];
  }

  if (this['nodeBufferPercentage'] !== null && this['nodeBufferPercentage'] !== undefined) {
    if (typeof this['nodeBufferPercentage'] !== 'number') {
      throw new Error('this[\'nodeBufferPercentage\'] must be of type number.');
    }
    payload['NodeBufferPercentage'] = this['nodeBufferPercentage'];
  }

  if (this['bufferedCapacity'] !== null && this['bufferedCapacity'] !== undefined) {
    if (typeof this['bufferedCapacity'].valueOf() !== 'string') {
      throw new Error('this[\'bufferedCapacity\'] must be of type string.');
    }
    payload['BufferedCapacity'] = this['bufferedCapacity'];
  }

  if (this['remainingBufferedCapacity'] !== null && this['remainingBufferedCapacity'] !== undefined) {
    if (typeof this['remainingBufferedCapacity'].valueOf() !== 'string') {
      throw new Error('this[\'remainingBufferedCapacity\'] must be of type string.');
    }
    payload['RemainingBufferedCapacity'] = this['remainingBufferedCapacity'];
  }

  if (this['isClusterCapacityViolation'] !== null && this['isClusterCapacityViolation'] !== undefined) {
    if (typeof this['isClusterCapacityViolation'] !== 'boolean') {
      throw new Error('this[\'isClusterCapacityViolation\'] must be of type boolean.');
    }
    payload['IsClusterCapacityViolation'] = this['isClusterCapacityViolation'];
  }

  if (this['minNodeLoadValue'] !== null && this['minNodeLoadValue'] !== undefined) {
    if (typeof this['minNodeLoadValue'].valueOf() !== 'string') {
      throw new Error('this[\'minNodeLoadValue\'] must be of type string.');
    }
    payload['MinNodeLoadValue'] = this['minNodeLoadValue'];
  }

  if (this['minNodeLoadId']) {
    payload['MinNodeLoadId'] = this['minNodeLoadId'].serialize();
  }

  if (this['maxNodeLoadValue'] !== null && this['maxNodeLoadValue'] !== undefined) {
    if (typeof this['maxNodeLoadValue'].valueOf() !== 'string') {
      throw new Error('this[\'maxNodeLoadValue\'] must be of type string.');
    }
    payload['MaxNodeLoadValue'] = this['maxNodeLoadValue'];
  }

  if (this['maxNodeLoadId']) {
    payload['MaxNodeLoadId'] = this['maxNodeLoadId'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to LoadMetricInformation schema
 *
 * @param {JSON} instance
 *
 */
LoadMetricInformation.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['Name'] !== undefined) {
      this['name'] = instance['Name'];
    }

    if (instance['IsBalancedBefore'] !== undefined) {
      this['isBalancedBefore'] = instance['IsBalancedBefore'];
    }

    if (instance['IsBalancedAfter'] !== undefined) {
      this['isBalancedAfter'] = instance['IsBalancedAfter'];
    }

    if (instance['DeviationBefore'] !== undefined) {
      this['deviationBefore'] = instance['DeviationBefore'];
    }

    if (instance['DeviationAfter'] !== undefined) {
      this['deviationAfter'] = instance['DeviationAfter'];
    }

    if (instance['BalancingThreshold'] !== undefined) {
      this['balancingThreshold'] = instance['BalancingThreshold'];
    }

    if (instance['Action'] !== undefined) {
      this['action'] = instance['Action'];
    }

    if (instance['ActivityThreshold'] !== undefined) {
      this['activityThreshold'] = instance['ActivityThreshold'];
    }

    if (instance['ClusterCapacity'] !== undefined) {
      this['clusterCapacity'] = instance['ClusterCapacity'];
    }

    if (instance['ClusterLoad'] !== undefined) {
      this['clusterLoad'] = instance['ClusterLoad'];
    }

    if (instance['RemainingUnbufferedCapacity'] !== undefined) {
      this['remainingUnbufferedCapacity'] = instance['RemainingUnbufferedCapacity'];
    }

    if (instance['NodeBufferPercentage'] !== undefined) {
      this['nodeBufferPercentage'] = instance['NodeBufferPercentage'];
    }

    if (instance['BufferedCapacity'] !== undefined) {
      this['bufferedCapacity'] = instance['BufferedCapacity'];
    }

    if (instance['RemainingBufferedCapacity'] !== undefined) {
      this['remainingBufferedCapacity'] = instance['RemainingBufferedCapacity'];
    }

    if (instance['IsClusterCapacityViolation'] !== undefined) {
      this['isClusterCapacityViolation'] = instance['IsClusterCapacityViolation'];
    }

    if (instance['MinNodeLoadValue'] !== undefined) {
      this['minNodeLoadValue'] = instance['MinNodeLoadValue'];
    }

    if (instance['MinNodeLoadId']) {
      this['minNodeLoadId'] = new models['LoadMetricInformationMinNodeLoadId']().deserialize(instance['MinNodeLoadId']);
    }

    if (instance['MaxNodeLoadValue'] !== undefined) {
      this['maxNodeLoadValue'] = instance['MaxNodeLoadValue'];
    }

    if (instance['MaxNodeLoadId']) {
      this['maxNodeLoadId'] = new models['LoadMetricInformationMaxNodeLoadId']().deserialize(instance['MaxNodeLoadId']);
    }
  }

  return this;
};

module.exports = LoadMetricInformation;