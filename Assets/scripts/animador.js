#pragma strict

function OnTriggerEnter(col : Collider){
	if(col.tag == "pared"){
	col.GetComponent(Animation).Play();
	}
}