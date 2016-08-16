#pragma strict

//static var velocidad = 0.27;
static var velocidad = 6.0;
static var mover : boolean = true;
var materialDeveloper : Material;
var colores : Color;

private var epileptic = false;

function Start () {
color();
mover = true;
print(colores);
velocidad = 6.0;
controles.enableRight = true;
controles.enableLeft = true;

}

function FixedUpdate () {
	var hit:RaycastHit;
	var izquierda = Vector3.forward;
	var derecha = Vector3.back;
	
	//var ray:Ray = Vector3(this.position, this.position, this.position);
	//Para hacer experimentos y ajustar los raycast.
	Debug.DrawRay(transform.position, izquierda, Color.red, 4);
	Debug.DrawRay(transform.position, derecha, Color.green, 4);
	Debug.DrawRay(transform.position + Vector3(0.46,0,0), izquierda, Color.red, 4);
	Debug.DrawRay(transform.position + Vector3(0.46,0,0), derecha, Color.green, 4);
	Debug.DrawRay(Vector3(transform.position.x, transform.position.y, transform.position.z -0.30), Vector3(0.5, 0, 0.3), Color.blue, 2);
	Debug.DrawRay(Vector3(transform.position.x, transform.position.y, transform.position.z +0.30), Vector3(0.5, 0, -0.3), Color.cyan, 2);
	
		if(Physics.Raycast(transform.position, derecha, hit, 0.63)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableRight = false;
		}
		if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
		}else{
			controles.enableRight = true;
		}
	if(Physics.Raycast(transform.position + Vector3(0.46,0,0), derecha, hit, 0.63)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableRight = false;
		}
		if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
		}else{
			controles.enableRight = true;
		}
		
		
	if(Physics.Raycast(transform.position, izquierda, hit, 0.63)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableLeft = false;
		}if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
		}else{
			controles.enableLeft = true;
	}
	if(Physics.Raycast(transform.position + Vector3(0.46,0,0), izquierda, hit, 0.63)){
		if(hit.collider.transform.tag == "pared"){
			controles.enableLeft = false;
		}if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
		}else{
			controles.enableLeft = true;
	}
	
	if(Physics.Raycast(Vector3(transform.position.x, transform.position.y, transform.position.z -0.30), Vector3(0.5, 0, 0.3), hit, 0.5)){		
		if(hit.collider.transform.tag == "pared"){
			fin();
		}		
		if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
	}
	if(Physics.Raycast(Vector3(transform.position.x, transform.position.y, transform.position.z +0.30), Vector3(0.5, 0, -0.3), hit, 0.5)){
		if(hit.collider.transform.tag == "pared"){
			fin();
		}
		if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
	}
	/*if(Physics.Raycast(Vector3(transform.position.x + 0.515, transform.position.y, transform.position.z -0.40), izquierda, hit, 0.40)){
		if(hit.collider.transform.tag == "pared"){
			fin();
		}		
		if(hit.collider.transform.tag == "puntos"){
			Destroy(hit.collider.gameObject);
			gameObject.Find("canvas").GetComponent(puntuaciones).sumargalleta();
		}
	}*/
	
	//---------------------------------------------------------------------------------------------------------------------------------------------


}
function Update () {
if(Input.GetKey(KeyCode.T)){
	
}
if(velocidad >= 8){
	this.GetComponent(TrailRenderer).enabled = true;
}else{
	this.GetComponent(TrailRenderer).enabled = false;
}
	if(mover == true){
		this.transform.Translate(Vector2(velocidad * Time.deltaTime, 0), Space.World);
		if(velocidad < 12.4){
			velocidad = velocidad * 1.0003;
		}
		
	}
	
	
	if(epileptic == true){
		cubos.epileptic = true;
		this.GetComponent(Renderer).material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
	}else{
		cubos.epileptic = false;
	}
	
}

function color(){
	
	if(PlayerPrefs.GetString("coloruse") == "color_developer"){
		this.GetComponent(Renderer).material = materialDeveloper;
	}
	if(PlayerPrefs.GetString("coloruse") == "color_white"){
		this.GetComponent(Renderer).material.color = Color.white;
	}
	if(PlayerPrefs.GetString("coloruse") == "color_yellow"){
		this.GetComponent(Renderer).material.color = Color.yellow;
	}
	if(PlayerPrefs.GetString("coloruse") == "color_green"){
		this.GetComponent(Renderer).material.color = Color.green;
	}
	if(PlayerPrefs.GetString("coloruse") == "color_yellow-green"){
		//this.GetComponent(Renderer).material.color = new Color(146, 255, 0);
		this.GetComponent(Renderer).material.color = Color(0.70, 1, 0.037);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_cyan"){
		this.GetComponent(Renderer).material.color = Color(0, 0.9,1);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_blue"){
		this.GetComponent(Renderer).material.color = Color(0, 0.63, 1);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_red"){
		this.GetComponent(Renderer).material.color = Color.red;
	}
	if(PlayerPrefs.GetString("coloruse") == "color_futsia"){
		this.GetComponent(Renderer).material.color = Color(1,0,0.89);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_morado"){
		this.GetComponent(Renderer).material.color = Color(0.53,0,0.76);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_naranja"){
		this.GetComponent(Renderer).material.color = Color(0.88,0.535,0.22);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_marron"){
		this.GetComponent(Renderer).material.color = new Color(0.28,0.38,0.20);
	}
	if(PlayerPrefs.GetString("coloruse") == "color_epileptic"){
		epileptic = true;
		this.GetComponent(AudioSource).Play();
	}
}

function fin(){
mover = false;
gameObject.Find("Main Camera").GetComponent(camara).fin();
gameObject.Find("canvas").GetComponent(canvas_menu).acabado();
//gameObject.Find("canvas").GetComponent(puntuaciones).fin();
}