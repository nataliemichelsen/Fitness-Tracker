// require
const express = require('express');
const mongoose = require('mongoose');

// express server connection
const server = express();

// port
const PORT = process.env.PORT || 3000;

// mongoose connection
mongoose.connect(
    process.env.MONGODB_URI || '',
    {  }
);

// servers
server.use()
server.use
server.use
server.use
server.use
server.use

// listen
server.listen(PORT, () => {
    console.log(`Server Listening on ...`)
});