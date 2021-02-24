const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io-client');
const http = require('http');
require('dotenv').config();


require('./server/config/mongoose.config');
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/perfume.routes')(app);


const server = http.createServer(app);

const io = socketIO(server, { cors: true });

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );

io.on('connection', socket => {
    socket.on('addComment', data => {
      console.log('USER ADDED A COMMENT!');
      socket.broadcast.emit('getComment', data);
    });
  });