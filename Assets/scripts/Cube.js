#pragma strict

//static var velocidad = 0.27;
static var velocidad = 0.08;

function Start () {

}

function Update () {
	this.transform.Translate(Vector2(velocidad, 0));
	velocidad = velocidad * 1.0001;
	
	var hit:RaycastHit;
	var izquierda = Vector3(0, 0, 0.51);
	var derecha = Vector3(0, 0, -0.51);
	
	//var ray:Ray = Vector3(this.position, this.position, this.position);
	//Para hacer experimentos y ajustar los raycast.
	Debug.DrawRay(transform.position, izquierda, Color.red, 2);
	Debug.DrawRay(transform.position, derecha, Color.green, 2);
	Debug.DrawRay(Vector3(transform.position.x + 0.5, 0, transform.position.z -0.5), Vector3(0, 0, 1), Color.blue, 0.1);


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
	
	if(Physics.Raycast(Vector3(transform.position.x + 0.5, 0, transform.position.z -0.5), Vector3(0, 0, 1), hit, 0.51)){
		if(hit.collider.transform.tag == "pared"){
			fin();
		}
	}
}

function fin(){
print("FIN DEL JUEGO");
Application.Quit();
}