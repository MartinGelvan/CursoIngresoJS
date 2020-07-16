/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	

	var importeIngresado;
	var aumento;
	var importeConAumento
	var porcentaje;

	porcentaje=prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);

	importeIngresado=txtIdSueldo.value;
	importeIngresado=parseInt(importeIngresado);

	aumento=importeIngresado*10/100;

	importeConAumento=importeIngresado+aumento;

	txtIdResultado.value=importeConAumento;

	

}
