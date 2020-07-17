/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno
	var anchoTerreno
	var cantidadAlambre

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	cantidadAlambre=(largoTerreno*6)+(anchoTerreno*6);

	alert("La cantidad de alambre a comprar es de: "+cantidadAlambre);

}
function Circulo () 
{
	var radio
	var cantidadAlambreCircunferencia

	radio=txtIdRadio.value;
	radio=parseInt(radio);

	cantidadAlambreCircunferencia=radio*3.14*6; //(2*3.14*radio)*3

	alert("La cantidad de alambre a comprar es de: "+cantidadAlambreCircunferencia);
}
function Materiales () 
{
	var largoTerrenoDos
	var anchoTerrenoDos
	var cantidadCemento
	var cantidadCal
	var areaTerreno

	largoTerrenoDos=txtIdLargo.value;
	largoTerrenoDos=parseInt(largoTerrenoDos);

	anchoTerrenoDos=txtIdAncho.value;
	anchoTerrenoDos=parseInt(anchoTerrenoDos);

	areaTerreno=largoTerrenoDos*anchoTerrenoDos;

	cantidadCemento=areaTerreno*2;

	cantidadCal=areaTerreno*3;

	alert("La cantidad de bolsas de cemento es de: "+cantidadCemento);
	alert("La cantidad de bolsas de cal es de: "+cantidadCal);


	
}