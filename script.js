//your JS code here. If required.
let button = document.getElementById("enterBtn");
let p = document.getElementById("status");
button.addEventListener("click",change);
function change(event){
	let newHeading = document.createElement("h1");
	newHeading.innerText = p.innerText;
	p.parentNode.replaceChild(newHeading, p);
}