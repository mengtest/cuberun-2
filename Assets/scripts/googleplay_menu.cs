using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class loadgoogleplay : MonoBehaviour {
	
	void Start () {
		PlayGamesPlatform.DebugLogEnabled = true;
		PlayGamesPlatform.Activate();
		Social.localUser.Authenticate((bool success) => {});
	}

	void ranking () {
		if(Social.localUser.authenticated){
			Social.ShowLeaderboardUI();
		}else{
			//Social.localUser.Authenticate((bool success) => {});
		}
	}
}
