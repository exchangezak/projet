//recuperer le dom
//recuperer l'input ville pour recuperer la valeur rentrer par user
let ville = document.querySelector("#ville");
//recuperer le boutton envoyer pr empecher l'action par defaut et recuperer quand on click on affiche le resultat
let button = document.querySelector("#check");
//recupere la div ou on va afficher le resultat
let affichage = document.querySelector("#affichage");
button.addEventListener('click', function (e) {
    e.preventDefault();
    let value = ville.value;

    ville.value=""
    affichage.innerHTML=""
    // console.log(value);

    let url = `https://geo.api.gouv.fr/communes?nom=${value}&fields=departement&boost=population&limit=5`
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if(data.length>0){
            
            for (let i = 0; i < data.length; i++) {
               
                // console.log(data)
                let name=data[i].nom
                let code=data[i].code
                let nom=data[i].departement.nom
                let key=data[i].departement.code
                affichage.innerHTML+=`<h1>NOM DE LA VILLE est ${name}</h1>
                <h2>code de la ville ${code}</h2>
                <h3>NAME IS ${nom}</h3>
                <h4>KEY IS ${key}`
               }
            }
            else{
                alert ("desolé cette ville n'existe pas")
               
            }
            
        })
})
