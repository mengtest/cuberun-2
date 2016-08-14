#pragma strict

var consola : GameObject;

function Start () {

}

function escribiendo () {
	
	if(consola.GetComponent(InputField).text == "exit"){
			Application.LoadLevel("menu");
	}
	
	
	if(consola.GetComponent(InputField).text == "cookieballs!//"){
		if(PlayerPrefs.GetInt("cookieballs_promotion") == 0){
			PlayerPrefs.SetInt("dinero", PlayerPrefs.GetInt("dinero") + 50);
			PlayerPrefs.SetInt("cookieballs_promotion", 1);
			Application.LoadLevel("menu");
		}
	}
	if(consola.GetComponent(InputField).text == "JN99chanel//"){
		if(PlayerPrefs.GetInt("jn99chanel_promotion") == 0){
			PlayerPrefs.SetInt("dinero", PlayerPrefs.GetInt("dinero") + 50);
			PlayerPrefs.SetInt("jn99chanel_promotion", 1);
			Application.LoadLevel("menu");
		}
	}
	if(consola.GetComponent(InputField).text == "extrAcode!//"){
		if(PlayerPrefs.GetInt("extracode_promotion") == 0){
			PlayerPrefs.SetInt("dinero", PlayerPrefs.GetInt("dinero") + 100);
			PlayerPrefs.SetInt("extracode_promotion", 1);
			Application.LoadLevel("menu");
		}
	}
	if(consola.GetComponent(InputField).text == "I AM DEVEL0P3R BITCHS!//"){
		if(PlayerPrefs.GetInt("ads_enabled") == 0){
			PlayerPrefs.SetInt("ads_enabled", 1);
			Application.LoadLevel("menu");
		}
	}
}