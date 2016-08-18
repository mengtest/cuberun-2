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
	
	BannerView bannerView;
	InterstitialAd interstitial;
	bool contar = false;
	float time;
	static bool mostrar = true;
	public GameObject ganarBtn;

	void Start () {

		if(PlayerPrefs.GetInt("ads_enabled") == 0 && PlayerPrefs.GetInt("partidas__jugadas") >= 3){
			if(Application.loadedLevelName == "menu"){
			bannerView = new BannerView(adUnitId, AdSize.Banner, AdPosition.Top);
			AdRequest request = new AdRequest.Builder().Build();
			bannerView.LoadAd(request);
			}

			interstitial = new InterstitialAd("ca-app-pub-5148252281838435/5983205100");
			AdRequest request2 = new AdRequest.Builder().Build();
			// Load the interstitial with the request.
			interstitial.LoadAd(request2);
		}
		DontDestroyOnLoad(this.gameObject);

	}

	public void ganar(){
		if (interstitial.IsLoaded()) {
			interstitial.Show();
			PlayerPrefs.SetInt("dinero", PlayerPrefs.GetInt("dinero") + 10);
			ganarBtn.SetActive(false);
			mostrar = false;
			contar = true;
			time = 0;
		}
	}

	void Update(){
		if(mostrar == true){
			ganarBtn.SetActive(true);
		}else{
			ganarBtn.SetActive(false);
		}
		/*print (time);
		if(contar == true){
			time = time + 1 * Time.deltaTime;
			ganarBtn.SetActive(false);
		}
		if(time <= 60){
			ganarBtn.SetActive(false);
			contar = true;
		}else{
			contar = false;
			ganarBtn.SetActive(true);
		}*/
		if(Application.loadedLevelName == "menu"){
		}else{
			bannerView.Destroy();
		}
	}

	public void quitaradd(){
		if(PlayerPrefs.GetInt("ads_enabled") == 0 && PlayerPrefs.GetInt("partidas__jugadas") >= 3){
			bannerView.Destroy();
		}
	}
	
	
	public void setingout(){
		/*#if UNITY_ANDROID
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
		*/

	}


}
