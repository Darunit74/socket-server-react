
//Express's server
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server =  http.createServer(this.app);

        //Socket configurations
        this.io = socketio( this.server, { /*Configurations*/ } );
    }

    middlewares() {
        //Deploy public directory
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }

    socketsConfiguration() {
        new Sockets( this.io );
    }

    execute() {

        //Middlewares Initialization
        this.middlewares();

        //Socket Initialization
        this.socketsConfiguration();

        //Server Initialization
        this.server.listen(this.port, () => {
            console.log('Server running on the port: ' + this.port);
        });
    }
}

module.exports = Server;