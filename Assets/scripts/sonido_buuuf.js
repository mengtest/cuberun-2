#pragma strict

var Sonido_buuu : AudioSource;

function Start () {

}

function Update () {	
	
	if(PlayerPrefs.GetInt("sound") == 0){
		Sonido_buuu.enabled = false;
	}else{
		Sonido_buuu.enabled = true;
		Sonido_buuu.pitch = this.transform.position.z /3 + 1.4;	
	}
	
	if(Cube.mover == false){
		Sonido_buuu.enabled = false;
	}else{
		Sonido_buuu.enabled = true;
	}
}