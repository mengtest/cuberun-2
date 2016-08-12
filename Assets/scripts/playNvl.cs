using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class PlayNvl : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	public void fin (int puntuacion){
		Debug.Log(puntuacion);
		if(Social.localUser.authenticated){
			Social.ReportScore(puntuacion, "CgkI7cHF8dIBEAIQAg", (bool success) => {});
		}
	}
}
