import UnityEngine.UI;

var objetosPausa : GameObject;
var pausatxt : GameObject;
var reanudarbtn : GameObject;
var ajustesbtn : GameObject;
	
function iniciar (){

	Application.LoadLevel("nvl1");
}

function pausa (){

		objetosPausa.SetActive(true);
		pausatxt.GetComponent(Animation).Play();
		reanudarbtn.GetComponent(Animation).Play();
		ajustesbtn.GetComponent(Animation).Play();
}

function reanudar (){
	
		pausatxt.GetComponent(Animation).Play("pausatxtout");
		reanudarbtn.GetComponent(Animation).Play();
		ajustesbtn.GetComponent(Animation).Play();
		reanudar2();
}

function reanudar2(){
			yield WaitForSeconds(1.7);
			objetosPausa.SetActive(false);
}