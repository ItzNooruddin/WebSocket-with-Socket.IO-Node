# 🔌 Real-Time WebSocket Server with Socket.IO & Node.js

This project is a basic implementation of a real-time WebSocket server using **Node.js**, **Express**, and **Socket.IO**. It demonstrates how to set up bidirectional communication between the server and multiple clients, allowing instant message broadcasting.

## 📦 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Socket.IO](https://socket.io/)

## 📁 Project Structure

noor-app/
├── server.js # Main server code
├── index.html # Simple frontend client (optional)
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/ItzNooruddin/WebSocket-with-Socket.IO.git
cd noor-app

### 2. Install Dependencies

npm install

### 3. Run the Server

node server.js

The server will start at:
📍 http://localhost:3000

### 4. Test with HTML Client

Open the index.html file in a browser and test the real-time messaging between multiple browser tabs or devices.

🧠 How It Works
The server listens for WebSocket connections.
When a user sends a message, it's broadcast to all other connected clients using Socket.IO.
Clients listen for message events and display them instantly.

🔐 CORS Note
This setup uses open CORS (origin: "*") for development purposes. For production, restrict it to your actual frontend domain.

💡 Use Cases
Chat applications
Real-time notifications
Collaborative tools
Live dashboards

📜 License
This project is open source and available under the MIT License.

✨ Made with 💘 by Noor
