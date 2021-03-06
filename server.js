// require - ✓
const express = require('express');
const mongoose = require('mongoose');

// server connection - ✓
const server = express();

// port = ✓
const PORT = process.env.PORT || 3001;

// mongoose connection - ✓
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    { useNewUrlParser: true }
);

// express servers - ✓
server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes - ✓
server.use(require('./routes/api'));
server.use(require('./routes/view'));

// listen - ✓
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

// needed to construct this page from scratch