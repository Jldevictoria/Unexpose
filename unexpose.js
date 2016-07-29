// Name:	unexpose.js
// Author:	Joseph DeVictoria.
// Date:	11/23/2015.
// Purpose:	Pornography filtering based on text matching and page layout.

// Global Functions.
function occurances(big_string, little_string){
	var position = 0;
	var count = 0;
	while (true){
		position = big_string.indexOf(little_string, position);
		if (position >= 0){
			++count;
			position += little_string.length;
			console.log(little_string);
		} else break;
	}
	return count;
}

// Risk Word Lists Declarations.
var risk_words_l = ["and", "to", "a", "for"];
var risk_words_m = ["new", "some", "many"];
var risk_words_h = ["Googling"];

// Main Script Flow.
var page_text = $('body').text();
var low_risk_matches = 0;
var medium_risk_matches = 0;
var high_risk_matches = 0;
for (var i = 0; i < risk_words_m.length; i++){
	console.log(risk_words_m[i]);
	low_risk_matches = low_risk_matches + occurances(page_text, risk_words_l[i]);
	medium_risk_matches = medium_risk_matches + occurances(page_text, risk_words_m[i]);
	high_risk_matches = high_risk_matches + occurances(page_text, risk_words_h[i]);
}
var total_risk_matches = low_risk_matches + medium_risk_matches + high_risk_matches;
console.log("Low Risk Matches: " + low_risk_matches);
console.log("Medium Risk Matches: " + medium_risk_matches);
console.log("High Risk Matches: " + high_risk_matches);
console.log("Total Risk Matches: " + total_risk_matches);