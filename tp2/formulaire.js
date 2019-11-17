function validateForm () {


if (document.getElementById("nom").value.length >=5 &&  document.getElementById("prenom").value.length >=5 && document.getElementById("email").value.length >=5 && document.getElementById("adresse").value.length >=5 && document.getElementById("date").value.length >=5) {
  
document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;

} else {
	if(document.getElementById("nom").value.length < 5)
		{document.getElementById("erreur").innerHTML = "La saisie du nom est obligatoire";}

if (document.getElementById("prenom").value.length < 5) 
	{document.getElementById("erreur").innerHTML = "La saisie du prenom est obligatoire";}

if (document.getElementById("date").value.length < 5)
	{document.getElementById("erreur").innerHTML = "La saisie du datedenaissance est obligatoire";}

if (document.getElementById("email").value.length < 5) 
	{document.getElementById("erreur").innerHTML = "La saisie du mail est obligatoire";}

if (document.getElementById("adresse").value.length < 5) 
	{document.getElementById("erreur").innerHTML = "La saisie du adresse est obligatoire";}


} 
}