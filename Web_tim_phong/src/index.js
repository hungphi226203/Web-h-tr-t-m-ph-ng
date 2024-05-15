const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
// //HTTP logger
// app.use(morgan('combined'))

//handlebars helpers
const hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
      json: function(context) {
          return JSON.stringify(context);
      }
  }
});
//Template engine
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

app.engine('.hbs', hbs.engine);

route(app)




app.listen(3000, () => {
    console.log('Máy chủ đang lắng nghe '+port)
  })

  const mysql = require('mysql');
