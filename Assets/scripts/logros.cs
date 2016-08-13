using UnityEngine;
using System.Collections;

public class logros : MonoBehaviour {

	bool primeraPartida = false;

	void Start () {

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
