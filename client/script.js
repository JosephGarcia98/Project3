const socket=io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messageContainer = document.getElementById('message-Container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('sendMessage', input.value);
    input.value = '';
  }
});

socket.on('sendMessage', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});