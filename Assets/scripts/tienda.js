#pragma strict

private var dinero = 0;
//private var dinero = 1500;

var txtDinero : GameObject;
var btnMejorarGiro : GameObject;
var btnHabilitarGalletas : GameObject;
var txtNivelGiro : GameObject;

var btnWrite : GameObject;
var btnYellow : GameObject;
var btnYellowgreen : GameObject;
var btnGreen : GameObject;
var btnCyan : GameObject;
var btnBlue : GameObject;

function Update(){
	dinero = PlayerPrefs.GetInt("dinero");
	txtDinero.GetComponent(Text).text = dinero + " galletas";
}

function Start () {
	leerdatos();
	
}
function leerdatos(){

	if(PlayerPrefs.GetInt("galletas_habilitadas") == 1){
		btnHabilitarGalletas.transform.GetChild(0).GetComponent(Text).text = "Galletas habilitadas :3";
		btnHabilitarGalletas.GetComponent(Button).interactable = false;
	}
	
	//SETEO DE LAS MEJORAS DE GIRO. ----------------------------------------------------------------
	if(PlayerPrefs.GetInt("nivel_giro") == 6){
		PlayerPrefs.SetInt("nivel_giro", 1);
	}
	txtNivelGiro.GetComponent(Text).text = "Nivel " + PlayerPrefs.GetInt("nivel_giro") + "/6";
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "50$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "150$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "350$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "600$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 5){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "1000$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 6){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "NIVEL MAX!";
		btnMejorarGiro.GetComponent(Button).interactable = false;
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
	var coloruso = PlayerPrefs.GetString("coloruse");
	print(coloruso);
	GameObject.Find("Canvas").transform.FindChild("tienda").transform.FindChild("colores_jugador").transform.FindChild(coloruso).transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text = "USANDO";
}

function galletas(){
	if(dinero >= 50){
		PlayerPrefs.SetInt("galletas_habilitadas", 1);
		leerdatos();
	}
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
			if(dinero >= 90){
				PlayerPrefs.SetInt("color_yellowgreen", 1);
				btnYellowgreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 90;
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
	
	//A PARTIR DE AQUI ES CUANDO YA SE QUIERE USAR EL COLOR COMPRADO --------------------------------
	if(objeto.transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text.Contains("USAR") == true){
		PlayerPrefs.SetString("coloruse", objeto.name);
		print("usando "+objeto.name);
		leerdatos();
	}
}

function mejoragiro(){
	var nivel = PlayerPrefs.GetInt("nivel_giro");
	
	if(nivel == 1){
		if(dinero >= 50){
			PlayerPrefs.SetInt("nivel_giro", 2);
			dinero = dinero - 50;
		}
	}
	if(nivel == 2){
		if(dinero >= 150){
			PlayerPrefs.SetInt("nivel_giro", 3);
			dinero = dinero - 150;
		}
	}
	if(nivel == 3){
		if(dinero >= 350){
			PlayerPrefs.SetInt("nivel_giro", 4);
			dinero = dinero - 350;
		}
	}
	if(nivel == 4){
		if(dinero >= 600){
			PlayerPrefs.SetInt("nivel_giro", 5);
			dinero = dinero - 600;
		}
	}
	if(nivel == 5){
		if(dinero >= 1000){
			PlayerPrefs.SetInt("nivel_giro", 6);
			dinero = dinero - 1000;
		}
	}
	leerdatos();
}
