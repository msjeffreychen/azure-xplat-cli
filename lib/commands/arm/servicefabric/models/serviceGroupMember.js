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
 * Initializes a new instance of the ServiceGroupMember class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {array} [serviceGroupMemberDescription]
 * 
 */
function ServiceGroupMember(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.serviceGroupMemberDescription) {
      var tempParametersserviceGroupMemberDescription = [];
      parameters.serviceGroupMemberDescription.forEach(function(element) {
        if (element) {
          element = new models['ServiceGroupMemberDescription'](element);
        }
        tempParametersserviceGroupMemberDescription.push(element);
      });
      this.serviceGroupMemberDescription = tempParametersserviceGroupMemberDescription;
    }
  }    
}


/**
 * Validate the payload against the ServiceGroupMember schema
 *
 * @param {JSON} payload
 *
 */
ServiceGroupMember.prototype.serialize = function () {
  var payload = {};
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['Name'] = this['name'];
  }

  if (util.isArray(this['serviceGroupMemberDescription'])) {
    payload['ServiceGroupMemberDescription'] = [];
    for (var i = 0; i < this['serviceGroupMemberDescription'].length; i++) {
      if (this['serviceGroupMemberDescription'][i]) {
        payload['ServiceGroupMemberDescription'][i] = this['serviceGroupMemberDescription'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to ServiceGroupMember schema
 *
 * @param {JSON} instance
 *
 */
ServiceGroupMember.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['Name'] !== undefined) {
      this['name'] = instance['Name'];
    }

    if (instance['ServiceGroupMemberDescription']) {
      var tempInstanceServiceGroupMemberDescription = [];
      instance['ServiceGroupMemberDescription'].forEach(function(element1) {
        if (element1) {
          element1 = new models['ServiceGroupMemberDescription']().deserialize(element1);
        }
        tempInstanceServiceGroupMemberDescription.push(element1);
      });
      this['serviceGroupMemberDescription'] = tempInstanceServiceGroupMemberDescription;
    }
  }

  return this;
};

module.exports = ServiceGroupMember;