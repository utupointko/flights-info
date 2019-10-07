var button = document.getElementById("submit");

button.addEventListener("click", func) 
function func() {
	let currency = document.getElementById("currency").value;
	let origin = document.getElementById("origin").value;
	let destination = document.getElementById("destination").value;
	let date = document.getElementById("date").value;

const http = new XMLHttpRequest();
const url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/HU/" + currency + "/en-US/" + origin + "-sky/" + destination + "-sky/" + date;
http.open("GET", url);
http.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
http.setRequestHeader("x-rapidapi-key", "7ade5c55bemshb5bf35483400490p1aa2a5jsn46ca748f4b8f");
http.send();
console.log(url)

http.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let res = http.responseText;
		var myJSON = JSON.parse(res);
		var json = JSON.stringify(myJSON, null, 2);
	}

	console.log(myJSON.Quotes)
	console.log(json);
	var info = document.getElementById("json");
	info.innerHTML = json;
});

}