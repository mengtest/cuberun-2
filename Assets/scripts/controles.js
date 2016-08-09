#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var jugador:GameObject;
static var enableRight = true;
static var enableLeft = true;
private var velocidad = 0.085;

private var i = 0.0; //lerp de las rotaciones

function Start () {
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		velocidad = 0.085;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		velocidad = 0.092;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		velocidad = 0.2;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		velocidad = 0.3;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 5){
		velocidad = 0.35;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 6){
		velocidad = 0.55;
	}

}

function Update () {
	giro(0);
	var hit:RaycastHit;
	var ray:Ray =Camera.main.ScreenPointToRay (Input.mousePosition);

	if(Input.touchCount == 1){
	if(Physics.Raycast(ray, hit, 20)){
		if(hit.collider.transform.name == "control_derecho"){
		if(enableRight == true){
		jugador.transform.Translate(Vector3(0, 0, -velocidad), Space.World);
		giro(1);	
		}else{
		giro(0);
		}}
		
		if(hit.collider.transform.name == "control_izquierdo"){
		if(enableLeft == true){
		jugador.transform.Translate(Vector3(0, 0, velocidad), Space.World);
		giro(2);	
		}else{
		giro(0);
		}}
	
	}	
	}
	//Controladores alternativos para el testeo en el ordenador.
	if(Input.GetKey(KeyCode.RightArrow)){
	if(enableRight == true){
	jugador.transform.Translate(Vector3(0, 0, -velocidad), Space.World);
	giro(1);	
	}else{
	giro(0);
	}}
	if(Input.GetKey(KeyCode.LeftArrow)){
	if(enableLeft == true){
	jugador.transform.Translate(Vector3(0, 0, velocidad), Space.World);
	giro(2);	
	}else{
	giro(0);
	}}

}

function giro(sentido : int){ //1 es derecha, 2 es izquierda.
	if(sentido == 1){
		i = Mathf.Lerp(i, 20, 6 * Time.deltaTime);
		jugador.transform.eulerAngles = Vector3(-i, i, 0);
		
	}else if(sentido == 2){
		jugador.transform.eulerAngles = Vector3(-i, i, 0);
		i = Mathf.Lerp(i, -20, 6 * Time.deltaTime);
		
	}else{
		i = Mathf.Lerp(i, 0, 6 * Time.deltaTime);
		jugador.transform.eulerAngles = Vector3(-i, i, 0);
	}
	
	
	
}
