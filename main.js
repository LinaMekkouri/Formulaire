var formulaire=document.getElementById('monFormulaire')
var nomSaisi=document.getElementById('nom')
var prenomSaisi=document.getElementById('prenom')

function verifierFormulaire(event){
if (nomSaisi!=''){
    console.log(nomSaisi)
}
else
{
    console.log("erreur")
} 
}
formulaire.addEventListener('submit', verifierFormulaire);