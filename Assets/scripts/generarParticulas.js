#pragma strict

var particulas : GameObject;
var variadorY : float;
var variadorZ : float;
var generarparticulas = false;

function Start () {
	if(PlayerPrefs.HasKey("particulas") == false){
		PlayerPrefs.SetInt("particulas", 1);
	}
	if(PlayerPrefs.GetInt("particulas") == 1){
		generar();
	}
}

function Update () {
	if(Cube.velocidad >= 7){
	generarparticulas = true;
	}else{
	generarparticulas = false;
	}
	
	if(Application.loadedLevelName == "menu"){
		generarparticulas = true;
	}
}

function generar(){
	var i = Random.Range(4,17);
	if(generarparticulas == true){
		while(i > 0){
			Instantiate(particulas, Vector3(this.transform.position.x + Random.Range(30,90), this.transform.position.y + variadorY + Random.Range(20, -20), Random.Range(-8,20) + variadorZ), Quaternion.identity);
			Instantiate(particulas, Vector3(this.transform.position.x + Random.Range(30,90), this.transform.position.y + variadorY + Random.Range(20, -20), Random.Range(-8,20) + variadorZ), Quaternion.identity);
		
			i = i - 1;
		}
	}
	esperar();
}

function esperar(){
	yield WaitForSeconds(Random.Range(2,4));
	generar();
}