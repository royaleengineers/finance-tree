const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
// This is for avoiding the CORS error that is we can call the backend API from the browser
app.use(cors());

// var connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST || 'localhost',
//     user: process.env.MYSQL_USER || 'root',
//     password: process.env.MYSQL_PASS || '',
//     database: process.env.MYSQL_DB || 'nodedb'
// });
// connection.connect((err) => {
//     if (err) { console.log(err); } else { console.log("Connected to Database Succesfully..."); }
// });

app.get('/perMonth', (req, res)=>{
    connection.query('SELECT expense, month FROM expenses WHERE user=? ORDER BY month DESC LIMIT 10', [req.query.user], (result, err)=>{
        if(!err){
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/sample', (req, res)=>{
    var data = {
        'Jan':30,
        'Feb':20,
        'Mar':50,
        'April':70,
        'May':43,
        'June':75,
        'July':53,
        'Aug':76,
        'Sep':86,
        'Oct':32,
        'Nov':76,
        'Dec':99,
    };
    res.send(JSON.stringify(data));
});


app.listen(process.env.PORT || 8000, ()=>{
    console.log("Server on http://localhost:8000");
});