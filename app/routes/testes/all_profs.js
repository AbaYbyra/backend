module.exports = (app) => {
    app.get('/profs_all', function(req,res){
        let connection = app.app.config.database();
        let query = app.app.models.modelQueries;
 
        query.getProfessores_all(connection, function(error, results, fields){
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