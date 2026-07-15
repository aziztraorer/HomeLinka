const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const app = express()

const optionbd =
{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'node_bd'
}

//expres les donner du formulaire
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views','IHM')

// connection bd
app.use(myconnection(mysql,optionbd,'pool'));


app.get("/",(req,res)=>{
    req.getConnection((erreur,connection)=>{
        if (erreur) {
            console.log(erreur);
        }else{
            connection.query('SELECT * FROM nodes',[],(erreur,resultat)=>{
                if (erreur) {
                    console.log(erreur);
                    
                }else{
                    res.render("index",{resultat})
                }
            })
        }
    })

    
})

app.post('/nodes',(req,rep)=>{
    let id = req.body.id  ==="" ? null:req.body.id
    let titre = req.body.titre
    let description = req.body.description
    let reqSql = id === null ? 'INSERT INTO nodes(id,titre,description) VALUES(?,?,?)':"UPDATE nodes SET titre=?,description=? WHERE id = ?"
    let donnees = id=== null ? [null ,titre,description]:[titre,description,id]
     req.getConnection((erreur,connection)=>{
        if (erreur) {
            console.log(erreur);
        }else{
            connection.query(reqSql,donnees,(erreur,resultat)=>{
                if (erreur) {
                    console.log(erreur);
                    
                }else{
                    rep.status(300).redirect('/')
                }
            })
        }
    })
})

app.delete("/nodes/:id",(req,rep)=>{
    let id =req.params.id;
    req.getConnection((erreur,connection)=>{
        if (erreur) {
            console.log(erreur);
        }else{
            connection.query('DELETE FROM nodes WHERE id=?',[id],(erreur,resultat)=>{
                if (erreur) {
                    console.log(erreur);
                    
                }else{
                    rep.status(200).json({routeRacine:'/'})
                }
            })
        }
    })
})
app.get("/apropos",(req,res)=>{
    res.render('apropos')
})

app.use((req,res)=>{
    res.render('pageintrouvable')
})

app.listen(3001,()=>{
    console.log('serveur en marche');
    
})