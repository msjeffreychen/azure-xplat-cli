/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResumeApplicationUpgrade class.
 * @constructor
 * @member {string} [upgradeDomainName]
 * 
 */
function ResumeApplicationUpgrade() {
}

/**
 * Defines the metadata of ResumeApplicationUpgrade
 *
 * @returns {object} metadata of ResumeApplicationUpgrade
 *
 */
ResumeApplicationUpgrade.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'resumeApplicationUpgrade',
    type: {
      name: 'Composite',
      className: 'ResumeApplicationUpgrade',
      modelProperties: {
        upgradeDomainName: {
          required: false,
          serializedName: 'UpgradeDomainName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResumeApplicationUpgrade;
