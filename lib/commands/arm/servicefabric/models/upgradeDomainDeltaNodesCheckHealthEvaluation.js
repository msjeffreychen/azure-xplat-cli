/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the UpgradeDomainDeltaNodesCheckHealthEvaluation class.
 * @constructor
 * @member {string} [upgradeDomainName]
 * 
 * @member {array} [unhealthyEvaluations]
 * 
 * @member {number} [baselineErrorCount]
 * 
 * @member {number} [baselineTotalCount]
 * 
 * @member {number} [totalCount]
 * 
 * @member {number} [maxPercentUpgradeDomainDeltaUnhealthyNodes]
 * 
 */
function UpgradeDomainDeltaNodesCheckHealthEvaluation(parameters) {
  UpgradeDomainDeltaNodesCheckHealthEvaluation['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.upgradeDomainName !== undefined) {
      this.upgradeDomainName = parameters.upgradeDomainName;
    }
    if (parameters.unhealthyEvaluations) {
      var tempParametersunhealthyEvaluations = [];
      parameters.unhealthyEvaluations.forEach(function(element) {
        if (element) {
          element = new models['UnhealthyEvaluation'](element);
        }
        tempParametersunhealthyEvaluations.push(element);
      });
      this.unhealthyEvaluations = tempParametersunhealthyEvaluations;
    }
    if (parameters.baselineErrorCount !== undefined) {
      this.baselineErrorCount = parameters.baselineErrorCount;
    }
    if (parameters.baselineTotalCount !== undefined) {
      this.baselineTotalCount = parameters.baselineTotalCount;
    }
    if (parameters.totalCount !== undefined) {
      this.totalCount = parameters.totalCount;
    }
    if (parameters.maxPercentUpgradeDomainDeltaUnhealthyNodes !== undefined) {
      this.maxPercentUpgradeDomainDeltaUnhealthyNodes = parameters.maxPercentUpgradeDomainDeltaUnhealthyNodes;
    }
  }    
}

util.inherits(UpgradeDomainDeltaNodesCheckHealthEvaluation, models['HealthEvaluation']);

/**
 * Validate the payload against the UpgradeDomainDeltaNodesCheckHealthEvaluation schema
 *
 * @param {JSON} payload
 *
 */
UpgradeDomainDeltaNodesCheckHealthEvaluation.prototype.serialize = function () {
  var payload = UpgradeDomainDeltaNodesCheckHealthEvaluation['super_'].prototype.serialize.call(this);
  if (this['upgradeDomainName'] !== null && this['upgradeDomainName'] !== undefined) {
    if (typeof this['upgradeDomainName'].valueOf() !== 'string') {
      throw new Error('this[\'upgradeDomainName\'] must be of type string.');
    }
    payload['UpgradeDomainName'] = this['upgradeDomainName'];
  }

  if (util.isArray(this['unhealthyEvaluations'])) {
    payload['UnhealthyEvaluations'] = [];
    for (var i = 0; i < this['unhealthyEvaluations'].length; i++) {
      if (this['unhealthyEvaluations'][i]) {
        payload['UnhealthyEvaluations'][i] = this['unhealthyEvaluations'][i].serialize();
      }
    }
  }

  if (this['baselineErrorCount'] !== null && this['baselineErrorCount'] !== undefined) {
    if (typeof this['baselineErrorCount'] !== 'number') {
      throw new Error('this[\'baselineErrorCount\'] must be of type number.');
    }
    payload['BaselineErrorCount'] = this['baselineErrorCount'];
  }

  if (this['baselineTotalCount'] !== null && this['baselineTotalCount'] !== undefined) {
    if (typeof this['baselineTotalCount'] !== 'number') {
      throw new Error('this[\'baselineTotalCount\'] must be of type number.');
    }
    payload['BaselineTotalCount'] = this['baselineTotalCount'];
  }

  if (this['totalCount'] !== null && this['totalCount'] !== undefined) {
    if (typeof this['totalCount'] !== 'number') {
      throw new Error('this[\'totalCount\'] must be of type number.');
    }
    payload['TotalCount'] = this['totalCount'];
  }

  if (this['maxPercentUpgradeDomainDeltaUnhealthyNodes'] !== null && this['maxPercentUpgradeDomainDeltaUnhealthyNodes'] !== undefined) {
    if (typeof this['maxPercentUpgradeDomainDeltaUnhealthyNodes'] !== 'number') {
      throw new Error('this[\'maxPercentUpgradeDomainDeltaUnhealthyNodes\'] must be of type number.');
    }
    payload['MaxPercentUpgradeDomainDeltaUnhealthyNodes'] = this['maxPercentUpgradeDomainDeltaUnhealthyNodes'];
  }

  return payload;
};

/**
 * Deserialize the instance to UpgradeDomainDeltaNodesCheckHealthEvaluation schema
 *
 * @param {JSON} instance
 *
 */
UpgradeDomainDeltaNodesCheckHealthEvaluation.prototype.deserialize = function (instance) {
  UpgradeDomainDeltaNodesCheckHealthEvaluation['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['UpgradeDomainName'] !== undefined) {
      this['upgradeDomainName'] = instance['UpgradeDomainName'];
    }

    if (instance['UnhealthyEvaluations']) {
      var tempInstanceUnhealthyEvaluations = [];
      instance['UnhealthyEvaluations'].forEach(function(element1) {
        if (element1) {
          element1 = new models['UnhealthyEvaluation']().deserialize(element1);
        }
        tempInstanceUnhealthyEvaluations.push(element1);
      });
      this['unhealthyEvaluations'] = tempInstanceUnhealthyEvaluations;
    }

    if (instance['BaselineErrorCount'] !== undefined) {
      this['baselineErrorCount'] = instance['BaselineErrorCount'];
    }

    if (instance['BaselineTotalCount'] !== undefined) {
      this['baselineTotalCount'] = instance['BaselineTotalCount'];
    }

    if (instance['TotalCount'] !== undefined) {
      this['totalCount'] = instance['TotalCount'];
    }

    if (instance['MaxPercentUpgradeDomainDeltaUnhealthyNodes'] !== undefined) {
      this['maxPercentUpgradeDomainDeltaUnhealthyNodes'] = instance['MaxPercentUpgradeDomainDeltaUnhealthyNodes'];
    }
  }

  return this;
};

module.exports = UpgradeDomainDeltaNodesCheckHealthEvaluation;