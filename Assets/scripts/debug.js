#pragma strict

var velocidad = 0.2;
var slider : GameObject;
var slider1 : GameObject;
var comandText : GameObject;

function Start () {
	Cube.velocidad = velocidad;
}

function Update () {
	Cube.velocidad = slider.GetComponent(Slider).value;
	this.GetComponent(Camera).orthographicSize = slider1.GetComponent(Slider).value;
}

function input(){
	if(comandText.GetComponent(InputField).text == "dropvoid"){
	this.GetComponent(generador).enabled = false;
	this.GetComponent(dropvoid_generator).enabled = true;
	}else{
	this.GetComponent(generador).enabled = true;
	this.GetComponent(dropvoid_generator).enabled = false;
	}
}