document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here

});

 
document.getElementById("title").innerHTML = "Titanic"

document.getElementById("director").innerHTML = "James Cameron"

document.getElementById("genre").innerHTML = "Drama"

document.getElementById("filmRating").innerHTML = "PG-13"

document.getElementById("poster").src = "https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg"

document.getElementById("audienceScore").innerHTML = "7.8" 

document.getElementById("description").innerHTML = "A blooming romance is tested when an unexpected event occurs. Jack and Rose are forced to work together and escape from Billy Zane." 

const castTitanic =
  [
  {
  role: "Jack",
  actor: "Leonardo DiCaprio",
  },
  {
  role: "Rose",
  actor: "Kate Winslett",
  },
  {
  role: "Cal",
  actor: "Billy Zane",
  },
  {
  role: "The Titanic",
  actor: "The Titanic",
  }
  ]
  
  document.getElementById("cast").innerHTML = castTitanic


