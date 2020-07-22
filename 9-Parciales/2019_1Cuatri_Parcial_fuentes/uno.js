
function mostrar()
{
	var ladoUno;
	var ladoDos
	var ladoTres
	var perimetro;
	//var lado

	ladoUno=prompt("Ingrese el lado Uno");
	ladoUno=parseInt(ladoUno);

	ladoDos=prompt("Ingrese el lado Dos");
	ladoDos=parseInt(ladoDos);

	ladoTres=prompt("Ingrese el lado Tres");
	ladoTres=parseInt(ladoTres);



	/*lado=prompt("Ingrese el valor del lado");
	lado=parseInt(lado);*/

	//perimetro=lado*3;

	perimetro=ladoUno+ladoDos+ladoTres;

	alert("El valor del perimetro es de: "+perimetro);

}
