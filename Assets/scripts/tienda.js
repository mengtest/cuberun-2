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
var btnRed : GameObject;
var btnEpileptic : GameObject;

function Update(){
	dinero = PlayerPrefs.GetInt("dinero");
	txtDinero.GetComponent(Text).text = dinero + " galletas";
}

function Start () {
	//PlayerPrefs.SetInt("dinero", 696969);
	PlayerPrefs.SetInt("nivel_giro", 0);
	leerdatos();
	
}
function leerdatos(){

	if(PlayerPrefs.GetInt("galletas_habilitadas") == 1){
		btnHabilitarGalletas.transform.GetChild(0).GetComponent(Text).text = "Galletas habilitadas :3";
		btnHabilitarGalletas.GetComponent(Button).interactable = false;
	}
	
	//SETEO DE LAS MEJORAS DE GIRO. ----------------------------------------------------------------
	if(PlayerPrefs.GetInt("nivel_giro") == 0){
		PlayerPrefs.SetInt("nivel_giro", 1);
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "20$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "25$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "60$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "100$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 5){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "600$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 6){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "NIVEL MAX!";
		btnMejorarGiro.GetComponent(Button).interactable = false;
	}
	txtNivelGiro.GetComponent(Text).text = "Nivel " + PlayerPrefs.GetInt("nivel_giro") + "/6";
	
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
	if(PlayerPrefs.GetInt("color_red") == 1){
		btnRed.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_epileptic") == 1){
		btnEpileptic.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	
	//SETEO DEL COLOR DEL JUGADOR -------------------------------------------------------------------------
	var coloruso = PlayerPrefs.GetString("coloruse");
	print(coloruso);
	GameObject.Find("Canvas").transform.FindChild("tienda").transform.FindChild("colores_jugador").transform.FindChild(coloruso).transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text = "USANDO";

}
function galletas(){
	if(dinero >= 10){
		PlayerPrefs.SetInt("galletas_habilitadas", 1);
		dinero = dinero - 10;
		PlayerPrefs.SetInt("dinero", dinero);
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
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_yellow-green"){
			if(dinero >= 90){
				PlayerPrefs.SetInt("color_yellowgreen", 1);
				btnYellowgreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 90;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_green"){
			if(dinero >= 35){
				PlayerPrefs.SetInt("color_green", 1);
				btnGreen.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 35;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_cyan"){
			if(dinero >= 60){
				PlayerPrefs.SetInt("color_cyan", 1);
				btnCyan.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 60;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_blue"){
			if(dinero >= 80){
				PlayerPrefs.SetInt("color_blue", 1);
				btnBlue.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 80;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_red"){
			if(dinero >= 60){
				PlayerPrefs.SetInt("color_red", 1);
				btnRed.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 60;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_epileptic"){
			if(dinero >= 500){
				PlayerPrefs.SetInt("color_epileptic", 1);
				btnBlue.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 500;
				PlayerPrefs.SetInt("dinero", dinero);
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
		if(dinero >= 20){
			PlayerPrefs.SetInt("nivel_giro", 2);
			dinero = dinero - 20;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 2){
		if(dinero >= 25){
			PlayerPrefs.SetInt("nivel_giro", 3);
			dinero = dinero - 25;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 3){
		if(dinero >= 60){
			PlayerPrefs.SetInt("nivel_giro", 4);
			dinero = dinero - 60;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 4){
		if(dinero >= 100){
			PlayerPrefs.SetInt("nivel_giro", 5);
			dinero = dinero - 100;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 5){
		if(dinero >= 600){
			PlayerPrefs.SetInt("nivel_giro", 6);
			dinero = dinero - 600;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	leerdatos();
}
