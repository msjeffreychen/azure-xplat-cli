/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the HealthEvent class.
 * @constructor
 * @member {string} [sourceId]
 * 
 * @member {string} [property]
 * 
 * @member {number} [healthState]
 * 
 * @member {string} [timeToLiveInMilliSeconds]
 * 
 * @member {string} [description]
 * 
 * @member {string} [sequenceNumber]
 * 
 * @member {boolean} [removeWhenExpired]
 * 
 * @member {string} [sourceUtcTimestamp]
 * 
 * @member {string} [lastModifiedUtcTimestamp]
 * 
 * @member {boolean} [isExpired]
 * 
 * @member {string} [lastOkTransitionAt]
 * 
 * @member {string} [lastWarningTransitionAt]
 * 
 * @member {string} [lastErrorTransitionAt]
 * 
 */
function HealthEvent(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.sourceId !== undefined) {
      this.sourceId = parameters.sourceId;
    }
    if (parameters.property !== undefined) {
      this.property = parameters.property;
    }
    if (parameters.healthState !== undefined) {
      this.healthState = parameters.healthState;
    }
    if (parameters.timeToLiveInMilliSeconds !== undefined) {
      this.timeToLiveInMilliSeconds = parameters.timeToLiveInMilliSeconds;
    }
    if (parameters.description !== undefined) {
      this.description = parameters.description;
    }
    if (parameters.sequenceNumber !== undefined) {
      this.sequenceNumber = parameters.sequenceNumber;
    }
    if (parameters.removeWhenExpired !== undefined) {
      this.removeWhenExpired = parameters.removeWhenExpired;
    }
    if (parameters.sourceUtcTimestamp !== undefined) {
      this.sourceUtcTimestamp = parameters.sourceUtcTimestamp;
    }
    if (parameters.lastModifiedUtcTimestamp !== undefined) {
      this.lastModifiedUtcTimestamp = parameters.lastModifiedUtcTimestamp;
    }
    if (parameters.isExpired !== undefined) {
      this.isExpired = parameters.isExpired;
    }
    if (parameters.lastOkTransitionAt !== undefined) {
      this.lastOkTransitionAt = parameters.lastOkTransitionAt;
    }
    if (parameters.lastWarningTransitionAt !== undefined) {
      this.lastWarningTransitionAt = parameters.lastWarningTransitionAt;
    }
    if (parameters.lastErrorTransitionAt !== undefined) {
      this.lastErrorTransitionAt = parameters.lastErrorTransitionAt;
    }
  }    
}


/**
 * Validate the payload against the HealthEvent schema
 *
 * @param {JSON} payload
 *
 */
