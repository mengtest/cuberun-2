#pragma strict

var titulo : GameObject;
var dineroYRecord : GameObject;
var playbtn : GameObject;
var shopbtn : GameObject;
var setingbtn : GameObject;
var tiendaGroup : GameObject;
var ajustesGroup : GameObject;
var salirMSG : GameObject;
var sliderBorrado : GameObject;

function Update(){
	dineroYRecord.GetComponent(Text).text = "Tienes " + PlayerPrefs.GetInt("dinero") + " galletas y tu record es " + PlayerPrefs.GetInt("record");
	
	if(Input.GetKey(KeyCode.Escape) && tiendaGroup.active == true){
		shop();
	}
	if(Input.GetKey(KeyCode.Escape) && tiendaGroup.active == false && ajustesGroup.active == false){
		salirMSG.SetActive(true);
		salirMSG.GetComponent(Animation).Play();
	}
}
function salir(){	//Funcion al pulsar "SI" en el mensaje que aparece al pULSAR ATRAS.
	Application.Quit();
}
function nosalir(){		//Funcion al pulsar "NO" en el mensaje que aparece al pULSAR ATRAS.
	salirMSG.SetActive(false);
}
function Start(){
	sliderBorrado.GetComponent(Slider).value = PlayerPrefs.GetFloat("tiempo_borrado");
}

function seting(){
	if(ajustesGroup.active == false){
		titulo.GetComponent(Animation).Play("title_out");
		playbtn.GetComponent(Animation).Play();
		shopbtn.GetComponent(Animation).Play("shop_out");
		setingbtn.GetComponent(Animation).Play();
		ajustesGroup.SetActive(true);
	}else{
		titulo.GetComponent(Animation).Play("title_in");
		playbtn.GetComponent(Animation).Play("play_in");
		shopbtn.GetComponent(Animation).Play("shop_in");
		setingbtn.GetComponent(Animation).Play("seting_in");
		PlayerPrefs.SetFloat("tiempo_borrado", sliderBorrado.GetComponent(Slider).value);
		print(PlayerPrefs.GetFloat("tiempo_borrado"));
		ajustesGroup.SetActive(false);
	}
}

function shop(){
	if(tiendaGroup.active == false){
		titulo.GetComponent(Animation).Play("title_out");
		playbtn.GetComponent(Animation).Play();
		shopbtn.GetComponent(Animation).Play("shop_shop");
		setingbtn.GetComponent(Animation).Play();
		tiendaGroup.SetActive(true);
	}else{
		titulo.GetComponent(Animation).Play("title_in");
		playbtn.GetComponent(Animation).Play("play_in");
		shopbtn.GetComponent(Animation).Play("shop_shop_exit");
		setingbtn.GetComponent(Animation).Play("seting_in");
		tiendaGroup.SetActive(false);
	}
}