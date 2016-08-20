#pragma strict
import UnityEngine.UI;
import System.Collections.Generic;

var jugador:GameObject;
static var enableRight = true;
static var enableLeft = true;
private var velocidad = 4;
private var posicionY : int;
var Zcorrectora = 0.276;
private var entradas : Array = new Array[4];

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
	entradas[0] = 0;
	entradas[1] = 0;
	entradas[2] = 0;
	entradas[3] = 0;
}

function Update () {
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
				entradas[0] = 1;
			}else{
				giro(0);
				
			}
		}
		
		if(hit.collider.transform.name == "control_izquierdo"){
			if(enableLeft == true){
				jugador.transform.Translate(Vector3(0, 0, velocidad * Time.deltaTime), Space.World);
				giro(2);
				entradas[1] = 1;	
			}else{
				giro(0);
				entradas[1] = 0;
			}
		}
	
	}	
	}else{
		entradas[0] = 0;
		entradas[1] = 0;
	}
	
	//Controladores alternativos para el testeo en el ordenador.
	if(Input.GetKey(KeyCode.RightArrow)){
		if(enableRight == true){
			jugador.transform.Translate(Vector3(0, 0, -velocidad * Time.deltaTime), Space.World);
			giro(1);
			entradas[2] = 1;
		}else{
			giro(0);			
		}
	}else{
		entradas[2] = 0;
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		if(enableLeft == true){
			jugador.transform.Translate(Vector3(0, 0, velocidad * Time.deltaTime), Space.World);
			giro(2);
			entradas[3] = 1;	
		}else{
			giro(0);	
		}
	}else{
		entradas[3] = 0;
	}
	posicionY = Mathf.Round(jugador.transform.position.z);
	cuadricular();
}

function giro(sentido : int){ //1 es derecha, 2 es izquierda.
	if(sentido == 1){
		i = Mathf.Lerp(i, 20, 6 * Time.deltaTime);
		jugador.transform.eulerAngles = Vector3(-i, i, 0);		
	}else{
	if(sentido == 2){
		jugador.transform.eulerAngles = Vector3(-i, i, 0);
		i = Mathf.Lerp(i, -20, 6 * Time.deltaTime);
	}else{
		i = Mathf.Lerp(i, 0, 6 * Time.deltaTime);
		jugador.transform.eulerAngles = Vector3(-i, i, 0);
		
	}}
	
}

function cuadricular(){
	print(entradas[0] + "" +entradas[1] + entradas[2] + entradas[3]);
	if(entradas[0] == 0 && entradas[1] == 0 && entradas[2] == 0 && entradas[3] == 0){	
		print(posicionY);
		jugador.transform.position.z = Mathf.Lerp(jugador.transform.position.z, posicionY - Zcorrectora, 11*Time.deltaTime);
	}
	
	/*Debug.DrawRay(Vector3(0, 31, -10.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -9.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -8.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -7.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -6.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -5.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -4.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -3.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -2.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, -1.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 0.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 1.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 2.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 3.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 4.093), Vector3(100, 0, 0), Color.red, 4);
	Debug.DrawRay(Vector3(0, 31, 5.093), Vector3(100, 0, 0), Color.red, 4);*/
}