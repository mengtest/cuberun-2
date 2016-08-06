#pragma strict

function Start () {

}

function Update () {
var velocidad = Cube.velocidad;

this.transform.Translate(Vector2(velocidad, 0), Space.World);
}