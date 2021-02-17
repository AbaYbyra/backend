module.exports = (app) => {
    app.get('/auth/:email/:senha', function(req,res){
    let connection = app.app.config.database();
    let query = app.app.models.modelQueries;
    const conteudo = {
          email: req.params.email,
          senha: req.params.senha
        }
          query.getAuth(connection, conteudo, function(error, results, fields){
           
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
              return res.json(results)
            }
    });
});
  }