using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;


public class PlayMenu : MonoBehaviour {

	// Use this for initialization
	void Start () {
		PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate();
		Social.localUser.Authenticate((bool success) => {});
	}
	
	public void ranking () {
		if(Social.localUser.authenticated){
			Social.ShowLeaderboardUI();
		}else{
			Social.localUser.Authenticate((bool success) => {});
		}
	}

	public void logros () {
		if(Social.localUser.authenticated){
			Social.ShowAchievementsUI();
		}else{
			Social.localUser.Authenticate((bool success) => {});
		}
	}
}
