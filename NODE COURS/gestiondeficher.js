const http = require('http')
const fs = require('fs')
const { error } = require('console')

//creation de serveur localhost
// const serveur = http.createServer((req,rep)=>{
//     rep.setHeader('content-type','text/html')
//     rep.write('<head><meta charset="utf8"></head>')
//     if (req.url == '/accuielle') {
//         rep.write("<h1>vous etre bien sur la page d'ACCUEILLE</h1>")
//     }else if (req.url =='/apropos') {
//         rep.write("<h1>vous etre bien sur la page Apropos</h1>")
//     }else if (req.url =='/contact') {
//         rep.write("<h1>vous etre bien sur la page CONTACT</h1>")
//     }else{
//         rep.write('<h1>page introuvable</h1>')
//     }
//     rep.end()
    
// })
// serveur.listen(3002,'localhost',()=>{
//     console.log("c'est en cours d'excecution");
    
// })
// //creation de ficher 
// if (fs.existsSync('./azizdevfile')) {
//     fs.rmdir('./azizdevfile',(error)=>{
//         if (error) {
//             console.log(error);
//         }else{
//             console.log('ficher supprimer cas il existait');
//         }
//     })
// }else{
//     fs.mkdir('./azizdevfile',(error)=>{
//         if (error) {
//             console.log(error);
//         }else{
//             console.log('ficher creer avec succes !!');
            
//         }
//     })
// }

// fs.writeFile('./azizdevfile/aziz.txt',"je vient de cree mon ficher en txt ok",()=>{
//     console.log('ficher cree avec succes');
    
// })

// fs.readFile('./azizdevfile/aziz.txt',(error,donnee)=>{
//     if (error) {
//         console.log(error);
        
//     }else{
//         console.log(donnee.toString());
        
//     }
// })

if (fs.existsSync('./azizdevfile/aziz.txt')) {
    fs.unlink('./azizdevfile/aziz.txt',(error)=>{
        if (error) {
            console.log(error);
        }else{
            console.log('ficher bien supprimer');
        }
    })
}else{
    fs.writeFile('./azizdevfile/aziz.txt','ah je vient de naitre',()=>{
       
            console.log('ficher cree');
        
    })
    fs.readFile('./azizdevfile/aziz.txt',(error,donnee)=>{
        if (error) {
            console.log(error);
            
        }else{
            console.log(donnee.toString());
            
        }
    })
}