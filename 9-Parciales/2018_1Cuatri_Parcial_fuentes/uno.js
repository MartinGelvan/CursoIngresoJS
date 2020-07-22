
function mostrar()
{
	var ladoIngresado;
	var anchoIngresado;
	var perimetro;


	ladoIngresado=prompt("Ingrese el lado");
	ladoIngresado=parseInt(ladoIngresado);

	anchoIngresado=prompt("Ingrese el ancho");
	anchoIngresado=parseInt(anchoIngresado);

	perimetro=(ladoIngresado+anchoIngresado)*2;

	alert("El perimetro del rectangulo es de "+perimetro);



}
