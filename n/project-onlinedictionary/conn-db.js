const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'fru7777',
    port:3306,
    
    database: 'entries'
});
connection.connect()
exports.searchTerm = function(term, res) {
    connection.query("SELECT * FROM entries WHERE word = " + connection.escape(term), function(err, rows, fields) {
        if (err) throw err
        res.json(rows)
    })
}