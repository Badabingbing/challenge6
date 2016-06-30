var score = 0;
var compteur = 1;

function incrementer() {
	document.getElementById("nbreclics").innerHTML="nombre de multiplicateurs : " + compteur ++;	
};

function prix() {
	score -= 50;
	document.getElementById("affichage").innerHTML = score;
}

function point() {
	document.getElementById("affichage").innerHTML = score += compteur; 
};





