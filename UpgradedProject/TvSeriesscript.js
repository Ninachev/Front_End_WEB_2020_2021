"use strict";
var pageCount = 1;
var movieContainer  = document.getElementById("movies")
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', 'https://raw.githubusercontent.com/Ninachev/Front_End_WEB_2020_2021/master/Json/TVseries-' + pageCount + '.json');
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();
  pageCount++;
  if(pageCount > 3){
      btn.classList.add("hide-me");
    }
});

function renderHTML(data){
  var HTMLstring = "";
  for (var i = 0; i < data.length; i++)
    {
      HTMLstring += "<p>" + data[i].title + " - a/an " + data[i].genre + " animation " + "made in " + data[i].year + "</p>";
    }
  movieContainer.insertAdjacentHTML('beforeend', HTMLstring);
};