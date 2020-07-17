/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos
	var precioTres
	var suma

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert("El resultado de la suma es de: "+suma);
	
}
function Promedio () 
{
	var precioUno;
	var precioDos
	var precioTres
	var promedioTotal

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	promedioTotal=(precioUno+precioDos+precioTres)/3;

	alert("El resultado del promedio es de: "+promedioTotal);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos
	var precioTres
	var suma
	var precioConIva

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	precioConIva=suma*21/100;

	alert("El resultado de la suma es de: "+suma);
	alert("El precio con un 21% de IVA es de: "+precioConIva);


}