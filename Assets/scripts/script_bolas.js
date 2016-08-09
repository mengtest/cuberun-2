#pragma strict

function Start () {
	if(Random.Range(0,50) < 45){
		Destroy(this.gameObject);
	}
}

function Update () {

}