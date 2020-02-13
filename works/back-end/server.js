//importando express
const express = require('express')
    //importando nunjucks
const nunjucks = require('nunjucks')

const videos = require('./data')

//configurando servidor
const server = express()

//configuração para utilização de arquivos estaticos
server.use(express.static('public'))

//configurando engine nunjucks
server.set('view engine', 'njk')

//configurando caminho para engine
nunjucks.configure('views', {
    express: server,
    autoescape: false // corrige erro do nunjucks ao passar código HTML direto dentro de objetos
})

//configurando rota index
server.get('/', function(req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/26663338?s=460&v=4",
        name: "Gabriel Caiana",
        role: "Web Developer",
        description: 'Apaixonado por programação e Design, conheca meu site: <a target="_blank" href="//gabrielcaiana.com">gabrielcaiana.com</a>',
        links: [
            { name: "Github", url: "//github.com/gabrielcaiana" },
            { name: "Twitter", url: "//twitter.com/guedescgabriel" },
            { name: "Linkedin", url: "///linkedin.com/in/gabrielcaiana" },
        ]
    }
    return res.render('about', { about })
})

//configurando rota portfolio
server.get('/portfolio', function(req, res) {
    return res.render('portfolio', { items: videos })
})

//iniciando servidor na porta 5000
server.listen(8000, function() {
    console.log("Server is Running")
})