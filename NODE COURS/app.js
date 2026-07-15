const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.static('galeries'))
app.use(morgan('tiny'))

app.get('/accueille',(req,rep)=>{
    rep.sendFile('/fhtml/accueille.html',({root:__dirname}))    
})
app.use("/",(req,rep)=>{
    rep.redirect('./accueille')
})

app.listen(3001,()=>{
    console.log('serveur lancer')
        
    
})