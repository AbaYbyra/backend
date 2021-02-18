const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser'); 
const cors = require('cors')
const app = express();


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', '././app/views')



consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app)


app.use(function(req, res, next) {
  var err = new Error('nao encontrado');
  err.status = 404;
  res.render('error');
});


module.exports = app;