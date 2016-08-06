#pragma strict

var preset1 : GameObject;
var preset2 : GameObject;
var preset3 : GameObject;
var i = 200;
private var X = 0;

function Start () {
generar();
}

function Update () {

}

function generar(){
	while(i >0){
	var rand = Random.Range(1, 3);
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
	
	Instantiate(gene, new Vector3(X, 46.5, 0), Quaternion.identity);
	i = i - 1;
	}
	//generar2();

}
/*
function generar2(){
yield WaitForSeconds(7);
X = X + 40;
generar();
}*/