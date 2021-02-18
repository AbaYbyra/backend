const {check, validationResult } = require("express-validator");
 module.exports = function (app){
 app.post('/add_prof',[
  check('nome', 'Nome é Obrigatótio').notEmpty(),
  check('email', 'Email é Obrigatório').notEmpty(),
  check('senha', 'A senha precisa ter no mínimo 6 digitos').isLength({min:6}),
  check('id_escola', 'Informe o numero da escola').notEmpty(),
], function (req, res) {
  let erros = validationResult(req);
  if(!erros.isEmpty()){
 //   res.render("views/index", {validacao:erros})
    console.log(erros);
    return res.json(erros);;
  }

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