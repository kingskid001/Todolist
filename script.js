var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.setAttribute("class","bold red");
	let button=document.createElement("button");
	button.textContent ="X";
	button.setAttribute("id", "del");
	li.appendChild(button);
	input.value = "";
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItems(event) {
	if (event.target.nodeName=="LI" && event.target){
  	event.target.classList.toggle("done");
  	
}
}

function removeItem(listItem){
if(listItem.target.id==="del"){
	listItem.target.parentElement.remove(listItem);
}
}

function trackUlClick(element) {
	toggleListItems(element);
	removeItem(element);
}




ul.addEventListener("click", trackUlClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


const date = new Date();
date.setHours(22);
document.getElementById("demo").textContent = date;