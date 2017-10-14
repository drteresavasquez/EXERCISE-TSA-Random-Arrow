"use strict";
console.log("random.js, YO!");

let images = {
	0 : "images/left.png",
	1: "images/right.png",
};

let clickWindow = document.getElementById("randomArrow");

window.onclick = windowClick;

function windowClick(){
	console.log("You clicked the Window!");
	let num = Math.floor(Math.random() * 2)
	clickWindow.innerHTML = `<img src="${images[num]}"/>`
}
