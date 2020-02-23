const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const webserver = http.createServer(app);
const io = socketio(webserver);

io.on('connection', socket => {
  console.log('a user connected');
});

webserver.listen(3000, () => {
  console.log('listening on 3000')
});
