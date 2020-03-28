const baseUrl = "https://swapi.co/api/"; // ceci est une chaîne de caractères ni plus ni moins

// on stocke les références aux éléments du DOM qui nous intéressent dans des variables
const randBtn = document.querySelector("#randomButton");
const resultsDiv = document.querySelector("#results");
const premier=document.querySelector('#race');
const deuxieme=document.querySelector('#langage');
const troisieme=document.querySelector('#classement');
const quatrieme=document.querySelector('#duree');

randBtn.addEventListener("click", function() {
  // version JS classique
  //   fetch(baseUrl + "species/")
  fetch(`${baseUrl}species/`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // propriétés : name, language, classification, average_lifespan, eye_colors
      console.log(data);
      //   format type : data.results[3].name
      // étape1 on compte la longueur du tableau des résultats
      const resultsLength = data.results.length;

      // étape 2 : on génère un index aléatoire
      const randomIndex = Math.floor(Math.random() * resultsLength);

      const name = data.results[randomIndex].name;
      const language = data.results[randomIndex].language;
      const classification = data.results[randomIndex].classification;
      const lifespan = data.results[randomIndex].average_lifespan;
      

    premier.innerHTML=(`Nom de la race : ${name}`)
    deuxieme.innerHTML= (`Langage de la race : ${language}`)
    troisieme.innerHTML=(`Classification de la race : ${classification}`)
    quatrieme.innerHTML=(`Durée de vie moyenne de la race : ${lifespan}`)
     
    });
});
