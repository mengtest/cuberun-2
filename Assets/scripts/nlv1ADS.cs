using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class nlv1ADS : MonoBehaviour {

	#if UNITY_ANDROID
	string adUnitId = "ca-app-pub-5148252281838435/5983205100";
	#elif UNITY_IPHONE
	string adUnitId = "ca-app-pub-5148252281838435/5983205100";
	#else
	string adUnitId = "unexpected_platform";
	#endif	
	// Initialize an InterstitialAd.
	InterstitialAd interstitial;

	void Start () {
		if(PlayerPrefs.GetInt("ads_enabled") == 0){
			interstitial = new InterstitialAd("ca-app-pub-5148252281838435/5983205100");
			AdRequest request = new AdRequest.Builder().Build();
			// Load the interstitial with the request.
			interstitial.LoadAd(request);
		}
	}

	public void mostrarIntersticial(){

		if (interstitial.IsLoaded()) {
			interstitial.Show();
		}	
	}
}
 