﻿#pragma strict

var rand = 0;

function OnTriggerEnter(col : Collider){
	if(col.tag == "pared"){
		rand = Random.Range(1, 11);
		col.GetComponent(Animation).Play();
		sonido(col);
		if(rand < 10){
			miniup(col);
		}
		//col.GetComponent(cubos).viendo = true;
	}
}

function miniup(col : Collider){
	yield WaitForSeconds(Random.Range(1, 5));
	col.GetComponent(Animation).Play("miniup");
}

function sonido(col : Collider){
	
	this.gameObject.GetComponent(AudioSource).pitch = col.GetComponent(Transform).position.z * 1.2;	
	this.gameObject.GetComponent(AudioSource).Play();
}