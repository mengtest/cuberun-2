#pragma strict

static var puntos : int = 0;
static var sumar = true;
static var galletas = 0;
private var record : int;
var contadorPuntos : GameObject;
var contadorRecord : GameObject;
var contadorGalletas : GameObject;
private var velocidadpuntos = 0.9;
private var i : int = 5;

function Start(){
	galletas = 0;
	record = PlayerPrefs.GetInt("record");
	esperarpuntos();
	recordfunc();
	puntos = 0;
	if(PlayerPrefs.GetInt("galletas_habilitadas") == 0){
	i = 5;
	}else{
	i = 10;
	}
}

function Update () {
	if(Cube.mover == true){
		
	}
}

function sumargalleta(){
	galletas = galletas + 1;
	contadorGalletas.GetComponent(Text).text =  "Galletas " + galletas;
}

function sumarpuntos(){
	if(sumar == true){
		puntos ++;
	}
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
	if(puntos == i){
		if(PlayerPrefs.GetInt("galletas_habilitadas") == 0){
			i = i + 5;
		}else{
			i = i + 10;
		}
		galletas = galletas + 1;
		contadorGalletas.GetComponent(Text).text =  "Galletas " + galletas;
	}
	
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