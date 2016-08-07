#pragma strict

function Start () {

}

function Update () {
	var velocidad = Cube.velocidad;
	var mover = Cube.mover;
	
	if(mover == true){
		this.transform.Translate(Vector2(velocidad, 0), Space.World);
	}
}