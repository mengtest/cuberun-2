#pragma strict

var rand : int;
static var epileptic = false;
var epileptic2 = false;
private var tiempoBorrado = 0.0;

function Start(){
	tiempoBorrado = PlayerPrefs.GetFloat("tiempo_borrado");
	if(tiempoBorrado < 10){
		PlayerPrefs.SetFloat("tiempo_borrado", 30);
		tiempoBorrado = 30;
	}
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
	borrame();
	waitepileptic();
}

function waitepileptic(){
	yield WaitForSeconds(6.18);
	if(epileptic == true){
		epileptic2 = true;
	}
}

function borrame(){
	yield WaitForSeconds(tiempoBorrado);
	Destroy(this.gameObject);
}

function Update(){
	if(epileptic2 == true){
		this.GetComponent(Renderer).material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
		GameObject.Find("Main Camera").GetComponent(Camera).backgroundColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
		}
}