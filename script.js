var score = 0;
var compteur = 1;

function prix(){
	return 50*Math.pow(2,compteur-1);
}

function incrementer() {
	if (score >= prix()) {score -= prix(); compteur ++}
	else {alert("Il te faut au moins " + prix() + " points t\352te de noeud !")}
	document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + compteur + "Co\373t du prochain achat " + prix();
	document.getElementById("affichage").innerHTML = score;
};

function point() {
	document.getElementById("affichage").innerHTML = score += compteur; 
};

