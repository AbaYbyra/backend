module.exports = (app) => {
    app.get('/escola_id/:email/:senha', function(req,res){
        let connection = app.app.config.database();
        let query = app.app.models.modelQueries;
        const conteudo = {
          email: req.params.email,
          senha: req.params.senha
        }
        
        var isEmpty = function(obj) {
            return Object.keys(obj).length === 0;
          }

        query.getEscola_id(connection, conteudo, function(error, results, fields){
          if (error) {
            console.log(error)
            connection.end(function (err) {
              console.log("conexão finalizada")
            });
            return res.json(error)
        }
        else if (!isEmpty(results)) {
            connection.end(function (err) {
              console.log("conexão finalizada")
              return res.json(results)
            });
        }
          else if (isEmpty(results)) {
            connection.end(function (err) {
              console.log("conexão finalizada")
              return res.json(false)
            });
        }
          
 
    });
});
  }