'use strict';

/**
 * mediation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mediation.mediation');
