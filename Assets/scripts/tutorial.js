#pragma strict
	
	var texto : GameObject;
	var controlDerecho : GameObject;
	var controlIzquierdo : GameObject;
	
	private var dialogo : Array = new Array[20];
	private var pagina = 0;
	private var i = false;
	
function Start () {
	
	dialogo[0] = "Hola! Antes de nada muchas gracias por descargar este juego!";
	dialogo[1] = "Voy a explicarte un poco como se juega.";
	dialogo[2] = "El juego consiste de aguantar el mayor tiempo posible sin chocarte contra ningun obstaculo.";
	dialogo[3] = "El personaje es ese. Llamemosle Alfonso por ahora";
	dialogo[4] = "Puedes controlar a alfonso tocando la mitad derecha e izquierda de la pantalla para que se mueva en esas direcciones.";
	dialogo[5] = "Alfonso avanza automaticamente hacia delante cada vez mas rapido";
	dialogo[6] = "Puede que le sea imposible a Alfonso esquivar algunos obstaculos porque se mueva demasiado lento. Por ello >>";
	dialogo[7] = "Es necesario comprarle mejoras en la tienda. La moneda del juego son 'galletas en bola'. Puedes encontrar galletas en el juego >>";
	dialogo[8] = "si tienes comprada esa opcion en la tienda. La puedes comprar por 10 galletas en bola.";
	dialogo[9] = "Cada 10 puntos que consigas en el juego, te regalare una galleta. De ese modo cuando hayas alcanzado un total de 100 puntos podras ir a la tienda y comprar 'Habilitar galletas'";
	dialogo[10] = "Ademas, con las galletas puedes comprar colores para personalizar tu cubo aunque es preferible mejorar primero la capacidad de giro";
	dialogo[11] = "Eso es lo basico de [game.name]. Recuerda que este juego no esta todavia terminado al 100% asi que puede que encuentres algunos fallos";	
	dialogo[12] = "Que te diviertas!";
}

function Update(){
	if(pagina < 0){
		pagina = 0;
	}
	
	texto.GetComponent(Text).text = dialogo[pagina];
	if(pagina == 12){
		GameObject.Find("Canvas").transform.FindChild("siguiente").transform.GetChild(0).GetComponent(Text).text = "empezar";
	}else{
		GameObject.Find("Canvas").transform.FindChild("siguiente").transform.GetChild(0).GetComponent(Text).text = "Siguiente";
	}
	if(pagina == 13){
		print("tutorial completo");
		PlayerPrefs.SetInt("tutorial", 1);
		Application.LoadLevel("menu");
	}
}
function saltar(){
	PlayerPrefs.SetInt("tutorial", 1);
	Application.LoadLevel("menu");
}
/*function controles(){
	if(i == true){
	controlDerecho.GetComponent(Renderer).enabled = true;
	yield WaitForSeconds(1);
	i = false;
	}else{
	controlDerecho.GetComponent(Renderer).enabled = false;
	yield WaitForSeconds(1);
	i = true;
	controles();
	}
} */

function siguiente(){
	pagina = pagina + 1;
}
function anterior(){
	pagina = pagina - 1;
}
