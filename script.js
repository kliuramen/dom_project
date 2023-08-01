let backgroundColor = document.querySelector("body");
backgroundColor.style.backgroundColor = "blue";

let pokemonImgs = document.querySelectorAll("img");
for(let i = 0; i < pokemonImgs.length; i++)
{
    pokemonImgs[i].style.border = "5px dotted yellow";
}

let heading2 = document.querySelector("h2");
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 Starters!";
heading2.style["text-align"] = "center";

let pokemonNames = document.getElementsByClassName("pokemon_names");
for(let i = 0; i < pokemonNames.length; i++)
{
    pokemonNames[i].style.color = "yellow";
}

let title = document.querySelector("h1");
title.style.fontSize = "25px";
title.style.textDecoration = "underline";

let footer = document.querySelector("footer");
footer.innerHTML = "ALL STAR CODE - DOM PROJECT";
footer.style.textDecoration= "underline overline";
footer.style.fontSize = "35px";
footer.style.fontStyle = "italic";
