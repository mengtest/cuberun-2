#pragma strict

var rand = 0;

function OnTriggerEnter(col : Collider){
	if(col.tag == "pared"){
	rand = Random.Range(1, 11);
	col.GetComponent(Animation).Play();
		if(rand < 10){
			miniup(col);
		}
	//col.GetComponent(cubos).viendo = true;
	}
}

function miniup(col : Collider){
	yield WaitForSeconds(Random.Range(1, 5));
	col.GetComponent(Animation).Play("miniup");
}