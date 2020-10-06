const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
// This is for avoiding the CORS error that is we can call the backend API from the browser
app.use(cors());



app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server on http://localhost:3000");
});