const express = require('express');
const dotenv = require('dotenv').config();

// Import routes
const rootRouter = require('./routes/root.routes');

const app = express();
const PORT = process.env.PORT;

// Routes
app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`API connected successfully on port ${PORT}`);
});