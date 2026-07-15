const http = require('http')
const fs = require('fs')
const { error } = require('console')
const serveur = http.createServer((req,rep)=>{
    rep.setHeader('content-type',"html")
    let ficher = ''
    if (req.url==='/accueille') {
        ficher='./fhtml/accueille.html'
    }else if (req.url === '/apropos') {
        ficher = "./fhtml/apropos.html"
    }else {
        ficher='./fhtml/error.html'
    }
    fs.readFile(ficher,(error,content)=>{
         if (error) {
            console.log(error);
        }else{
            rep.end(content)
        }
    })
})

serveur.listen(2001,"localhost",()=>{
    console.log('serveur lancer');
    console.log('fait un rechercher sur le port 2001');
    
    
})