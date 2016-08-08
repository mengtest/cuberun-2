#pragma strict

//private var dinero = PlayerPrefs.GetInt("galletas");
private var dinero = 400;

var txtDinero : GameObject;
var btnMejorarGiro : GameObject;
var txtNivelGiro : GameObject;

var btnWrite : GameObject;
var btnYellow : GameObject;
var btnYellowgreen : GameObject;
var btnGreen : GameObject;
var btnCyan : GameObject;
var btnBlue : GameObject;

function Update(){
	txtDinero.GetComponent(Text).text = dinero + " galletas";
}

function Start () {
	//SETEO DE LAS MEJORAS DE GIRO. ----------------------------------------------------------------
	if(PlayerPrefs.GetInt("nivel_giro") == 0){
		PlayerPrefs.SetInt("nivel_giro", 1);
	}
	txtNivelGiro.GetComponent(Text).text = "Nivel " + PlayerPrefs.GetInt("nivel_giro") + "/5";
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		btnMejorarGiro.GetComponent(Text).text = "50$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		btnMejorarGiro.GetComponent(Text).text = "150$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		btnMejorarGiro.GetComponent(Text).text = "350$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		btnMejorarGiro.GetComponent(Text).text = "600$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 5){
		btnMejorarGiro.GetComponent(Text).text = "1000$ \n COMPRAR";
	}
	
	//SETEO DE LOS BOTONES DE COMPRAR LOS COLORES DEL PERSONAJE. ---------------------------------------
	if(PlayerPrefs.GetInt("color_white") == 1){
		btnWrite.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_yellow") == 1){
		btnYellow.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_yellowgreen") == 1){
		btnYellowgreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_green") == 1){
		btnGreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_cyan") == 1){
		btnCyan.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_blue") == 1){
		btnBlue.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	
	//SETEO DEL COLOR DEL JUGADOR -------------------------------------------------------------------------
	var coloruso = PlayerPrefs.GetString("coloruso");
	GameObject.Find("color_"+coloruso).transform.GetChild(0).GetComponent(Text).text = "USANDO";
	
}

function comprarousar(objeto : GameObject){
	if(objeto.transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text.Contains("COMPRAR") == true){
		if(objeto.name == "color_yellow"){
			if(dinero >= 20){
				PlayerPrefs.SetInt("color_yellow", 1);
				btnYellow.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 20;
			}
		}
		if(objeto.name == "color_yellow-green"){
			if(dinero >= 60){
				PlayerPrefs.SetInt("color_yellowgreen", 1);
				btnYellowgreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 60;
			}
		}
		if(objeto.name == "color_green"){
			if(dinero >= 35){
				PlayerPrefs.SetInt("color_green", 1);
				btnGreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 35;
			}
		}
		if(objeto.name == "color_cyan"){
			if(dinero >= 60){
				PlayerPrefs.SetInt("color_cyan", 1);
				btnCyan.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 60;
			}
		}
		if(objeto.name == "color_blue"){
			if(dinero >= 80){
				PlayerPrefs.SetInt("color_blue", 1);
				btnBlue.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 80;
			}
		}
	}
}


