import UnityEngine.UI;


var informacion : GameObject;
var objetosPausa : GameObject;
var pausatxt : GameObject;
var reanudarbtn : GameObject;
var ajustesbtn : GameObject;
var ajusteGroup : GameObject;
var ajusteBackground : GameObject;
var btnConfigMusica : GameObject;
var btnConfigSonido : GameObject;
var FIN_canvas : GameObject;

function iniciar (){

	Application.LoadLevel("nvl1");
	Cube.velocidad = 0.1;
	informacion.SetActive(true);
	FIN_canvas.SetActive(false);
	informacion.GetComponent(Animation).Play("informaciones_in");

}
function Start(){
	if(PlayerPrefs.GetInt("tutorial") == 0){
		Application.LoadLevel("tutorial");
	}
}

function menu(){
Cube.velocidad = 0.1;
Application.LoadLevel("menu");
}

function acabado(){
	if(FIN_canvas.active == false){
		var galletasTotales : int = PlayerPrefs.GetInt("dinero") + puntuaciones.galletas;
		
		informacion.GetComponent(Animation).Play("informaciones_out");
		FIN_canvas.SetActive(true);
		FIN_canvas.GetComponent(Animation).Play();
		FIN_canvas.gameObject.transform.FindChild("puntuacion").GetComponent(Text).text = "Puntuacion " + puntuaciones.puntos;
		if(puntuaciones.puntos >= PlayerPrefs.GetInt("record")){
			FIN_canvas.transform.FindChild("recordmsg").gameObject.active = true;
			PlayerPrefs.SetInt("record", puntuaciones.puntos);
		}else{
			FIN_canvas.transform.FindChild("recordmsg").gameObject.active = false;
		}
		FIN_canvas.gameObject.transform.FindChild("galletas").GetComponent(Text).text = "Galletas recogidas " + puntuaciones.galletas; 
		FIN_canvas.gameObject.transform.FindChild("galletas_totales").GetComponent(Text).text = "Totales: " + galletasTotales;
		PlayerPrefs.SetInt("dinero", galletasTotales);
		
		
		//gameObject.Find("Main Camera").GetComponents(unityStandardAssets.Effects.ImageEffects.DepthOfField).enabled = true;
	}
}

function pausa (){
	if(objetosPausa.active == false){
		Cube.mover = false;
		puntuaciones.sumar = false;
		informacion.GetComponent(Animation).Play("informaciones_out");
		objetosPausa.SetActive(true);
		pausatxt.GetComponent(Animation).Play();
		reanudarbtn.GetComponent(Animation).Play();
		ajustesbtn.GetComponent(Animation).Play();
	}else{
		reanudar();
	}
}

function reanudar (){
		informacion.GetComponent(Animation).Play("informaciones_in");
		pausatxt.GetComponent(Animation).Play("pausatxtout");
		reanudarbtn.GetComponent(Animation).Play("reanudarbtnout");
		ajustesbtn.GetComponent(Animation).Play("ajusteout");
		reanudar2();
}

function reanudar2(){
			yield WaitForSeconds(0.4);
			puntuaciones.sumar = true;
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

function reset(){
	PlayerPrefs.DeleteAll();
	Application.LoadLevel("menu");
}

function configmusica(){
	if(btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text == "Musica: ON"){
		PlayerPrefs.SetInt("music", 0);
		btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text = "Musica: OFF";
	}else{
		PlayerPrefs.SetInt("music", 1);
		btnConfigMusica.gameObject.transform.GetChild(0).GetComponent(Text).text = "Musica: ON";
	}
	GameObject.Find("Main Camera").GetComponent(camara).configload();
}
function configsonido(){
	if(btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text == "Sonidos: ON"){
		PlayerPrefs.SetInt("sound", 0);
		btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text = "Sonidos: OFF";
	}else{
		PlayerPrefs.SetInt("sound", 1);
		btnConfigSonido.gameObject.transform.GetChild(0).GetComponent(Text).text = "Sonidos: ON";
	}
	GameObject.Find("Main Camera").GetComponent(camara).configload();
}