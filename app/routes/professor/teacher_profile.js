module.exports = (app) => {
  app.get('/teacher_profile/:email/:senha/:idscholl', function(req,res){

    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    
    const conteudo = {
      id: req.params.idscholl,
      email: req.params.email,
      senha: req.params.senha
    }

      query.getTeachers(connection, conteudo, function(error, results, fields){
        if (error) {
          console.log(error)
          connection.end(function (err) {
            console.log("conexão finalizada")
  
          });
          return res.json(error)
  
        } else if (results) {
          console.log(results)
          connection.end(function (err) {
            console.log("conexão finalizada")
  
          });
          return res.json(results)
        }
    });
  });
}