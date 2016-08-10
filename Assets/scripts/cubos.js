#pragma strict

var rand : int;

function Start(){
	/*rand = Random.Range(0, 10);
	if(rand == 0){
		GetComponent(Renderer).material.color = Color.green;
	}
	if(rand == 1){
		GetComponent(Renderer).material.color = Color(231, 138, 0);
	}
	if(rand == 2){
		GetComponent(Renderer).material.color = Color.white;
	}
	if(rand == 3){
		GetComponent(Renderer).material.color = Color.white;
	}
	if(rand == 4){
		GetComponent(Renderer).material.color = Color.white;
	}
	if(rand == 5){
		GetComponent(Renderer).material.color = Color(231, 138, 0);
	}
	if(rand == 6){
		GetComponent(Renderer).material.color = Color.green;
	}
	if(rand == 7){
		GetComponent(Renderer).material.color = Color.green;
	}
	if(rand == 8){
		GetComponent(Renderer).material.color = Color.cyan;
	}
	if(rand == 9){
		GetComponent(Renderer).material.color = Color.cyan;
	}*/
}

function Update(){
	this.GetComponent(Renderer).material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
}