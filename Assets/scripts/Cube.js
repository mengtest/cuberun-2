#pragma strict

static var velocidad = 0.1;

function Start () {

}

function Update () {
this.transform.Translate(Vector2(velocidad, 0));
}