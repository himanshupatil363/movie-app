const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('client/public/uploads'))
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{console.log("connected")});

const movieRouter = require('./routes/movies')
app.use("/movies",movieRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Running on ${process.env.PORT}`)
});

