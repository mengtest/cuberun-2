#pragma strict

//static var velocidad = 0.27;
static var velocidad = 0.08;
static var mover : boolean = true;

function Start () {
mover = true;
}

function Update () {
	if(mover == true){
		this.transform.Translate(Vector2(velocidad, 0));
		velocidad = velocidad * 1.00012;
	}
	
	var hit:RaycastHit;
	var izquierda = Vector3(0, 0, 0.54);
	var derecha = Vector3(0, 0, -0.54);
	
	//var ray:Ray = Vector3(this.position, this.position, this.position);
	//Para hacer experimentos y ajustar los raycast.
	Debug.DrawRay(transform.position, izquierda, Color.red, 4);
	Debug.DrawRay(transform.position, derecha, Color.green, 4);
	Debug.DrawRay(Vector3(transform.position.x + 0.51, transform.position.y, transform.position.z -0.47), Vector3(0, 0, 0.81), Color.blue, 0.01);
	
	if(Physics.Raycast(Vector3(transform.position.x + 0.51, transform.position.y, transform.position.z -0.47), Vector3(0, 0, 1), hit, 0.81)){
		if(hit.collider.transform.tag == "pared"){
			fin();
		}
	}

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
	
}

function fin(){
mover = false;
gameObject.Find("canvas").GetComponent(puntuaciones).fin();
}