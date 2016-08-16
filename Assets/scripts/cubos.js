#pragma strict

var rand : int;
static var epileptic = false;
var epileptic2 = false;
private var tiempoBorrado = 0.0;

function Start(){
	tiempoBorrado = PlayerPrefs.GetFloat("tiempo_borrado");
	if(tiempoBorrado < 10){
		PlayerPrefs.SetFloat("tiempo_borrado", 42);
		tiempoBorrado = 42;
	}
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
	if(GameObject.Find("canvas").transform.FindChild("pausa").transform.FindChild("objetos_pausa").gameObject.active == false){
	yield WaitForSeconds(30);
	Destroy(this.gameObject);
	}else{
	repetir();
	}
}
function repetir(){
borrame();
}

function Update(){
	if(epileptic2 == true){
		this.GetComponent(Renderer).material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
		GameObject.Find("Main Camera").GetComponent(Camera).backgroundColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
		}
}