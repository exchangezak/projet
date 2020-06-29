// DONE: create update method
// DONE: remove body-parser
// DONE: extract db connection to own file
// TODO: extract routes to own file
// TODO: use environment variables
// TODO: render frontend express.static
// TODO: move server files to api folder

// c'est dans le fichier index.js que je vais créer mon serveur node
// on importe le framework express
const express = require("express");

// ici je vais importer mon fichier routes
const usersRoutes = require("./users");

// const connection = require("./db");

// on importe la méthode json dans le module body-parser de node
// cette méthode va permettre de transformer des données au format json en objet javascript
// https://www.npmjs.com/package/body-parser
// on peut utiliser le body-parser natif d'express
// const { json } = require("body-parser");

// on va créer une instance du serveur
const app = express();

// on va définir sur quel port le serveur va écouter les requêtes http
const port = "5000";

// ici on définit les middlewares
// ici on va utiliser le middleware body-parser de manière globale pour toutes les routes
app.use(express.json());

// on crée un middleware qui va gérer toutes les requêtes sur les routes commençant par /users
app.use("/users", usersRoutes);

// on créer une première route en GET sur l'url /
// app.get("/", (request, response) => {
//   // on va renvoyer un status http pour la réponse
//   response.status(200);
//   response.send("<h1>Page d'accueil</h1>");
// });

// on va créer une route qui va nous permettre de récupérer les users de notre database et de les afficher en console
// app.get("/users", (request, response) => {
//   // c'est ici qu'on va écrire le code qui va nous permettre de faire la requête à la bdd
//   const sql = "SELECT * FROM user";

//   // ensuite je vais exécuter ma requête
//   connection.query(sql, (error, result) => {
//     if (error) return console.error(error);
//     console.log(result);
//     response.send(result);
//   });
// });

// on va créer une route qui nous permet de récupérer un user par son id
// l'id sera récupérée à partir de l'url
// je dois récupérer dans l'url le paramètre id de manière dynamique
// http://localhost:5000/users/1
// app.get("/users/:id", (request, response) => {
//   // je crée ma requête sql
//   const sql = "SELECT * FROM user WHERE id = ?";
//   const id = request.params.id;

//   //   je vais exécuter ma requête
//   connection.query(sql, [id], (error, result) => {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     // ici j'efface ma console pour que ce soit plus facile à lire
//     console.clear();
//     console.log(result);
//     response.status(200);
//     response.send(`Affichage de l'utilisateur avec l'id ${id}`);
//   });
// });

// je vous laisse créer la route qui va permettre d'effacer dans la bdd un user en fonction de son id
// attention à la méthode http utilisée !
// app.delete("/users/:id", (request, response) => {
//   const id = request.params.id;

//   const sql = "DELETE FROM user WHERE id = ?";

//   connection.query(sql, [id], (error, result) => {
//     if (error) {
//       response.status(500);
//       console.log(result);
//       response.send("Erreur serveur");
//     }
//     response.status(200);
//     response.send(`Utilisateur ${id} supprimé`);
//   });
// });

// on va créer une route permettant d'insérer un nouvel utilisateur dans la bdd
// ici on utilise la fonction json() qu'on a importée. Cette fonction est un middleware (une fonction qui sera exécutée systématiquement entre le moment ou la requête arrive au serveur et le moment où la réponse est envoyée)
// pour notre route, a chaque fois que le serveur recevra une requête en POST sur /users, il exécutera json() pour transformer le json reçu en js, ensuite la fonction callback sera exécutée
// app.post("/users", (request, response) => {
//   // création d'un user pour tester la route
//   // const user = {
//   //   name: "Zakaria",
//   //   email: "zak@gmail.com",
//   // };

//   // on récupère la valeur de la propriété body de la requête
//   // elle va contenir les données d'un formulaire de création d'un user
//   const user = request.body;

//   const sql = "INSERT INTO user SET ?";

//   connection.query(sql, [user], (err, rows) => {
//     if (err) {
//       response.status(500);
//       response.send("Erreur enregistrement utilisateur");
//     }
//     response.status(200);
//     response.send(`Utilisateur créé, ${rows.affectedRows} modifiés`);
//   });
// });

// // on va créer la route qui va nous permettre de faire un update dans la bdd
// app.put("/users/:id", (request, response) => {
//   const id = request.params.id;
//   const user = request.body;

//   const sql = "UPDATE user SET ? WHERE id = ?";

//   connection.query(sql, [user, id], (error, rows) => {
//     if (error) {
//       response.status(500);
//       response.send(`Imposssible de mettre à jour l'utilisateur ${id}`);
//     }
//     response.status(200);
//     response.send(`Utilisateur ${id} mis à jour`);
//   });
// });

// on ve dire au serveur d'écouter les requêtes entrantes
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
