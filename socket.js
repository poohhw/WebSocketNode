const { createWebSocketStream } = require('ws');
const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({server});

    wss.on('connection',(ws,req) =>{
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속',ip);

        ws.on('message',(message) =>{
            wss
            .clients
            .forEach(function each(client) {
                //if (client.readyState == WebSocket.OPEN && client != ws) {
                if (client.readyState == WebSocket.OPEN) {
                    client.send(message); 
                }
            });
        });

        ws.on('error',(error) =>{
            console.log(error);
        });

        ws.on('close',() =>{
            console.log('클라이언트 접속 해제',ip);
        });

    });
};