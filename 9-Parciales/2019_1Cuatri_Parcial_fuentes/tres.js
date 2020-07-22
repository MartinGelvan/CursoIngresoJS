function mostrar()
{
	var precioIngresado;
	var descuento;
	var precioConDescuento;
	var calculoDescuento;
	var valorDescontado;

	precioIngresado=prompt("Ingrese el precio");
	precioIngresado=parseInt(precioIngresado);

	descuento=prompt("Ingrese el porcentaje");
	descuento=parseInt(descuento);

	calculoDescuento=descuento/100;

	valorDescontado=precioIngresado*calculoDescuento;

	

	precioConDescuento=precioIngresado-valorDescontado;

	
	elPrecioFinal.value=precioConDescuento;
	//elPrecioFinal.value=precioIngresado*(1-(descuento/100));



}
