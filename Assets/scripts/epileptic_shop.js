#pragma strict

private var i = false;

function Start () {

}

function Update () {
	if(i == false){
		this.GetComponent(Image).color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
		i = true;
	}else{
		this.GetComponent(Image).color = Color(1,1,1);
	i = false;
	}
}