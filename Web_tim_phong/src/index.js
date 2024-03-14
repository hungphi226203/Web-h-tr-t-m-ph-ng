const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const post = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/',(req,res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log('Máy chủ đang lắng nghe trên cổng 3000');
  })