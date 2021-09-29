// dom selection
// getelementbyid() -> return element

let judul = document.getElementById("judul");
console.log(judul);

// simple manipulation
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "ujang brudin";

// document.getElementsByTagName() -> return html collection
let p = document.getElementsByTagName("p");

for (let index = 0; index < p.length; index++) {
  p[index].style.backgroundColor = "gray";
}

// document.getElementsByClassName() -> return html collection
let p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "dirubah dari js";
