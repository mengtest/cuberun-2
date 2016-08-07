#pragma strict

//static var velocidad = 0.27;
static var velocidad = 0.08;
static var mover : boolean = true;

function Start () {

}

function Update () {
	if(mover == true){
		this.transform.Translate(Vector2(velocidad, 0));
		velocidad = velocidad * 1.0001;
	}
	
	var hit:RaycastHit;
	var hit2:RaycastHit;
	var izquierda = Vector3(0, 0, 0.54);
	var derecha = Vector3(0, 0, -0.54);
	
	//var ray:Ray = Vector3(this.position, this.position, this.position);
	//Para hacer experimentos y ajustar los raycast.
	Debug.DrawRay(transform.position, izquierda, Color.red, 2);
	Debug.DrawRay(transform.position, derecha, Color.green, 2);
	Debug.DrawRay(Vector3(transform.position.x + 0.51, 0, transform.position.z -0.47), Vector3(0, 0, 0.8), Color.blue, 0.1);


	if(Physics.Raycast(transform.position, derecha, hit, 0.51)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableRight = false;
	}}else{
		controles.enableRight = true;
	}
	if(Physics.Raycast(transform.position, izquierda, hit, 0.51)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableLeft = false;
	}}else{
		controles.enableLeft = true;
	}
	
	if(Physics.Raycast(Vector3(transform.position.x + 0.51, 0, transform.position.z -0.47), Vector3(0, 0, 0.1), hit2, 0.8)){
		if(hit2.collider.transform.tag == "pared"){
			fin();
		}
	}
}

function fin(){
mover = false;
}