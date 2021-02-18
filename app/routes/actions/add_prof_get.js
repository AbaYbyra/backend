 module.exports = function (app){
 app.get('/add_prof2/:nome/:email/:senha/:id_escola', function (req, res) {
  let connection = app.app.config.database();
  let query = app.app.models.modelQueries; 

  let conteudo = { //OBJETO DO MÉTODO POST
       nome: req.params.nome,
       email: req.params.email,
       senha: req.params.senha,
       escola: req.params.id_escola
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