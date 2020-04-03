const recherche=document.querySelector(".recherche")
const input=document.querySelector(".input")
const liste=document.querySelector(".liste")


recherche.addEventListener("submit",function(event){
    var motCle=input.value
    event.preventDefault()
   fetch(`https://newsapi.org/v2/top-headlines?q=${motCle}&apiKey=d8bb7e6e132c4bacbc3758246de2c819`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       
        
        
    })

})

    





