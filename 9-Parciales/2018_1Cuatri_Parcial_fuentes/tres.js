function mostrar()
{
	var precioIngresado;
	var descuento;
	var cuentaDescuento;
	var precioDescontado;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio");
	precioIngresado=parseInt(precioIngresado);

	descuento=prompt("Ingrese el porciento de descuento");

	cuentaDescuento=descuento/100;

	precioDescontado=precioIngresado*cuentaDescuento;

	precioFinal=precioIngresado-precioDescontado;

	elPrecioFinal.value=precioFinal;



}
