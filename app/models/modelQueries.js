module.exports = function(){

 // const id = req.params.id
  /*QUERYS DE INSERÇÃO NO BANCO / CADASTROS */

  /* Cadastrar professor*/ 
  this.cadastroProfessor = function (connection, conteudo, callback){
    connection.query(`insert into professores values(default, '${conteudo.nome}' , '${conteudo.email}', '${conteudo.senha}', default, ${conteudo.escola})`, callback);
  }

    /* Cadastrar Alunos*/ 
  this.cadastroAlunos= function (connection, conteudo, callback){
    connection.query(`insert into alunos values(null, '${conteudo.email}' , '${conteudo.senha}', ${conteudo.turma}, ${conteudo.id_escola},'${conteudo.nome}',${conteudo.data_nascimento} null)`, callback);
  }

     /* Cadastrar Escola*/ 
  this.cadastroEscola = function (connection, conteudo, callback){
    connection.query(`insert into escolas values(default,'${conteudo.nome}', '${conteudo.email}', '${conteudo.senha}', '${conteudo.logradouro}',${conteudo.numero},'${conteudo.complemento}','${conteudo.bairro}', '${conteudo.cidade}', '${conteudo.estado}', '${conteudo.cep}','${conteudo.telefone}', '${conteudo.telefone2}', ${conteudo.publica}, default)`,callback);
  }

    /* QUERY QUE RETORNA BOOLEAN DE LOGIN
        DELETE FROM professores WHERE professor_id=1 and escola_id=1;
    */ 
    this.deletar_professor = function (connection, conteudo, callback){
      connection.query(`DELETE FROM professores WHERE professor_id= ${conteudo.id_professor} and escola_id=${conteudo.id_escola}`, callback);
    }

  /* QUERY QUE RETORNA PROFESSORES CADASTRADOS COM ID DA ESCOLA*/ 
  this.getTeachers = function (connection, conteudo, callback){
    connection.query(`select * from professores where escola_id=${conteudo.id} and email='${conteudo.email}' and senha='${conteudo.senha}';`, callback);
  }


     /* QUERY QUE RETORNA BOOLEAN DE LOGIN*/ 
     this.getAuth = function (connection, conteudo, callback){
      connection.query(`SELECT COUNT(professor_id) as professor, (select COUNT(escola_id) 
      from escolas where email='${conteudo.email}' and senha='${conteudo.senha}') as escola 
      from professores where email='${conteudo.email}' and senha='${conteudo.senha}'`, callback);
    }

        /* QUERY QUE RETORNA BOOLEAN DE LOGIN*/ 
        this.getEscolaProfile = function (connection, conteudo, callback){
          connection.query(`SELECT * from escolas where email='${conteudo.email}' and senha='${conteudo.senha}'`, callback);
        }

        this.getProfessoresEscola_id = function (connection, conteudo, callback){
          connection.query(`select * from professores where escola_id=${conteudo.id_escola}`, callback);
        }

        this.getProfessoresEscola = function (connection, conteudo, callback){
          connection.query(`select * from professores where escola_id=${conteudo.id}}';`, callback);
        }

        this.getEscola_id = function (connection, conteudo, callback){
          connection.query(`select escola_id from escolas where email='${conteudo.email}' and senha='${conteudo.senha}'`, callback);
        }

        this.getEscola_all = function (connection, callback){
          connection.query(`select * from escolas`, callback);
        }
        this.getProfessores_all = function (connection, callback){
          connection.query(`select * from professores`, callback);
        }

/* 
  this.getConteudoFront = function (connection, callback){
    connection.query("select * from conteudo where categoria = 'frontend'", callback);
  }

  this.getConteudoBack = function (connection, callback){
    connection.query("select * from conteudo where categoria = 'backend'", callback);
  }

  this.salvarConteudo = function (conteudo, connection, callback){
    connection.query("insert into conteudo set ?", conteudo);
  }
   */
  return this;
}