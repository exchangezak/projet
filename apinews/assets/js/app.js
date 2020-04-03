const recherche=document.querySelector(".recherche")
const input=document.querySelector(".input")
const liste=document.querySelector(".liste")


recherche.addEventListener("submit",function(event){
    var motCle=input.value
    if(motCle===""){
        alert("vous devez remplir les champs")
       
    }
    event.preventDefault()
   fetch(`https://newsapi.org/v2/top-headlines?q=${motCle}&apiKey=d8bb7e6e132c4bacbc3758246de2c819`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       let length=data.articles.length
        
        for(i=0;i<length;i++){
            let h2=document.createElement("h2")
            let p=document.createElement("p")
            h2.textContent="titre:"+data.articles[i].title
            p.textContent="description:"+data.articles[i].description
            liste.appendChild(h2)
            liste.appendChild(p)

        }
    })

})

    





