

class Sockets {
    
    constructor( io ) {
        this.io = io;
        
        this.socketEvents();
    }

    socketEvents() {
        //On connection
        this.io.on('connection', ( socket ) => { 

            //Event listener: message-to-server
            socket.on('message-to-server', ( data ) => {      
                console.log(data)  
                socket.emit('message-from-server', data);
            })
        
         });
    }
}

module.exports = Sockets;