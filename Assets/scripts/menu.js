#pragma strict

var titulo : GameObject;
var playbtn : GameObject;
var shopbtn : GameObject;
var setingbtn : GameObject;
var tiendaGroup : GameObject;
var ajustesGroup : GameObject;

function seting(){
	if(ajustesGroup.active == false){
		titulo.GetComponent(Animation).Play("title_out");
		playbtn.GetComponent(Animation).Play();
		shopbtn.GetComponent(Animation).Play("shop_out");
		setingbtn.GetComponent(Animation).Play();
		ajustesGroup.SetActive(true);
	}else{
		titulo.GetComponent(Animation).Play("title_in");
		playbtn.GetComponent(Animation).Play("play_in");
		shopbtn.GetComponent(Animation).Play("shop_in");
		setingbtn.GetComponent(Animation).Play("seting_in");
		ajustesGroup.SetActive(false);
	}
}

function shop(){
	if(tiendaGroup.active == false){
		titulo.GetComponent(Animation).Play("title_out");
		playbtn.GetComponent(Animation).Play();
		shopbtn.GetComponent(Animation).Play("shop_shop");
		setingbtn.GetComponent(Animation).Play();
		tiendaGroup.SetActive(true);
	}else{
		titulo.GetComponent(Animation).Play("title_in");
		playbtn.GetComponent(Animation).Play("play_in");
		shopbtn.GetComponent(Animation).Play("shop_shop_exit");
		setingbtn.GetComponent(Animation).Play("seting_in");
		tiendaGroup.SetActive(false);
	}
}