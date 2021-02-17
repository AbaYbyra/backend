module.exports = (app) => {
    app.get('/escola_profile/:email/:senha', function(req,res){
        let connection = app.app.config.database();
        let query = app.app.models.modelQueries;
        const conteudo = {
          email: req.params.email,
          senha: req.params.senha
        }
        query.getEscolaProfile(connection, conteudo, function(error, results, fields){
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