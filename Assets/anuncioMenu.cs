using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;


public class anuncioMenu : MonoBehaviour {

	// Use this for initialization
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
		bannerView.LoadAd(request);




	}
	
	// Update is called once per frame
	public void setingout(){
		#if UNITY_ANDROID
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
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

		if (interstitial.IsLoaded()) {
			interstitial.Show();
		}

	}
	
}
