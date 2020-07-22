/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var cantidadDeAlambre

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);


	perimetro=(anchoTerreno+largoTerreno)*2;
	cantidadDeAlambre=perimetro*3;


	alert("La cantidad de alambre que hay que comprar es de: "+cantidadDeAlambre);

}
function Circulo () 
{
	var tomaRadio;
    var calculoAlambre;
   
    tomaRadio=txtIdRadio.value;
    tomaRadio=parseInt(tomaRadio);
   
    calculoAlambre=tomaRadio*3.14*6; //3*3.14*3
    
    alert("En las 3 vueltas de alambre se necesita comprar "+calculoAlambre+ " metros de alambre");
	

}


function Materiales () 
{
	 var Largo;
    var Ancho;
    var Cemento;
    var Cal;
    var superficie;

    Cemento=2;

    Cal=3;
    

    Largo=txtIdLargo.value;
    Largo=parseInt(Largo);
    Ancho=txtIdAncho.value;
    Ancho=parseInt(Ancho);

    superficie=Largo*Ancho;

    Cal=superficie*3;
    Cemento=superficie*2;


    

    /*Cal=(tomaLargo+tomaAncho)*3;
    Cemento=(tomaLargo+tomaAncho)*2;*/

     alert("Las bolsas que vamos a necesitar para cubir el "+Ancho+" de ancho "+ "y para el  "+Largo+ " del largo del terreno,se van a necesitar "+Cemento+" bolsas de cemento y tambien "+Cal +" bolsas de cal ");


}