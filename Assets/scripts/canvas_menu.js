import UnityEngine.UI;

var objetosPausa : GameObject;
var pausatxt : GameObject;
var reanudarbtn : GameObject;
var ajustesbtn : GameObject;
var ajusteGroup : GameObject;
var ajusteBackground : GameObject;
var btnConfigMusica : GameObject;
var btnConfigSonido : GameObject;

function iniciar (){

	Application.LoadLevel("nvl1");
}

function menu(){
Application.LoadLevel("menu");
}

function pausa (){
	if(objetosPausa.active == false){
		Cube.mover = false;
		objetosPausa.SetActive(true);
		pausatxt.GetComponent(Animation).Play();
		reanudarbtn.GetComponent(Animation).Play();
		ajustesbtn.GetComponent(Animation).Play();
	}else{
		reanudar();
	}
}

function reanudar (){
		
		pausatxt.GetComponent(Animation).Play("pausatxtout");
		reanudarbtn.GetComponent(Animation).Play("reanudarbtnout");
		ajustesbtn.GetComponent(Animation).Play("ajusteout");
		reanudar2();
}

function reanudar2(){
			yield WaitForSeconds(1);
			Cube.mover = true;
			objetosPausa.SetActive(false);
}

function ajustes(opcion : int){ //0 es entrada, 1 es salida.
	if(opcion == 0){
		ajusteGroup.SetActive(true);
		ajusteBackground.GetComponent(Animation).Play();
	}else{
		ajusteGroup.GetComponent(Animation).Play();
		ajuste2();
		
	}
}
function ajuste2(){
	yield WaitForSeconds(1);
	ajusteGroup.SetActive(false);
}

function configmusica(){
	if(btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text == "Musica: ON"){
		PlayerPrefs.SetInt("music", 0);
		btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text = "Musica: OFF";
	}else{
		PlayerPrefs.SetInt("music", 1);
		btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text = "Musica: ON";
	}
}
function configsonido(){
	if(btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text == "Sonidos: ON"){
		PlayerPrefs.SetInt("sound", 0);
		btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text = "Sonidos: OFF";
	}else{
		PlayerPrefs.SetInt("sound", 1);
		btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text = "Sonidos: ON";
	}
}