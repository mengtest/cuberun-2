#pragma strict


var i = false;

function Update () {
	if(this.GetComponent(Rigidbody).isKinematic == false && i == false){
		i = true;
		destruir();
	}

}

function destruir(){
	yield WaitForSeconds(Random.Range(4,10));
	Destroy(this.gameObject);
}