// c'est dans index.js qu'on va creer notre serveur node
// on importe le framework express
const express = require('express');
//on importe mysql
const mysql      = require('mysql');
//on intialise la connection a la db
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:"user_db",
});
//on établit la connection a la db
connection.connect((error)=>{
    if(error){
        return console.log(error.message);
    }
    console.log("connection ok a la bdd")
});
// on va creer  une instance de serveur
const app = express();
//on va définir sur quel port le serveur va écouter les requettes http
const port="5000";
//on va creer une premiere route en get sur l'url
app.get("/",(request,response)=>{
    response.status(200);
    response.send("<h1>Home Page</h1>");
})
//on va creer une route qui va nous permettre de recuperer les users de notre database et de les afficher en console
app.get("/users",(request,response)=>{
    //ici on va ecrire le code qui va nous permettre de faire la rquqte a la bdd
    const sql="SELECT * FROM user"
    //ensuite je vais executer ma requte
    connection.query(sql,(error,result)=>{
        if(error) return console.error(error)
        console.log(result)

    })
})
// on va crée une route qui nous permet de recuperer un user par son id
// l'id sera recuperer a partir de l'url
// je dois recuperer dans l'url le parametre id de maniere dynamique
// http://localhost:5000/user?id=1
app.get("/users/:id", (request, response) => {
    //je cree ma requete sql
    const sql = "SELECT * FROM user WHERE id = ?";
    const id = request.params.id;
//je vais exécuter  ma requete
connection.query(sql,[id],(error,result)=>{
    if(error) return console.error(error.message)
    console.clear()
    console.log(result)
    response.status(200)
    response.send(`affichage de l'utilisateur avec l'id ${id}`);
}) 
})
//ici on cree la route qui va nous permettre d'effacer dans la bdd un user en fonction de son id
app.delete("/users/:id",(request,response)=>{
    const id=request.params.id
    const sql="DELETE FROM user WHERE id=?"
    connection.query(sql,[id],(error,result)=>{
        if(error){
            response.status(500)
            console.log(result)
            response.send("Erreur serveur");
        }
        response.status(200);
        response.send(`utilisateur ${id} `)
    })
})
// on ve dire au serveur d'écouter les requetes  entrantes
app.listen(port,()=>{
    console.log(`serveur démarré sur le port ${port}`);
})

