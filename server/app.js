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
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"]
  }
});
// DB 동기화
// sequelize.sync();
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
  console.log('User connected');

  socket.on('joinroom', (chatroomPk) => {
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
app.use(cors());
