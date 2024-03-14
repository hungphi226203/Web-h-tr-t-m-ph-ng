const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const post = 3000

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))