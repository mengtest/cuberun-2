#pragma strict

static var velocidad = 0.27;

function Start () {

}

function Update () {
this.transform.Translate(Vector2(velocidad, 0));
velocidad = velocidad * 1.00001;
}