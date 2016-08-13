using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;


public class anuncioMenu : MonoBehaviour {

	#if UNITY_ANDROID
	string adUnitId = "ca-app-pub-5148252281838435/4366871101";
	#elif UNITY_IPHONE
	string adUnitId = "ca-app-pub-5148252281838435/5983205100";
	#else
	string adUnitId = "unexpected_platform";
	#endif
	
	private BannerView bannerView;

	void Start () {

		// Create a 320x50 banner at the top of the screen.
		bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Top);
		// Create an empty ad request.
		AdRequest request = new AdRequest.Builder().Build();

		bannerView.LoadAd(request);
		DontDestroyOnLoad(this.gameObject);

	}
	void Update(){
		if(Application.loadedLevelName == "menu"){
		}else{
			bannerView.Destroy();
			bannerView.Hide();
		}
	}

	public void quitaradd(){
		bannerView.Destroy();
		bannerView.Hide();
	}
	
	
	public void setingout(){
		#if UNITY_ANDROID
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
		#elif UNITY_IPHONE
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
		#else
		string adUnitId = "ca-app-pub-5148252281838435/5983205100";
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
