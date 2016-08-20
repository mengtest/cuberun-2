#pragma strict

var audio1 : AudioSource;
var audio2 : AudioSource;
var audio3 : AudioSource;
var audio4 : AudioSource;

static var fase = false;

private var sonar : AudioSource;
static var instance = 0;

function Start () {
	DontDestroyOnLoad(this.gameObject);
	if(instance == 1){
		Destroy(this.gameObject);
	}
	instance = 1;

}

function reproducir(){
	
	sonar.Play();	
}

function elegir(){
	var rand = Random.Range(1,5);	
	if(rand == 1){
	sonar = audio1;
	}
	if(rand == 2){
	sonar = audio2;
	}
	if(rand == 3){
	sonar = audio3;
	}
	if(rand == 4){
	sonar = audio4;
	}	

	reproducir();
}

function Update(){

	if (sonar == null) {
		elegir();
	}
	if (sonar.isPlaying == false) {
		elegir();
	}
	
	if(Application.loadedLevelName != "nvl1"){
	sonar.volume = Mathf.Lerp(sonar.volume, 0.0, 1*Time.deltaTime);
	print(sonar.volume);
	acabar();

	}
	
	if(PlayerPrefs.GetInt("music") == 1 || PlayerPrefs.GetString("coloruse") == "color_epileptic"){
		audio1.mute = true;
		audio2.mute = true;
		audio3.mute = true;
		audio4.mute = true;
	}else{
		audio1.mute = false;
		audio2.mute = false;
		audio3.mute = false;
		audio4.mute = false;
	}
	
	if(fase == true){
		sonar.pitch = Mathf.Lerp(sonar.pitch, 0.8, 0.4*Time.deltaTime);
	}else{
		if(sonar.pitch < 0.95){
			sonar.pitch = Mathf.Lerp(sonar.pitch, 1, 0.8*Time.deltaTime);
		}else{
			sonar.pitch = 1.0;
		}
	}
}

function acabar(){
	instance = 0;
	yield WaitForSeconds(2);

	Destroy(this.gameObject);
}