#pragma strict

var variatorZ = 0.0;
var dropvoid : GameObject;


private var i = 70;
private var X = 0;

function Start () {

	generar();
}

function Update () {
	if(GameObject.Find("Main Camera").transform.position.x + 70 > X){
		generar();
	}
}

function generar(){
	
	var rand = Random.Range(1, 9);
	var gene : GameObject;
	
	gene = dropvoid;
		
	Instantiate(gene, new Vector3(X, 46.5, variatorZ), Quaternion.identity);
	X = X + 40;
	

}