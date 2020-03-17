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
    autoescape: false, // corrige erro do nunjucks ao passar código HTML direto dentro de objetos
    noCache: true // limpa o cache do navegador
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
    return res.render('portfolio', { items: videos }) // eu também posso passar a palavra "{videos direto}", pois é o mesmo nome da variavel
})

//configurando rota Videos
server.get('/video', function(req, res) {
    const id = req.query.id

    //configurando método para encontrar videos e armazenar na variavel - 
    const video = videos.find(function(video) {
        //se o id do video na url for igual do encontrado retorna true
        //opção para um código menor "return video.id == id" automaticamente já é um código boolean
        if (video.id == id) {
            return true
        }
    })

    //se o video não for encontrado, será retornada a mensagem abaixo 
    if (!video) {
        return res.send('video not found!')
    }

    //se encontrado, ele irá renderizar a pagina abaixo recebendo a variavel video com o video encontrado
    return res.render('video', { item: video })
})

//iniciando servidor na porta 5000
server.listen(8000, function() {
    console.log("Server is Running")
})