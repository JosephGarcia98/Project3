const socket=io();
const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (message.value) {
    socket.emit('sendMessage', message.value);
    message.value = '';
  }
});

socket.on('sendMessage', function(msg) {
  var messageOutput = document.createElement('li');
  messageOutput.textContent = msg;
  messages.appendChild(messageOutput);
  window.scrollTo(0, document.body.scrollHeight);
});