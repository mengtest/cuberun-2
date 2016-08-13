using UnityEngine;
using System.Collections;

public class tempo : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	public void anuncio () {
		GameObject.Find("PlayGames").GetComponent(anuncioMuerte).findeljuego();
	}
}
