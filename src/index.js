const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get("/", (req, res) => {
    res.send("<h2>Ambiente de Desenvolvimento - Bravo GRC</h2>");
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI) 
    .then(() => console.log("Connected to MongoDB Atlas")) 
    .catch((error) => console.error(error));

app.listen(9000, () => console.log('Server listning on port', port))