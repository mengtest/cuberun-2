#pragma strict

var rand = 0;
var camara : GameObject;
var i = 0.0;
private var ix : GameObject;

function Update(){
	i = -camara.transform.position.z + camara.transform.position.y;
	this.transform.position = Vector2(camara.transform.position.x + -24 + i, transform.position.y);
	
}

function OnTriggerEnter(col : Collider){
	if(col.tag == "pared"){
				
		rand = Random.Range(1, 11);
		if(col.GetComponent(Renderer).enabled == true){
		col.GetComponent(Renderer).enabled = false;
		mostrar(col);
		}
		//col.GetComponent(Renderer).material.color = Color(Random.Range(0, 256), Random.Range(0, 256), Random.Range(0, 256));
		
		
		//col.GetComponent(cubos).viendo = true;
	}
	if(col.tag == "puntos"){
		//punto(col);
	}
}
function mostrar(col : Collider){
	
	
	yield WaitForSeconds(1);
	col.GetComponent(Renderer).enabled = true;
	col.GetComponent(Animation).Play();
	
}

function miniup(col : Collider){
	yield WaitForSeconds(Random.Range(2.2, 5));
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