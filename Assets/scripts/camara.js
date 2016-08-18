//import UnityStandardAssets.ImageEffects;

var i = 0.0; //Lerp
var PLAYER : GameObject;
var MusicSource : GameObject;
var SoundSource : GameObject;
var end = false;
var tutorialMode = false;
//var playNvl: Component;

function Start () {
	Cube.mover = true;
	//PlayerPrefs.SetInt("fin", 0);
}
function configload(){
	var music = PlayerPrefs.GetInt("music");
	var sound = PlayerPrefs.GetInt("sound");
	if(music == 0){
		MusicSource.GetComponent(AudioSource).mute = true;
		
	}else{
		MusicSource.GetComponent(AudioSource).mute = false;
		
	}
	if(sound == 0){
		SoundSource.GetComponent(AudioSource).mute = true;
	}else{
		SoundSource.GetComponent(AudioSource).mute = false;
	}
}

function Update () {
	if(tutorialMode == false){
		var velocidad = Cube.velocidad;
	}else{
		velocidad = 6;
	}
	var mover = Cube.mover;
	if(PLAYER != null){
		this.transform.position.z = Mathf.Lerp(this.transform.position.z, PLAYER.transform.position.z /1.5 - 8.5, 4*Time.deltaTime);
	}
	
	if(mover == true){
		this.transform.Translate(Vector2(velocidad * Time.deltaTime, 0), Space.World);
		//this.transform.Translate(Vector3(0.002,0.005,-0.0051));
		if(this.transform.position.y >= 56){
		}else{
			this.transform.Translate(Vector3(0.0005466,0.0012666,-0.0022));
		}
	}
	
	if(end == true){
		this.transform.LookAt(PLAYER.transform);
		this.transform.Translate(Vector3(i, 0, 0), Space.World);
		i = Mathf.Lerp(i, 0.23, 2 * Time.deltaTime);
		SoundSource.GetComponent(AudioSource).mute = true;
	//	this.GetComponent(DepthOfField).enabled = true;
	//	this.GetComponent(DepthOfField).aperture = this.GetComponent(DepthOfField).aperture + 0.02;
	}else{
		SoundSource.GetComponent(AudioSource).mute = false;
		//this.GetComponent(DepthOfField).enabled = false;
	//	this.GetComponent(DepthOfField).aperture = 0.0;
	}
}

function fin(){
	end = true;
	PlayerPrefs.SetInt("partidas_jugadas", PlayerPrefs.GetInt("partidas_jugadas") + 1);
	//PlayerPrefs.SetInt("fin", 1);
	//GameObject.Find("PlayGames").GetComponent(tempo).anuncio();
//	this.playNvl.fin(puntuaciones.puntos);
}