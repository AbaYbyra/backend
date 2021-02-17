let mysql = require('mysql');

let connMySQL=function(){
  console.log("conexão com o banco de dados estabelecida.");

  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
   // password: '123',
    password: 'vertrigo',
    database: 'abaybyra_final'


    /*   host: 'mysql742.umbler.com:41890',
    user: 'abaybyra',
   // password: '123',
    password: 'abaybyra12',
    database: 'abaybyra'
    */
  });
}

module.exports = function(){
  return connMySQL;
}