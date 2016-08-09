#pragma strict

var variatorZ = 0.0;

var preset1 : GameObject;
var preset2 : GameObject;
var preset3 : GameObject;
var preset4 : GameObject;

private var i = 70;
private var X = 0;

function Start () {
generar();
}

function Update () {
	if(GameObject.Find("Main Camera").transform.position.x + 30 > X){
		generar();
	}
}

function generar(){
	
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