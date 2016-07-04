var score = 0;
var compteur = 1;
var compteurauto = 0;

function prix(){
	return 50*Math.pow(2,compteur-1);
}

function incrementer() {
	if (score >= prix()) {score -= prix(); compteur ++}
	else {alert("Il te faut au moins " + prix() + " points t\352te de noeud !")}
	document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + compteur + "<br>Co\373t du prochain achat : " + prix();
	document.getElementById("affichage").innerHTML = score;
};

function point() {
	document.getElementById("affichage").innerHTML = score += compteur; 
};

function prixauto(){
	return 500*Math.pow(2,compteurauto);
}

function clicker() {
	setInterval(function() {document.getElementById("button").click();}, 1000);
}

function autoclick() {
if (score>= prixauto()) {
	score -=prixauto(); compteurauto ++;
	if (score >= 200) {
	clicker();
	}
} else {alert("Clique encore, cette fois c'est la bonne")};
document.getElementById("autoclicker").innerHTML = "autoclicker x" + compteurauto + "<br>Co\373t du prochain achat : " + prixauto();
document.getElementById("affichage").innerHTML = score;	
};
