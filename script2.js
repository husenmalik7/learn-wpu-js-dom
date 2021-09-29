// // script;

// document.querySelector() -> return element

let p4 = document.querySelector("#b p");
p4.style.color = "green";

// non specific
// let li2 = document.querySelector("li:nth-child(2)");
// specific
let li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> return nodelist

let p = document.querySelectorAll("p");
p[2].innerHTML = "ujang brudin";

// shrink the scope
let sectionB = document.getElementById("b");
let p44 = sectionB.querySelector("p");
p44.style.backgroundColor = "orange";

//summary

/**
 * query selector is not for change structure HTML
 */
