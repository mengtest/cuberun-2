﻿#pragma strict

function Start () {
	if(PlayerPrefs.GetInt("galletas_habilitadas") == 1){
		if(Random.Range(0,50) < 27){
			Destroy(this.gameObject);
		}
	}else{
		Destroy(this.gameObject);
	}
}

function Update () {

}