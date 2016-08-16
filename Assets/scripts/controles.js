#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var jugador:GameObject;
static var enableRight = true;
static var enableLeft = true;
private var velocidad = 4;

private var i = 0.0; //lerp de las rotaciones

function Start () {
	
	
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		velocidad = 6;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		velocidad = 8.5;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		velocidad = 10;
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		velocidad = 12;
	}
	
}

function FixedUpdate () {
	//PARA LAS PRUEBAS--------------------------------------------------------------------------------
		if(Input.GetKey(KeyCode.PageUp)){
		PlayerPrefs.SetInt("nivel_giro", PlayerPrefs.GetInt("nivel_giro") + 1);
		Application.LoadLevel("nvl1");
		}
		if(Input.GetKey(KeyCode.PageDown)){
		PlayerPrefs.SetInt("nivel_giro", PlayerPrefs.GetInt("nivel_giro") - 1);
		Application.LoadLevel("nvl1");
		}
		
	if(Cube.mover == false){
	enableRight = false;
	enableLeft = false;
	}

	giro(0);
	var hit:RaycastHit;
	var ray:Ray =Camera.main.ScreenPointToRay (Input.mousePosition);

	if(Input.touchCount == 1){
	if(Physics.Raycast(ray, hit, 20)){
		if(hit.collider.transform.name == "control_derecho"){
		if(enableRight == true){
		jugador.transform.Translate(Vector3(0, 0, -velocidad * Time.deltaTime), Space.World);
		giro(1);	
		}else{
		giro(0);
		}}
		
		if(hit.collider.transform.name == "control_izquierdo"){
		if(enableLeft == true){
		jugador.transform.Translate(Vector3(0, 0, velocidad * Time.deltaTime), Space.World);
		giro(2);	
		}else{
		giro(0);
		}}
	
	}	
	}
	//Controladores alternativos para el testeo en el ordenador.
	if(Input.GetKey(KeyCode.RightArrow)){
	if(enableRight == true){
	jugador.transform.Translate(Vector3(0, 0, -velocidad * Time.deltaTime), Space.World);
	giro(1);	
	}else{
	giro(0);
	}}
	if(Input.GetKey(KeyCode.LeftArrow)){
	if(enableLeft == true){
	jugador.transform.Translate(Vector3(0, 0, velocidad * Time.deltaTime), Space.World);
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
