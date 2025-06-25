const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Set up WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Handle incoming messages
socket.onmessage = (event) => {const message = event.data; const li = document.createElement('li');li.textContent = message;messageList.appendChild(li);
};

// Handle send button click
sendButton.addEventListener('click', ()=> {
    const message = messageInput.value;socket.send(message);messageInput.value = '';
});