//your JS code here. If required.
let button = document.getElementsByTagName("button")[0];
let p = document.getElementsByTagName("p")[0];
button.addEventListener("click",change);
function change(event){
	let newHeading = document.createElement("h1");
	newHeading.innerText = p.innerText;
	p.parentNode.replaceChild(newHeading, p);
}