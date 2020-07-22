
//Gelvan Martin Ejercicio 3

function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("eres mayor");
	}
	else
	{
		alert("eres menor");
	}


	/*if(edadIngresada>17)
	{
		alert("eres mayor");
	}

	if(edadIngresada<18)
	{
		alert("eres menor");
	}*/

}//FIN DE LA FUNCIÓN












/*function mostrar()
{
	var edadInresada;
	edadInresada=txtIdEdad.value;			
	edadInresada=parseInt(edadInresada);
	var valorDeVerdad;

	valorDeVerdad=edadInresada<15
	valorDeVerdad=edadInresada==15
	valorDeVerdad=edadInresada<15

	valorDeVerdad=edadInresada*2;

	if (valorDeVerdad) {
		alert("ingreso");
	}

	// ingresa
	if(true)
	{
		alert("ingreso");
	}
	if(1)
	{
		alert("ingreso");
	}

	if("true")
	{
		alert("true");
	}
	if("1")
	{
		alert("1");
	}
	if("false")
	{
		alert("false");
	}
	if("0")
	{
		alert("0");
	}
	if("lalala")
	{
		alert("lalala");
	}
	//no ingresa
	if(false)
	{
		alert("ingreso");
	}
	
	if(0)
	{
		alert("ingreso");
	}




	if(edadInresada>17)
	{
		alert("mayor");
	}
	else
	{
		alert("menor");
	}//if(edadInresada>17)


/*
// uso de cpu de mas
	if(edadInresada>17)
	{
		alert("mayor");
	}
	if(edadInresada<18)
	{
		alert("menor");
	}
*/

