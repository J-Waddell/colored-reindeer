var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var listReindeer = "";

for (var i = 0; i < reindeer.length; i++) {
	var newReindeer = colors[i] + " " + reindeer[i];
	console.log(newReindeer);
	listReindeer += "<li>"+newReindeer+"</li>";

}
var hohohoElement = document.getElementById("coloredReindeer");
hohohoElement.innerHTML = listReindeer;