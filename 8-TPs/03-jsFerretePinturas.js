/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit
	var temperaturaCentigrados

	temperaturaFahrenheit=txtIdTemperatura.value;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

	temperaturaCentigrados=(temperaturaFahrenheit-32)/1.8;

	alert("La temperatura a centigrados es de: "+temperaturaCentigrados);
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit
	var temperaturaCentigrados

	temperaturaCentigrados=txtIdTemperatura.value;
	temperaturaCentigrados=parseInt(temperaturaCentigrados);

	temperaturaFahrenheit=(temperaturaCentigrados*1.8+32);

	alert("La temperatura a fahrenheit es de: "+temperaturaFahrenheit);
}
