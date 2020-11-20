
var mensaje = prompt("Introduce un texto:"); //declaración de variable local mensaje, que pedirá con un cuadro de aviso un texto
while(mensaje.length<10){ //mientras la longitud de caracteres de la variable mensaje sea menor a 10
	var mensaje = prompt("el texto debe contener como mínimo 10 caracteres, introduce un texto"); //se seguirá pidiendo el valor de la variable mensaje, mediante un cuadro de aviso
}

var letra = prompt("Introduce una letra"); //declaración de variable local letra, que pedirá con un cuadro de aviso una letra

var cont_coin = 0; //declaración de variable local cont_coin, con un valor 0 de inicialización

for(var cont=0; cont<mensaje.length; cont++){

	/*Inicio del bucle for, donde se declara una variable local llamada cont, con valor 0.
	Se indica que el bucle seguirá dando vueltas mientras cont sea menor a la longitud de caracteres de la variable mensaje.
	Y en cada vuelta cont sumará 1 a su valor previo.*/

	if(mensaje[cont]==letra){ //si mensaje en la posición de cont es igual en contenido/valor a letra
		cont_coin++; //el contador "cont_coin" sumará 1 a su valor previo
	}
}

alert("El texto " + mensaje + " tiene " + cont_coin + " coincidencias con la letra " + letra); 
//se mostrará un cuadro de alerta donde se diga cuántas coincidencias con la letra anteriormente
//indicada hay con el texto que escribimos para la variable mensaje