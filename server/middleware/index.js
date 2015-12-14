'use strict';


/**
 * Requires various middleware files and returns them as properties of an object.
 * 
 * @param io - The global Socket.IO server object.
 * @readonly
 */
module.exports = function(io) {


    /**
     * @namespace
     * @property {Object} Permissions   - Permission middleware.
     * @property {Object} Authorization - Authorization middleware.
     * @property {Object} SocketEvents  - Socket event middleware.
     * @readonly
     */
    var Middleware = {
        Permissions: require('./permissions.js'),
        Authorization: require('./authorization.js'),
        SocketEvents: require('./socket-events.js')(io)
    };


    return Middleware;
};