HealthEvent.prototype.serialize = function () {
  var payload = {};
  if (this['sourceId'] !== null && this['sourceId'] !== undefined) {
    if (typeof this['sourceId'].valueOf() !== 'string') {
      throw new Error('this[\'sourceId\'] must be of type string.');
    }
    payload['SourceId'] = this['sourceId'];
  }

  if (this['property'] !== null && this['property'] !== undefined) {
    if (typeof this['property'].valueOf() !== 'string') {
      throw new Error('this[\'property\'] must be of type string.');
    }
    payload['Property'] = this['property'];
  }

  if (this['healthState'] !== null && this['healthState'] !== undefined) {
    if (typeof this['healthState'] !== 'number') {
      throw new Error('this[\'healthState\'] must be of type number.');
    }
    payload['HealthState'] = this['healthState'];
  }

  if (this['timeToLiveInMilliSeconds'] !== null && this['timeToLiveInMilliSeconds'] !== undefined) {
    if (typeof this['timeToLiveInMilliSeconds'].valueOf() !== 'string') {
      throw new Error('this[\'timeToLiveInMilliSeconds\'] must be of type string.');
    }
    payload['TimeToLiveInMilliSeconds'] = this['timeToLiveInMilliSeconds'];
  }

  if (this['description'] !== null && this['description'] !== undefined) {
    if (typeof this['description'].valueOf() !== 'string') {
      throw new Error('this[\'description\'] must be of type string.');
    }
    payload['Description'] = this['description'];
  }

  if (this['sequenceNumber'] !== null && this['sequenceNumber'] !== undefined) {
    if (typeof this['sequenceNumber'].valueOf() !== 'string') {
      throw new Error('this[\'sequenceNumber\'] must be of type string.');
    }
    payload['SequenceNumber'] = this['sequenceNumber'];
  }

  if (this['removeWhenExpired'] !== null && this['removeWhenExpired'] !== undefined) {
    if (typeof this['removeWhenExpired'] !== 'boolean') {
      throw new Error('this[\'removeWhenExpired\'] must be of type boolean.');
    }
    payload['RemoveWhenExpired'] = this['removeWhenExpired'];
  }

  if (this['sourceUtcTimestamp'] !== null && this['sourceUtcTimestamp'] !== undefined) {
    if (typeof this['sourceUtcTimestamp'].valueOf() !== 'string') {
      throw new Error('this[\'sourceUtcTimestamp\'] must be of type string.');
    }
    payload['SourceUtcTimestamp'] = this['sourceUtcTimestamp'];
  }

  if (this['lastModifiedUtcTimestamp'] !== null && this['lastModifiedUtcTimestamp'] !== undefined) {
    if (typeof this['lastModifiedUtcTimestamp'].valueOf() !== 'string') {
      throw new Error('this[\'lastModifiedUtcTimestamp\'] must be of type string.');
    }
    payload['LastModifiedUtcTimestamp'] = this['lastModifiedUtcTimestamp'];
  }

  if (this['isExpired'] !== null && this['isExpired'] !== undefined) {
    if (typeof this['isExpired'] !== 'boolean') {
      throw new Error('this[\'isExpired\'] must be of type boolean.');
    }
    payload['IsExpired'] = this['isExpired'];
  }

  if (this['lastOkTransitionAt'] !== null && this['lastOkTransitionAt'] !== undefined) {
    if (typeof this['lastOkTransitionAt'].valueOf() !== 'string') {
      throw new Error('this[\'lastOkTransitionAt\'] must be of type string.');
    }
    payload['LastOkTransitionAt'] = this['lastOkTransitionAt'];
  }

  if (this['lastWarningTransitionAt'] !== null && this['lastWarningTransitionAt'] !== undefined) {
    if (typeof this['lastWarningTransitionAt'].valueOf() !== 'string') {
      throw new Error('this[\'lastWarningTransitionAt\'] must be of type string.');
    }
    payload['LastWarningTransitionAt'] = this['lastWarningTransitionAt'];
  }

  if (this['lastErrorTransitionAt'] !== null && this['lastErrorTransitionAt'] !== undefined) {
    if (typeof this['lastErrorTransitionAt'].valueOf() !== 'string') {
      throw new Error('this[\'lastErrorTransitionAt\'] must be of type string.');
    }
    payload['LastErrorTransitionAt'] = this['lastErrorTransitionAt'];
  }

  return payload;
};

/**
 * Deserialize the instance to HealthEvent schema
 *
 * @param {JSON} instance
 *
 */
HealthEvent.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['SourceId'] !== undefined) {
      this['sourceId'] = instance['SourceId'];
    }

    if (instance['Property'] !== undefined) {
      this['property'] = instance['Property'];
    }

    if (instance['HealthState'] !== undefined) {
      this['healthState'] = instance['HealthState'];
    }

    if (instance['TimeToLiveInMilliSeconds'] !== undefined) {
      this['timeToLiveInMilliSeconds'] = instance['TimeToLiveInMilliSeconds'];
    }

    if (instance['Description'] !== undefined) {
      this['description'] = instance['Description'];
    }

    if (instance['SequenceNumber'] !== undefined) {
      this['sequenceNumber'] = instance['SequenceNumber'];
    }

    if (instance['RemoveWhenExpired'] !== undefined) {
      this['removeWhenExpired'] = instance['RemoveWhenExpired'];
    }

    if (instance['SourceUtcTimestamp'] !== undefined) {
      this['sourceUtcTimestamp'] = instance['SourceUtcTimestamp'];
    }

    if (instance['LastModifiedUtcTimestamp'] !== undefined) {
      this['lastModifiedUtcTimestamp'] = instance['LastModifiedUtcTimestamp'];
    }

    if (instance['IsExpired'] !== undefined) {
      this['isExpired'] = instance['IsExpired'];
    }

    if (instance['LastOkTransitionAt'] !== undefined) {
      this['lastOkTransitionAt'] = instance['LastOkTransitionAt'];
    }

    if (instance['LastWarningTransitionAt'] !== undefined) {
      this['lastWarningTransitionAt'] = instance['LastWarningTransitionAt'];
    }

    if (instance['LastErrorTransitionAt'] !== undefined) {
      this['lastErrorTransitionAt'] = instance['LastErrorTransitionAt'];
    }
  }

  return this;
};

module.exports = HealthEvent;