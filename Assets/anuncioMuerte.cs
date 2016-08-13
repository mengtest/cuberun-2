using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class anuncioMuerte : MonoBehaviour {
	
	void Start () {

	}

	public void findeljuego(){
		#if UNITY_ANDROID
		string adUnitId = "ca-app-pub-5148252281838435/2192133906";
		#elif UNITY_IPHONE
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
		#else
		string adUnitId = "unexpected_platform";
		#endif
		
		// Initialize an InterstitialAd.
		InterstitialAd interstitial = new InterstitialAd(adUnitId);
		// Create an empty ad request.
		AdRequest request = new AdRequest.Builder().Build();
		// Load the interstitial with the request.
		interstitial.LoadAd(request);

			interstitial.Show();
		
	}
}
