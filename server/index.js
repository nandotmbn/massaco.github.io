const express = require('express');
const app = express();
require('dotenv').config()
const http = require('http').createServer(app);
const WebSocket = require('./middlewares/web-socket');
const Startup = require('./middlewares/startup');
const auth = require('./routes/auth');
const update = require('./routes/update');
const hospital = require('./routes/hospital');
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});


Startup(app);
WebSocket(io);
app.set('socketIo', io);
app.disable('etag');

app.use('/api/auth', auth);
app.use('/api/hospital', hospital);
app.use('/api/update', update);

const PORT = process.env.PORT || 8888;
http.listen(PORT, () => console.log(`App now is listening on port ${PORT}`))