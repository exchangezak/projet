// DONE: create update method
// TODO: remove body-parser
// TODO: extract db connection to own file
// TODO: extract routes to own file
// TODO: use environment variables
// TODO: render frontend express.static
// TODO: move server files to api folder

// c'est dans le fichier index.js que je vais créer mon serveur node
// on importe le framework express
const express = require("express");

// on importe la méthode json dans le module body-parser de node
// cette méthode va permettre de transformer des données au format json en objet javascript
// https://www.npmjs.com/package/body-parser
// on peut utiliser le body-parser natif d'express
// const { json } = require("body-parser");

// on importe le package mysql
const mysql = require("mysql");

// on initialise la connection a la db
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_db",
});
// on établit la connection à la db
connection.connect((error) => {
    if (error) {
      return console.log(error.message);
    }
    console.log("Connection ok à la bdd");
  });
  module.exports=connection;