const express = require('express')

const io = require('socket.io')({
    path: '/fusion'
})

const app = express()

const port = 8080

app.get('/', (req, res) => res.send('HEllo Web'))

const server =  app.listen(port, () => {
    console.log('listnrening');
})

io.listen(server)

const webRTCNameSpace = io.of('/webRTCPeers')

webRTCNameSpace.on('connection', socket => {
    console.log(socket.id);

    socket.on('diconnect', () => {
        console.log(`${socket.id} has disconnected`);
    })
})

