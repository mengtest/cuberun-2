#pragma strict

var puntos : int = 0;
private var record : int;
var contadorPuntos : GameObject;
var contadorRecord : GameObject;
private var velocidadpuntos = 1.2;

function Start(){
	record = PlayerPrefs.GetInt("record");
	esperarpuntos();
	recordfunc();
}

function Update () {
	if(Cube.mover == true){
		
	}
}

function sumarpuntos(){
	puntos ++;
	esperarpuntos();
	
	if(puntos < 10){
		contadorPuntos.GetComponent(Text).text = "0"+ puntos + "";
	}else{
		contadorPuntos.GetComponent(Text).text = puntos + "";
	}
}
function esperarpuntos(){
	yield WaitForSeconds(velocidadpuntos);
	
	sumarpuntos();
	velocidadpuntos = velocidadpuntos * 0.994;
	
}

function recordfunc(){
	
	if(record == 0){
		contadorRecord.SetActive(false);
	}else{
		contadorRecord.GetComponent(Text).text = "record" + record;
	}
	
}

function fin(){
	if(puntos > record){
		PlayerPrefs.SetInt("record", puntos);
	}
	yield WaitForSeconds(3);
	Cube.mover = true;
	Application.LoadLevel("menu");
}