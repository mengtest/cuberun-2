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

	if(Random.Range(0, 10) >= 6){
		ramdon = Random.Range(0, 7);
		if(ramdon == 0){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[0];
		}
		if(ramdon == 1){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[1];
		}
		if(ramdon == 2){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[2];
		}
		if(ramdon == 3){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[3];
		}
		if(ramdon == 4){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[4];
		}
		if(ramdon == 5){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[5];
		}
		if(ramdon == 6){
			protip.transform.FindChild("protip").GetComponent(Text).text = consejos[6];
		}
		
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