

var i = 0.0; //Lerp
var PLAYER : GameObject;
var MusicSource : GameObject;
var SoundSource : GameObject;
var end = false;

function Start () {
	Cube.mover = true;
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
	var velocidad = Cube.velocidad;
	var mover = Cube.mover;
	
	if(mover == true){
		this.transform.Translate(Vector2(velocidad, 0), Space.World);
		//this.transform.Translate(Vector3(0.002,0.005,-0.0051));
		this.transform.Translate(Vector3(0.00005666,0.00016666,-0.00026));
	}
	
	if(end == true){
		this.transform.LookAt(PLAYER.transform);
		this.transform.Translate(Vector3(i, 0, 0), Space.World);
		i = Mathf.Lerp(i, 0.23, 2 * Time.deltaTime);
	}
}

function fin(){
	end = true;
}