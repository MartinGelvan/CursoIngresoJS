/*
Gelvan Martin
Se pide un importe y un porcentaje descuento por prompt,
 y se muestra el importe con el descuento por alert con el
 mensaje " el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"*/
//Debemos lograr tomar el importe por ID.
//transformarlo a entero (parseInt), luego mostrar el importe con un descuento del 35%, en el cuadro de texto "RESULTADO"

/*
Gelvan
se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"*/

/*
Gelvan Martin
se pide el ancho y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
mostrar el siguiente mensaje.
"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"*/


/*ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"*/




function mostrarAumento()
{
		var importeUnoIngresado;
		var importeDosIngresado;
		var suma;
		var porcentajeIngresado;
		var descuento;
		var precioConDescuento;
		var precioConIva;
		var precioFinalConIva;



		importeUnoIngresado=prompt("Ingrese el importe uno");
		importeUnoIngresado=parseInt(importeUnoIngresado);

		importeDosIngresado=prompt("Ingrese el importe dos");
		importeDosIngresado=parseInt(importeDosIngresado);

		porcentajeIngresado=prompt("Ingrese el porcentaje");
		porcentajeIngresado=parseInt(porcentajeIngresado);

		suma=importeUnoIngresado+importeDosIngresado;

		descuento=suma*porcentajeIngresado/100;

		precioConDescuento=suma-descuento;

		precioConIva=precioConDescuento*21/100;

		precioFinalConIva=precioConDescuento+precioConIva;

		alert("los productos cuestan "+importeUnoIngresado+" y "+importeDosIngresado+" , sumados son "+suma+" ,tienen un descuento de "+descuento+" pesos, el precio total con descuento es "+precioConDescuento+" ,el iva es de "+precioConIva+" y el precio final con IVA es "+precioFinalConIva);




	


}





/*var anchoIngresado;
		var largoIngresado;
		var perimetro;
		var superficie;

		anchoIngresado=prompt("ingrese el ancho");
		anchoIngresado=parseInt(anchoIngresado);

		largoIngresado=prompt("ingrese el largo");
		largoIngresado=parseInt(largoIngresado);

		superficie=anchoIngresado*largoIngresado;

		perimetro=(anchoIngresado+largoIngresado)*2;

		alert("El terreno tiene "  +anchoIngresado+ " x "+largoIngresado+ ",su perimetro total es de "+perimetro+ " y la superficie es de "+superficie);*/





/*var productoIngresado;
		var importeIngresado;
		var porcentaje;
		var calculoAumento;
		var aumento;

		productoIngresado=prompt("Ingrese el nombre del producto");

		importeIngresado=prompt("ingrese el importe");
		importeIngresado=parseInt(importeIngresado);

		porcentaje=prompt("Ingrese el porcentaje del aumento");
		porcentaje=parseInt(porcentaje);

		aumento=importeIngresado*porcentaje/100;

		calculoAumento=importeIngresado+aumento;

		alert("El producto "+productoIngresado+ " cuesta "+importeIngresado+ " sin aumento, tiene aumento de " +porcentaje+ "% y el precio final es: " +calculoAumento+  ", gracias por su compra");*/




/*var importeIngresado;
	var descuento;
	var importeConDescuento;
	var porcentaje;

	importeIngresado=prompt("Ingrese su importe");
	importeIngresado=parseInt(importeIngresado);

	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	

	descuento=(importeIngresado*porcentaje)/100;

	importeConDescuento=importeIngresado-descuento;


	alert("El importe es $"+importeIngresado+" El total de descuento es $"+descuento+" y precio final es $"+importeConDescuento+" gracias por su compra");*/
	
















/*
villegas
function mostrarAumento()
{
	var importeIngresado;
	var porcentajeIngresado;
	var porcentajeCalculado;
	var precioFinal;

	importeIngresado=prompt("Ingrese el importeIngresado ");
	importeIngresado=parseInt(importeIngresado);
	/*
	porcentajeIngresado=prompt("Ingrese el porcentajeCalculado ");
	porcentajeIngresado=parseInt(porcentajeIngresado);
	*/
	/*porcentajeIngresado=10;
	porcentajeCalculado=importeIngresado*porcentajeIngresado/100;//importeIngresado*0.9

	precioFinal=importeIngresado+porcentajeCalculado;

	alert("El importeIngresado es $"+importeIngresado+ " el total de descuento es $"+Descuento+" y el precio final es $"+precioFinal+", gracias por su compra.");
}
*/
