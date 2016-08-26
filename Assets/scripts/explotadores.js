#pragma strict

var jugador : GameObject;
static var activar = false;
private var activar2 = true;
private var explotadores : GameObject[];

function Start(){
	jugador = GameObject.Find("jugador").transform.FindChild("PLAYER").gameObject;
}

function Update () {
	if(Vector3.Distance(jugador.transform.position, this.transform.position) <= 3.5 &&  activar2 == true){
		activar = true;
		activar2 = false;
	}
	if(activar == true){
		activar = false;
		accion();
	}
}

function accion(){
	var count : int;
	puntuaciones.fase = puntuaciones.fase + 1;
	GameObject.Find("canvas").transform.FindChild("Fases").gameObject.SetActive(true);
	GameObject.Find("canvas").transform.FindChild("Fases").transform.FindChild("FASE_TXT").GetComponent(Text).text = "Fase " + puntuaciones.fase;
	GameObject.Find("canvas").transform.FindChild("Fases").transform.FindChild("FASE_TXT").GetComponent(Animation).Play();
	GameObject.Find("canvas").transform.FindChild("Fases").transform.FindChild("fondo_fases").GetComponent(Animation).Play();
	MUSICA.fase = true;
	explotadores = GameObject.FindGameObjectsWithTag("explotador");
	print(explotadores.length);
	while(count < explotadores.length){
	explotadores[count].GetComponent(Rigidbody).isKinematic = false;
	explotadores[count].GetComponent(Rigidbody).velocity = Vector3(Random.Range(5,22),Random.Range(-7,15),Random.Range(-6,12));

	count = count + 1;
	}
	yield WaitForSeconds(2.6);
	MUSICA.fase = false;
 	Destroy(this.gameObject);
}