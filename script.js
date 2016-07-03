var score = 0;
var compteur = 1;

function incrementer() {
	if (score >= 50) {score -= 50; compteur ++}
	else {alert("Il te faut au moins 50 points t\352te de noeud !")}
	document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + compteur;	
	document.getElementById("affichage").innerHTML = score;
};

function point() {
	document.getElementById("affichage").innerHTML = score += compteur; 
};





