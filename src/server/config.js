const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'u9dsm2bwhcl86vwj',
  password: 'jdopcbiuo25qsb79',
  database: 'cnc30bel1ajaxund'
})

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
module.exports = connection;
