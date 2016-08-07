#pragma strict

var objetosPausa : GameObject;
var pausatxt : GameObject;
var reanudarbtn : GameObject;
var ajustesbtn : GameObject;
	
function iniciar (){

	Application.LoadLevel("nvl1");
}

function pausa(){
	print("HEEEELOOOO XD");
	//if(objetosPausa.active == false){
		objetosPausa.SetActive(true);
		pausatxt.GetComponent(Animation).Play();
		reanudarbtn.GetComponent(Animation).Play();
		ajustesbtn.GetComponent(Animation).Play();
	//}
}