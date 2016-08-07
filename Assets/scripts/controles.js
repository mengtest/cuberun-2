#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var jugador:GameObject;
static var enableRight = true;
static var enableLeft = true;
private var velocidad = 0.14;

function Start () {

}

function Update () {
	var hit:RaycastHit;
	var ray:Ray =Camera.main.ScreenPointToRay (Input.mousePosition);

	if(Input.touchCount == 1){
	if(Physics.Raycast(ray, hit, 20)){
		if(hit.collider.transform.name == "control_derecho"){
		if(enableRight == true){
		jugador.transform.Translate(Vector3(0, 0, -velocidad));
		}}
		
		if(hit.collider.transform.name == "control_izquierdo"){
		if(enableLeft == true){
		jugador.transform.Translate(Vector3(0, 0, velocidad));
		}}
	
	}	
	}
	//Controladores alternativos para el testeo en el ordenador.
	if(Input.GetKey(KeyCode.RightArrow)){
	if(enableRight == true){
	jugador.transform.Translate(Vector3(0, 0, -velocidad));	
	}}
	if(Input.GetKey(KeyCode.LeftArrow)){
	if(enableLeft == true){
	jugador.transform.Translate(Vector3(0, 0, velocidad));	
	}}

}