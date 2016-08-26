#pragma strict

var protip : GameObject;
var consejos : Array = new Array[10];
var ramdon : int;

function Start () {
	consejos[0] = "Puedes pulsar cada 5 minutos el boton 'Gana 10 galletas' del menu para conseguir 10 galletas.";
	consejos[1] = "¿Cansado del mismo color? Prueba a comprar otros colores para tu cubo en la tienda.";
	consejos[2] = "Si memorizas partes del mapa te sera mas facil avanzar.";
	consejos[3] = "Tu cubo mide extactamente 1 metro de ancho, por lo cual puedes entrar por todos los huecos que veas.";
	consejos[4] = "Algunas galletas en bola te daran mas de 1 galleta. Normalmente son las que mas brillan";
	consejos[5] = "Cuando alcanzas suficiente velocidad tu cubo empezara a crear una estela tras de si.";
	consejos[6] = "Si en el menu te aparece un boton con letras azules y lo pulsas, ganaras 10 galletas tras ver el anuncio.";
	consejos[7] = "Empezaras a ver particulas cuando tu velocidad sea suficientemente alta. Puedes desactivarlas en menu > ajustes.";
	consejos[8] = "¿TIENES ALGUN CODIGO PROMOCIONAL? METELO EN LA CONSOLA EN AJUSTES>ENTER DEBUG_MODE!";
	consejos[9] = "¿Eres YouTuber? Si promocionas el juego puedes obtener tu propio cubo personalizado!";
	consejos[10] = "¿Sabias que los betatesters de CubeRun tienen una SKIN especial? Pueden acceder metiendo un codigo secreto.";
	 
	if(Random.Range(0, 10) >= 3){
		ramdon = Random.Range(0, 11);
		
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[ramdon];
		
		
		yield WaitForSeconds(1.2);
		protip.GetComponent(Animation).Play();
		quitar();
	}else{
		Destroy(this.gameObject);
	}
}
function quitar(){
	yield WaitForSeconds(7);
	protip.GetComponent(Animation).Play("protip_out");
}
function Update () {

}