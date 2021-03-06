/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
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
function NodeNodeDeactivationInfo() {
}

/**
 * Defines the metadata of NodeNodeDeactivationInfo
 *
 * @returns {object} metadata of NodeNodeDeactivationInfo
 *
 */
NodeNodeDeactivationInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Node_NodeDeactivationInfo',
    type: {
      name: 'Composite',
      className: 'NodeNodeDeactivationInfo',
      modelProperties: {
        nodeDeactivationIntent: {
          required: false,
          serializedName: 'NodeDeactivationIntent',
          type: {
            name: 'Number'
          }
        },
        nodeDeactivationStatus: {
          required: false,
          serializedName: 'NodeDeactivationStatus',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = NodeNodeDeactivationInfo;
