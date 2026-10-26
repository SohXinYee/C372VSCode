const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SoiDft2026',
  database: 'petcare'
});
