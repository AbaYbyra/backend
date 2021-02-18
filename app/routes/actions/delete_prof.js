module.exports = function (app){
    app.get('/delete_prof/:id_escola/:id_professor', function (req, res) {
     let connection = app.app.config.database();
     let query = app.app.models.modelQueries; 
   
     let conteudo = { //OBJETO DO MÉTODO POST
          id_escola: req.params.id_escola,
          id_professor: req.params.id_professor,
        
        }
    
       query.deletar_professor(connection, conteudo, function(error, results){ //QUERY 
       console.log(error, results)

           if (error) {
               return res.json({
                   error: 'parametro invaliado',
                   sql: error.sql
            })
           } else if (results) {
               return res.json(results.affectedRows)
           }

       connection.end(function(err) {

        console.log("conexão finalizada")

    });
     });
   
    })
     }