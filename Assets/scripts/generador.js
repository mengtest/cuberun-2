﻿#pragma strict

var variatorZ = 0.0;
var lineal : GameObject;
var preset1 : GameObject;
var preset2 : GameObject;
var preset3 : GameObject;
var preset4 : GameObject;
var preset5 : GameObject;
var preset6 : GameObject;
var preset7 : GameObject;
var preset8 : GameObject;
var preset9 : GameObject;
var preset10 : GameObject;
var preset11 : GameObject;
var preset12 : GameObject;
var preset13 : GameObject;

private var i = 70;
private var X = 0;

function Start () {
	Instantiate(lineal, new Vector3(-41, 46.5, variatorZ), Quaternion.identity);
	Instantiate(lineal, new Vector3(-82.25, 46.5, variatorZ), Quaternion.identity);
	generar();
}

function Update () {
	if(GameObject.Find("Main Camera").transform.position.x + 70 > X){
		generar();
	}
}

function generar(){
	
	var rand = Random.Range(1, 14);
	var gene : GameObject;
	
		if(rand == 1){
		gene = preset1;
		}
		if(rand == 2){
		gene = preset2;
		}
		if(rand == 3){
		gene = preset3;
		}
		if(rand == 4){
		gene = preset4;
		}
		if(rand == 5){
		gene = preset5;
		}
		if(rand == 6){
		gene = preset6;
		}
		if(rand == 7){
		gene = preset7;
		}
		if(rand == 8){
		gene = preset8;
		}
		if(rand == 9){
		gene = preset9;
		}
		if(rand == 10){
		gene = preset10;
		}
		if(rand == 11){
		gene = preset11;
		}
		if(rand == 12){
		gene = preset12;
		}
		if(rand == 13){
		gene = preset13;
		}
	Instantiate(gene, new Vector3(X, 46.5, variatorZ), Quaternion.identity);
	X = X + 40;
	

}

function generadoraux(){
	while(i >0){
	var rand = Random.Range(1, 5);
	var gene : GameObject;
	
		if(rand == 1){
		gene = preset1;
		}
		if(rand == 2){
		gene = preset2;
		}
		if(rand == 3){
		gene = preset3;
		}
		if(rand == 4){
		gene = preset4;
		}
	
	Instantiate(gene, new Vector3(X, 46.5, variatorZ), Quaternion.identity);
	Instantiate(gene, new Vector3(X, 45.5, variatorZ), Quaternion.identity);
	i = i - 1;
	X = X + 40;
	} 
	//generar2();
}
/*
function generar2(){
yield WaitForSeconds(7);
X = X + 40;
generar();
}*/