using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class logros : MonoBehaviour {

	bool primeraPartida = false;

	void Start () {

		if(PlayerPrefs.GetInt("partidas_jugadas") >= 1){	//Logro de primera partida
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQAA" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("partidas_jugadas") >= 2){	//Logro de perder por porimera vez
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQBA" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("galletas_habilitadas") == 1){	//Logro de habilitar galletas
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQBg" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetString("coloruse") != "color_white"){ //Logro de cambiar color. WONDERFULL!
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQBQ" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("record") >= 40){	//Not bad
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQBw" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("record") >= 100){	//DAFUQ
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQCA" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("record") >= 200){	//THE BOOS
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQCQ" , 100.0f , ( bool éxito) => {});
		}
		if(PlayerPrefs.GetInt("record") >= 1000){	//SAEFUYEFEFSEF
			Social.ReportProgress ( "CgkI7cHF8dIBEAIQCg" , 100.0f , ( bool éxito) => {});
		}
	}
	
	// Update is called once per frame
	/*void Update () {
		if(primeraPartida == true && Cube.mover == false){

		}
	}*/
}
