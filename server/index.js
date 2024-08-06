const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static('client'));
const users = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  console.log('New User');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('sendMessage', (msg) => {
    io.emit('sendMessage', msg);
  });
});
