#pragma strict

var rand = 0;
var camara : GameObject;
var variacionX = -36.9;
var i = 0.0;

private var color = 1;
private var restantecolor = 200;
var color1 : Color;
var color2 : Color;
var color3 : Color;
var color4 : Color;
var color5 : Color;
var color6 : Color;
var color7 : Color;
var color8 : Color;

function Update(){
	i = -camara.transform.position.z + camara.transform.position.y;
	this.transform.position = Vector2(camara.transform.position.x + variacionX + i, transform.position.y);
	
}

function OnTriggerEnter(col : Collider){
	if(col.tag == "pared"){
		colorear(col);
		rand = Random.Range(1, 11);
		col.GetComponent(Animation).Play();
		//col.GetComponent(Renderer).material.color = Color(Random.Range(0, 256), Random.Range(0, 256), Random.Range(0, 256));
		sonido(col);
		if(rand < 10){
			miniup(col);
		}
		//col.GetComponent(cubos).viendo = true;
	}
	if(col.tag == "puntos"){
		//punto(col);
	}
}

function colorear (col: Collider){
	if(restantecolor >= 0){
		if(color == 1){
			col.GetComponent(Renderer).material.color = color1;
		}
		if(color == 2){
			col.GetComponent(Renderer).material.color = color2;
		}
		if(color == 3){
			col.GetComponent(Renderer).material.color = color3;
		}
		if(color == 4){
			col.GetComponent(Renderer).material.color = color4;
		}
		if(color == 5){
			col.GetComponent(Renderer).material.color = color5;
		}
		if(color == 6){
			col.GetComponent(Renderer).material.color = color6;
		}
		if(color == 7){
			col.GetComponent(Renderer).material.color = color7;
		}
		if(color == 8){
			col.GetComponent(Renderer).material.color = color8;
		}
		restantecolor = restantecolor - 1;
	}else{
	color = Random.Range(1, 9);
	restantecolor = 240;
	}
}

function miniup(col : Collider){
	yield WaitForSeconds(Random.Range(2, 4));
	col.GetComponent(Animation).Play("miniup");
}

function sonido(col : Collider){
	
	this.gameObject.GetComponent(AudioSource).pitch = col.GetComponent(Transform).position.z * 1.2;	
	this.gameObject.GetComponent(AudioSource).Play();
}

function punto(col : Collider){
	if(col.tag == "puntos"){
		if(Random.Range(0,50) < 30){
			Destroy(col.gameObject);
		}
	}
}