const express = require("express");
const app = express();
const uuid = require("uuid");

const server = require("http").createServer(app);
const path = require("path");
const socketio = require("socket.io");
const io = socketio(server);
const formatMessage = require("./utils/messages");

let connections = [];
let users = [];
const botName = "Admin";
let username = "";
let leftUser = "";

// Set static folder
app.use(express.static(path.join(__dirname, "client", "public")));

// Run when client connects
io.sockets.on("connection", (socket) => {
  let botId = uuid.v4();
  if (!users.includes(socket.handshake.headers.referer.substring(22))) {
    connections.push(socket);
    users.push(socket.handshake.headers.referer.substring(22));

    username = users[users.length - 1];

    // Broadcast when a user connects
    socket.broadcast.emit(
      "message",
      formatMessage(botId, botName, `${username} joined the chat`)
    );
  }

  // Welcome user
  socket.emit("message", formatMessage(botId, botName, "Welcome to RChat!"));

  // Run when client disconnects
  socket.on("disconnect", (data) => {
    const index = users.findIndex(
      (t) => t === socket.handshake.headers.referer.substring(22)
    );
    leftUser = users[index];

    connections.splice(connections.indexOf(socket), 1);
    users.splice(index, 1);

    io.emit(
      "message",
      formatMessage(botId, botName, `${leftUser} left the chat`)
    );
  });

  // Listen for chat message
  socket.on("chatMessage", (data) => {
    io.emit("message", formatMessage(data.id, data.sender, data.msg));
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
