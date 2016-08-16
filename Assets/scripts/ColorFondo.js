#pragma strict

function Start () {
	if(PlayerPrefs.HasKey("fondouse") == false){
		PlayerPrefs.SetString("fondouse", "fondo_defauld");
	}
	var fondouse = PlayerPrefs.GetString("fondouse");
	
	if(fondouse == "fondo_defauld"){
	this.GetComponent(Camera).backgroundColor = Color(0.078, 0.000, 0.161);
	}
	if(fondouse == "fondo_verde-oscuro"){
	this.GetComponent(Camera).backgroundColor = Color(0.000, 0.133, 0.000);
	}
	if(fondouse == "fondo_marron"){
	this.GetComponent(Camera).backgroundColor = Color(0.106, 0.051, 0.000);
	}
	if(fondouse == "fondo_pro"){
	this.GetComponent(Camera).backgroundColor = Color(0.200, 0.200, 0.200);
	}
	if(fondouse == "fondo_gris"){
	this.GetComponent(Camera).backgroundColor = Color(0.596, 0.596, 0.596);
	}
	if(fondouse == "fondo_blanco"){
	this.GetComponent(Camera).backgroundColor = Color(0.9,0.9,0.9);
	}


}

function Update () {

}