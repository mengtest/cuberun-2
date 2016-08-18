using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;


public class PlayMenu : MonoBehaviour {

	// Use this for initialization
	void Awake () {
		DontDestroyOnLoad(transform.gameObject);
		//PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate();
		Social.localUser.Authenticate((bool success) => {});
	}
	void Start (){
		print (PlayerPrefs.GetInt("partidas__jugadas"));
		Social.ReportScore(PlayerPrefs.GetInt("record"), "CgkI7cHF8dIBEAIQAg", (bool success) => {});
		Social.ReportScore(PlayerPrefs.GetInt("dinero"), "CgkI7cHF8dIBEAIQAw", (bool success) => {});
		Social.ReportScore(PlayerPrefs.GetInt("partidas__jugadas"), "CgkI7cHF8dIBEAIQCw", (bool success) => {});
		}
	
	public void ranking () {

		if(Social.localUser.authenticated){
			Social.ReportScore(PlayerPrefs.GetInt("record"), "CgkI7cHF8dIBEAIQAg", (bool success) => {});
			Social.ReportScore(PlayerPrefs.GetInt("dinero"), "CgkI7cHF8dIBEAIQAw", (bool success) => {});
			Social.ReportScore(PlayerPrefs.GetInt("partidas__jugadas"), "CgkI7cHF8dIBEAIQCw", (bool success) => {});
			PlayGamesPlatform.Instance.ShowLeaderboardUI();
		}else{
			Social.localUser.Authenticate((bool success) => {});
		}
	}

	public void logros () {
		if(Social.localUser.authenticated){
			PlayGamesPlatform.Instance.ShowAchievementsUI();
		}else{
			Social.localUser.Authenticate((bool success) => {});
		}
	}
}
