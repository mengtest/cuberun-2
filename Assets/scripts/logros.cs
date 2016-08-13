using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class logros : MonoBehaviour {

	bool primeraPartida = false;

	void Start () {
		#if UNITY_ANDROID
		string adUnitId = "ca-app-pub-5148252281838435/4366871101";
		#elif UNITY_IPHONE
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
		#else
		string adUnitId = "unexpected_platform";
		#endif
		
		// Create a 320x50 banner at the top of the screen.
		BannerView bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Top);
		// Create an empty ad request.
		AdRequest request = new AdRequest.Builder().Build();
		// Load the banner with the request.
		bannerView.Destroy();
		if(PlayerPrefs.GetInt("partidas_jugadas") == 0){
			primeraPartida = true;
		}
	}
	
	// Update is called once per frame
	/*void Update () {
		if(primeraPartida == true && Cube.mover == false){

		}
	}*/
}
