const express = require('express')
const mysql = require('mysql');

const app = express();

app.use('/', express.static('www'))
app.use('/build', express.static('build'))

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
});



// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Password~1'
// });

// connection.connect();

// connection.query()
// connection.end();