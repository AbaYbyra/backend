module.exports = (app) => {
    app.get('/professores/:id_escola/', function(req,res){
        let connection = app.app.config.database();
        let query = app.app.models.modelQueries;
        const conteudo = {
          id_escola: req.params.id_escola,
        }
        query.getProfessoresEscola_id(connection, conteudo, function(error, results, fields){
        
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