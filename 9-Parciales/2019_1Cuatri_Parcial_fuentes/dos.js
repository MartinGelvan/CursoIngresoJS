function mostrar()
{
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var sumaPesos;
  var promedioPesos;

  nombreUno=prompt("Ingrese nombre uno");

  nombreDos=prompt("Ingrese nombre dos");

  pesoUno=prompt("Ingrese peso uno");
  pesoUno=parseInt(pesoUno);

  pesoDos=prompt("Ingrese peso dos");
  pesoDos=parseInt(pesoDos);

  sumaPesos=pesoUno+pesoDos;

  promedioPesos=sumaPesos/2;

  alert("Ustedes se llaman "+
  	nombreUno+ " y "+
  	nombreDos+",sus pesos son de "+
  	pesoUno+" y "+pesoDos+" kg"+", la suma de ambos pesos son de "+
  	sumaPesos+" kg"+" y el promedio de ambos pesos es de "+
  	promedioPesos);

  



}
