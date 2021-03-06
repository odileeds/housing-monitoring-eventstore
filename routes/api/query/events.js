const eventQuery = require('../../../handlers/eventQuery');
const eventQueryGeometry = require('../../../handlers/eventQueryGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * /events:
   *   get:
   *     tags:
   *       - query
   *       - events
   *     summary: Retrieve lists of events from the event store 
   *     parameters:
   *       - $ref: "#/components/parameters/eventTypeQuery"
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *       - $ref: "#/components/parameters/refQuery"
   *       - $ref: "#/components/parameters/schemeQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               type: array
   *               items: 
   *                 $ref: "#/components/schemas/eventSummary"
   */
  server.get('/events', eventQuery);
  server.head('/events', eventQuery);

  /**
   * @swagger
   *
   * /events/geometry:
   *   get:
   *     tags:
   *       - query
   *       - events
   *       - geojson
   *     summary: Retrieve FeatureCollection of events from the event store 
   *     parameters:
   *       - $ref: "#/components/parameters/eventTypeQuery"
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *       - $ref: "#/components/parameters/refQuery"
   *       - $ref: "#/components/parameters/schemeQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               type: array
   *               items: 
   *                 $ref: "#/components/schemas/eventSummary"
   */
  server.get('/events/geometry', eventQueryGeometry);
  server.head('/events/geometry', eventQueryGeometry);
};
