require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const router = require("./routes/index");
const passportConfig = require("./passport/passport");
const { sequelize } = require("./models/index");
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
passportConfig();

app.use(passport.session());
app.use("/api", router);

io.on('connection', (socket) => {
  console.log("------------------------------------")
  console.log(socket.id);
  console.log("------------------------------------")
  console.log('User connected');

  socket.on('joinroom', (chatroomPk) => {
    console.log(socket.id + "가 방 열어달래~~~~")
    socket.join(`chatroom${chatroomPk}`);
  })

  socket.on('sendMsg', ({ chatroomPk, newChat }) => {
    console.log(chatroomPk)
    console.log(newChat)
    io.to(`chatroom${chatroomPk}`).emit('newMsg', newChat);
  })
})

/// /////////////////////////////////////////////////////////////
server.listen(8000, () => {
  console.log(`Listening on 8000`);
});
