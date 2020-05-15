function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	var correct = 0;

	if(question1 == "montypython"){
		correct++;
	}
	if(question2 == "turtle"){
		correct++;
	}
	if(question3 == "textp"){
		correct++;
	}

var meddelanden = ["Du fick tyvärr inga rätt :(", "Du fick ett rätt!", "Du fick två rätt!", "Du fick tre rätt! Bra jobbat!"];


var range;

if(correct == 0){
	range=0;
}

if(correct == 1){
	range=1;
}

if(correct == 2){
	range=2;
}

if(correct == 3){
	range=3;
}
	
	document.getElementById("after_submit").style.visibility="visible";

	document.getElementById("meddelande").innerHTML=meddelanden[range];

	// document.getElementById("bilden").src=bilder[range];
}


