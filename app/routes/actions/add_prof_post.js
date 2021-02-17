 module.exports = function (app){
 app.post('/add_prof', function (req, res) {
  let connection = app.app.config.database();
  let query = app.app.models.modelQueries; 

  let conteudo = { //OBJETO DO MÉTODO POST
       nome: req.body.nome,
       email: req.body.email,
       senha: req.body.senha,
       escola: req.body.id_escola
     }
 
    query.cadastroProfessor(connection, conteudo, function(error, results){ //QUERY 
    
      if (error) {
        connection.end(function (err) {
          console.log("conexão finalizada")

        });
        return res.json({
          error: 'parametro invaliado',
          sql: error.sql


        })

      } else if (results) {
        connection.end(function (err) {
          console.log("conexão finalizada")

        });
        return res.json(results.affectedRows)
      }



  });

 })
  }