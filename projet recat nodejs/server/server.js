const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const { log } = require('console')

const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(cors())
app.use(express.json())


const port = 5000

const db = mysql.createConnection({
    host :"localhost",
    user:'root',
    password:'',
    database:'students'
})
app.post('/add_user',(req,res)=>{
        sql="INSERT INTO student_details (`nom`,`email`,`age`,`gender`) VALUES (?)";
        const values = [
            req.body.nom,
            req.body.email,
            req.body.age,
            req.body.gender
        ]
        db.query(sql,(err,result,)=>{
            if (err) return res.json({message:'something unexpected has occred' + err}) 
            return res.json({succes:'student added successful'})
            
        })
})
app.listen(port,()=>{
    console.log('serveur demarrer');
    
})