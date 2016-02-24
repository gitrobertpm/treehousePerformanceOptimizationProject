// PROGRAMMING FOR MODAL
"use strict";

var thumNale = document.getElementsByClassName("thumNale");
var photoBy = document.getElementsByClassName("photoBy");

var photoModo = document.getElementById("photo1-1");
var modalImg = document.getElementById("modalImg");
var modalAvatar = document.getElementById("modalAvatar");

for (var i = 0; i < thumNale.length; i++) { 
	thumNale[i].marker = i;
	thumNale[i].addEventListener("click", function() {
		modalImg.setAttribute("src", thumNale[this.marker].querySelector("img").getAttribute("src"));
		modalAvatar.setAttribute("src", photoBy[this.marker].getAttribute("src"));
	});
}