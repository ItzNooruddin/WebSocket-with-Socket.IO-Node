const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  }
});

// Serve a simple page
app.get('/', (req, res) => {
  res.send("WebSocket server is running");
});

// Handle socket connection
io.on('connection', (socket) => {
  console.log('💬 A user connected:', socket.id);

  // Listen for messages from client
  socket.on('message', (data) => {
    console.log('📨 Received message:', data);
    
    // Send to all other clients
    socket.broadcast.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ A user disconnected:', socket.id);
  });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
