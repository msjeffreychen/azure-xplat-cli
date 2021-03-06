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
 * Initializes a new instance of the ReplicaHealthEvaluation5 class.
 * @constructor
 * @member {string} [serviceName]
 * 
 * @member {array} [unhealthyEvaluations]
 * 
 */
function ReplicaHealthEvaluation5(parameters) {
  ReplicaHealthEvaluation5['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.serviceName !== undefined) {
      this.serviceName = parameters.serviceName;
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
  }    
}

util.inherits(ReplicaHealthEvaluation5, models['HealthEvaluation']);

/**
 * Validate the payload against the ReplicaHealthEvaluation5 schema
 *
 * @param {JSON} payload
 *
 */
ReplicaHealthEvaluation5.prototype.serialize = function () {
  var payload = ReplicaHealthEvaluation5['super_'].prototype.serialize.call(this);
  if (this['serviceName'] !== null && this['serviceName'] !== undefined) {
    if (typeof this['serviceName'].valueOf() !== 'string') {
      throw new Error('this[\'serviceName\'] must be of type string.');
    }
    payload['ServiceName'] = this['serviceName'];
  }

  if (util.isArray(this['unhealthyEvaluations'])) {
    payload['UnhealthyEvaluations'] = [];
    for (var i = 0; i < this['unhealthyEvaluations'].length; i++) {
      if (this['unhealthyEvaluations'][i]) {
        payload['UnhealthyEvaluations'][i] = this['unhealthyEvaluations'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to ReplicaHealthEvaluation5 schema
 *
 * @param {JSON} instance
 *
 */
ReplicaHealthEvaluation5.prototype.deserialize = function (instance) {
  ReplicaHealthEvaluation5['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['ServiceName'] !== undefined) {
      this['serviceName'] = instance['ServiceName'];
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
  }

  return this;
};

module.exports = ReplicaHealthEvaluation5;
