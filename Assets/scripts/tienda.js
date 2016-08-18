#pragma strict

private var dinero = 0;
//private var dinero = 1500;
var color : Color;

var txtDinero : GameObject;
var btnMejorarGiro : GameObject;
var btnBajarGiro : GameObject;
var btnHabilitarGalletas : GameObject;
var txtNivelGiro : GameObject;
//Colores del jugador
var btnWrite : GameObject;
var btnYellow : GameObject;
var btnYellowgreen : GameObject;
var btnGreen : GameObject;
var btnCyan : GameObject;
var btnBlue : GameObject;
var btnRed : GameObject;
var btnFutsia : GameObject;
var btnMorado : GameObject;
var btnNaranja : GameObject;
var btnMarron : GameObject;
var btnEpileptic : GameObject;

//Colores del fondo del mapa
var btnFondoDefauld : GameObject;
var btnFondoVerdeOscuro : GameObject;
var btnFondoPro : GameObject;
var btnFondoMarron : GameObject;
var btnFondoGris : GameObject;
var btnFondoBlanco : GameObject;


function Update(){
	dinero = PlayerPrefs.GetInt("dinero");
	txtDinero.GetComponent(Text).text = dinero + " galletas";
}

function Start () {
print(color);
	//PlayerPrefs.SetInt("dinero", 696969);
	//PlayerPrefs.SetInt("nivel_giro", 0);
	leerdatos();
	setfondo();
	
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
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "100$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 2){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "200$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 3){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "600$ \n COMPRAR";
	}
	if(PlayerPrefs.GetInt("nivel_giro") == 4){
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "NIVEL MAX";
	}
	if(PlayerPrefs.GetInt("nivel_giro") >= 5){
		PlayerPrefs.SetInt("nivel_giro", 4);
		btnMejorarGiro.transform.GetChild(0).GetComponent(Text).text = "NIVEL MAX";
	}
	txtNivelGiro.GetComponent(Text).text = "Nivel " + PlayerPrefs.GetInt("nivel_giro") + "/4";
	
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
	if(PlayerPrefs.GetInt("color_futsia") == 1){
		btnFutsia.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_morado") == 1){
		btnMorado.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_naranja") == 1){
		btnNaranja.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_marron") == 1){
		btnMarron.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("color_epileptic") == 1){
		btnEpileptic.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	

	
	//SETEO DEL COLOR DEL JUGADOR -------------------------------------------------------------------------
	var coloruso = PlayerPrefs.GetString("coloruse");
	print(coloruso);
	GameObject.Find("Canvas").transform.FindChild("tienda").transform.FindChild("contenido").transform.FindChild("colores_jugador").transform.FindChild(coloruso).transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text = "USANDO";

}
function setfondo(){
	if(PlayerPrefs.GetInt("fondo_defauld") == 1){
		btnFondoDefauld.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("fondo_verde-oscuro") == 1){
		btnFondoVerdeOscuro.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("fondo_pro") == 1){
		btnFondoPro.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("fondo_marron") == 1){
		btnFondoMarron.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("fondo_gris") == 1){
		btnFondoGris.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	if(PlayerPrefs.GetInt("fondo_blanco") == 1){
		btnFondoBlanco.transform.GetChild(0).GetComponent(Text).text = "USAR";
	}
	var fondouso = PlayerPrefs.GetString("fondouse");
	print(fondouso);
	GameObject.Find("Canvas").transform.FindChild("tienda").transform.FindChild("contenido").transform.FindChild("colores_fondo").transform.FindChild(fondouso).transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text = "USANDO";
	print(GameObject.Find("Canvas").transform.FindChild("tienda").transform.FindChild("contenido").transform.FindChild("colores_fondo").transform.FindChild(fondouso).transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text);
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
		if(objeto.name == "color_futsia"){
			if(dinero >= 40){
				PlayerPrefs.SetInt("color_futsia", 1);
				btnFutsia.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 40;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_morado"){
			if(dinero >= 40){
				PlayerPrefs.SetInt("color_morado", 1);
				btnMorado.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 40;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_naranja"){
			if(dinero >= 80){
				PlayerPrefs.SetInt("color_naranja", 1);
				btnNaranja.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 80;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_marron"){
			if(dinero >= 85){
				PlayerPrefs.SetInt("color_marron", 1);
				btnNaranja.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 85;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "color_epileptic"){
			if(dinero >= 250){
				PlayerPrefs.SetInt("color_epileptic", 1);
				btnEpileptic.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 250;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}

	}
	
	//A PARTIR DE AQUI ES CUANDO YA SE QUIERE USAR EL COLOR COMPRADO --------------------------------
	if(objeto.transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text.Contains("USAR") == true){
		PlayerPrefs.SetString("coloruse", objeto.name);
		print("usando "+objeto.name);
	}

	leerdatos();
}
function comprarousarfondo(objeto : GameObject){
		
		//A PARTIR DE AQUI ES PARA EL COLOR DE FONDO -------------------------------------------------------------------
		if(objeto.name == "fondo_defauld"){
			if(dinero >= 0){
				PlayerPrefs.SetInt("fondo_defauld", 1);
				btnFondoDefauld.transform.GetChild(0).GetComponent(Text).text = "USAR";
			}
		}
		if(objeto.name == "fondo_verde-oscuro"){
			if(dinero >= 130){
				PlayerPrefs.SetInt("fondo_verde-oscuro", 1);
				btnFondoVerdeOscuro.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 130;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "fondo_marron"){
			if(dinero >= 135){
				PlayerPrefs.SetInt("fondo_marron", 1);
				btnFondoMarron.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 135;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "fondo_pro"){
			if(dinero >= 100){
				PlayerPrefs.SetInt("fondo_pro", 1);
				btnFondoPro.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 100;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "fondo_gris"){
			if(dinero >= 100){
				PlayerPrefs.SetInt("fondo_gris", 1);
				btnFondoGris.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 100;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
		if(objeto.name == "fondo_blanco"){
			if(dinero >= 70){
				PlayerPrefs.SetInt("fondo_blanco", 1);
				btnFondoBlanco.transform.GetChild(0).GetComponent(Text).text = "USAR";
				dinero = dinero - 70;
				PlayerPrefs.SetInt("dinero", dinero);
			}
		}
			
	if(objeto.transform.GetChild(0).transform.GetChild(0).GetComponent(Text).text.Contains("USAR") == true){
		PlayerPrefs.SetString("fondouse", objeto.name);
		print(objeto.name);		
	}
	
	setfondo();

}


function mejoragiro(){
	var nivel = PlayerPrefs.GetInt("nivel_giro");
	if(PlayerPrefs.GetInt("nivel_giro") == 1){
		btnBajarGiro.GetComponent(Button).interactable = false;
	}else{
		btnBajarGiro.GetComponent(Button).interactable = true;
	}
	
	if(nivel == 1){
		if(dinero >= 100){
			PlayerPrefs.SetInt("nivel_giro", 2);
			dinero = dinero - 100;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 2){
		if(dinero >= 200){
			PlayerPrefs.SetInt("nivel_giro", 3);
			dinero = dinero - 200;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	if(nivel == 3){
		if(dinero >= 600){
			PlayerPrefs.SetInt("nivel_giro", 4);
			dinero = dinero - 600;
			PlayerPrefs.SetInt("dinero", dinero);
		}
	}
	leerdatos();
}

function bajargiro(){
	var nivel = PlayerPrefs.GetInt("nivel_giro");
	
	if(nivel == 2){
			PlayerPrefs.SetInt("nivel_giro", 1);
			dinero = dinero + 100;
			PlayerPrefs.SetInt("dinero", dinero);
	}
	if(nivel == 3){
			PlayerPrefs.SetInt("nivel_giro", 2);
			dinero = dinero + 200;
			PlayerPrefs.SetInt("dinero", dinero);
	}
	if(nivel == 4){
			PlayerPrefs.SetInt("nivel_giro", 3);
			dinero = dinero + 600;
			PlayerPrefs.SetInt("dinero", dinero);
	}
	leerdatos();
}
