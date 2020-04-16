let btnGlossaire=document.querySelector("#glossaire")
let afficherGlo=document.querySelector("#dictionnaire")
btnGlossaire.addEventListener("click",function(){

fetch("php/glossary.php")
.then(function(res){
  return res.json();
})
.then(function(data){
    const length=data.length;
   
    let rand=Math.floor(Math.random()*length)
    let titre=data[rand].title
    let description=data[rand].description
    afficherGlo.innerHTML=`<h4><span class="tit">le titre est:</span>${titre} </h4>
    <p><span class="p">la description est:</span>${description}`
    
    
})
})
let btnPractices=document.querySelector("#pratiques")
let afficherPra=document.querySelector("#practice")
btnPractices.addEventListener("click",function(){
    fetch("php/practice.php")
    .then(function(res){
        return res.json()
    })
    .then(function(object){
const long=object.length;
let random=Math.floor(Math.random()*long)
let Titre=object[random].title
let objectives=object[random].objectives
let phase=object[random].phases


afficherPra.innerHTML=`<h4><span class="tit">le titre est:</span>${Titre}</h4>
<p><span class="p">les objectifs sont:</span> ${objectives}</p>
<p><span class="pi">les phases sont :</span> ${phase}`
    })
})