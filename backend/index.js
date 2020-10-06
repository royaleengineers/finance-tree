const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
// This is for avoiding the CORS error that is we can call the backend API from the browser
app.use(cors());

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || 'nodedb'
});
connection.connect((err) => {
    if (err) { console.log(err); } else { console.log("Connected to Database Succesfully..."); }
});

app.get('/perMonth', ()=>{
    connection.query('SELECT expense, month FROM expenses WHERE user=? ORDER BY month DESC LIMIT 10', [req.query.user])
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server on http://localhost:3000");
});