#pragma strict

var velocidad : int;

function Start () {
	velocidad = Random.Range(-7, -50);
	yield WaitForSeconds(5);
	Destroy(this.gameObject);
}

function Update () {
	this.transform.Translate(Vector3(velocidad,0,0)* Time.deltaTime, Space.World);
}