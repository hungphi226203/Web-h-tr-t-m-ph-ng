const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');

const app = express();
const port = 3000;

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

//handlebars helpers
const hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
    json: function(context) {
      return JSON.stringify(context);
    },
    split: function(str, delimiter) {
      if (typeof str === 'string') {
        return str.split(delimiter);
      }
      return [];
    },
    isFirst: function(index) {
      return index === 0;
    },
    arrayLength: function(array) {
      return array.length;
    },
    addOne: function(index) {
      return index + 1;
    }
  }
});

//Template engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe trên cổng ${port}`);
});
