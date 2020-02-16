const express = require('express')
const nunjucks = require("nunjucks")

const server = express()

const courses = require('./courses')
const user = require('./user')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res) {
    return res.render('courses', { courses })
})

server.get('/about', function(req, res) {
    return res.render('about', { user })
})

server.get('*', function(req, res) {
    res.render('not-found')
})

// server.use(function(req, res) {
//     res.status(404).render("not-found");
// });

server.listen(9000, function() {
    console.log('Hello World')
})