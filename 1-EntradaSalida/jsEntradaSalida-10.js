/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var descuento;
	var importeConDescuento
	var porcentaje;

	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	importeIngresado=txtIdImporte.value;
	importeIngresado=parseInt(importeIngresado);

	descuento=importeIngresado*25/100;

	importeConDescuento=importeIngresado-descuento;

	txtIdResultado.value=importeConDescuento;

}
