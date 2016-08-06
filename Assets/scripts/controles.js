#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var jugador:GameObject;

private var velocidad = 0.14;

function Start () {

}

function Update () {
	var hit:RaycastHit;
	var ray:Ray =Camera.main.ScreenPointToRay (Input.mousePosition);

	if(Input.touchCount == 1){
	if(Physics.Raycast(ray, hit, 20)){
		if(hit.collider.transform.name == "control_derecho"){
		jugador.transform.Translate(Vector3(0, 0, -velocidad));		
		}
		
		if(hit.collider.transform.name == "control_izquierdo"){
		jugador.transform.Translate(Vector3(0, 0, velocidad));
		}
	
	}	
	}

}