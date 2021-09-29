let judul = document.getElementById("judul");
judul.innerHTML = "<em>ujang brudin</em>";

console.log(judul);

let sectionA = document.querySelector("section#a");
sectionA.innerHTML = "halo dunia";

let judulA = document.getElementsByTagName("h1")[0];
judulA.setAttribute("name", "ujang");

//video 6
//create new element

let pBaru = document.createElement("p");
let textpBaru = document.createTextNode("paragraph baru");

// save text to paragraph
pBaru.appendChild(textpBaru);

// save pBaru to section A
sectionA.appendChild(pBaru);

// insert before item 2
let liBaru = document.createElement("li");
let textliBaru = document.createTextNode("item baru");

liBaru.appendChild(textliBaru);

// get parent ul
let ul = document.querySelector("section#b ul");
let li = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li);
