//importando express
const express = require('express')
    //importando nunjucks
const nunjucks = require('nunjucks')

const videos = require('./data')
console.log(videos)

//configurando servidor
const server = express()

//configuração para utilização de arquivos estaticos
server.use(express.static('public'))

//configurando engine nunjucks
server.set('view engine', 'njk')

//configurando caminho para engine
nunjucks.configure('views', {
    express: server
})

//configurando rota index
server.get('/', function(req, res) {
    return res.render('about')
})

//configurando rota portfolio
server.get('/portfolio', function(req, res) {
    return res.render('portfolio', { items: videos })
})

//iniciando servidor na porta 5000
server.listen(8000, function() {
    console.log("Server is Running")
})