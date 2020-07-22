
//Gelvan Martin Ejercicio 6

function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	
if(edadIngresada<13)
	{
		alert("niño");
	}
	else
	{
		if(edadIngresada<18)
	{
		alert("adolescente");
	}
	else
	{
		alert("es mayor");
	}

	}





	/*if(edadIngresada<13)
	{
		alert("niño");
	}
if(edadIngresada>12 && edadIngresada<18)
{
	alert("adolescente");
}
if(edadIngresada>17)
{
	alert("es mayor");
}*/


}//FIN DE LA FUNCIÓN