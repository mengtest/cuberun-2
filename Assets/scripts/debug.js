#pragma strict

var velocidad = 0.2;
var slider : GameObject;
var slider1 : GameObject;

function Start () {
	Cube.velocidad = velocidad;
}

function Update () {
	Cube.velocidad = slider.GetComponent(Slider).value;
	this.GetComponent(Camera).orthographicSize = slider1.GetComponent(Slider).value;
}