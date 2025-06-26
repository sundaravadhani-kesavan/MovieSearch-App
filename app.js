let api="https://www.omdbapi.com/?apikey=8c799ef9&t="
// fetch(api).then((data)=>{
//      return data.json()
// }).then((data)=>{
//      console.log(data);
// })
let title=document.querySelector("#title")
let genre=document.querySelector("#genre")
let desc=document.querySelector("#desc")
let act=document.querySelector("#act")
let dir=document.querySelector("#dir")
let awards=document.querySelector("#awards")
let collection=document.querySelector("#collection")
let lang=document.querySelector("#lang")
let ratings=document.querySelector("#ratings")
let poster=document.querySelector("#poster")
let container=document.querySelector("#container")
container.classList.add("hidden")
let error=document.querySelector("#error")
let errormsg=document.querySelector("#errormsg")
let suggestion=document.querySelector("#suggestion")

error.classList.add("hidden")
function search(){
     let movieName=document.querySelector("#movSearch")
     let query=api+movieName.value     
     fetch(query).then((data)=>{
     return data.json()
}).then((data)=>{
     if(data.Error==="Movie not found!"){
          error.classList.remove("hidden")
          errormsg.innerText=`${movieName.value} this movie is not found?! Please Check Again!! `
     }
     else{
          error.classList.add("hidden")
          container.classList.remove("hidden")
          title.innerText=data.Title;
          genre.innerText=data.Genre;
          desc.innerText=data.Plot;
          act.innerText=data.Actors;
          dir.innerText=data.Director;
          collection.innerText=data.BoxOffice
          awards.innerText=data.Awards;
          lang.innerText=data.Language;
          ratings.innerText=data.imdbRating;
          // poster.src=data.Poster;
          poster.src = data.Poster !== "N/A" ? data.Poster : "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";
          poster.onerror = function () {
          this.onerror = null;
          this.src = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";
          };
          suggestion.className = "";
          let rating=parseFloat(data.imdbRating)
          if(rating>8){
               suggestion.innerText="Must Watch"
               suggestion.classList.add("above8")
          }
          else if(rating>=7){
               suggestion.innerText="Recommended"
               suggestion.classList.add("above7")
          }
          else if(rating>=6){
               suggestion.innerText="Average"
               suggestion.classList.add("above6")
          }
          else if(rating>=5){
               suggestion.innerText="Poor"
               suggestion.classList.add("above5")
          }
          else{
               suggestion.innerText="Time Waste"
               suggestion.classList.add("bad")

          }
          console.log(data);
     }
})
     // fetch(query).then((x)=>{x.json()}).then((x)=>{console.log(x)})
}
