
var aleatorio = parseInt(Math.floor(Math.random() * 9)+1); 
//declaración de variable local aleatorio. Convierte en int un valor redondeado hacia abajo (sin decimal) contenido entre 1-9

var numero = parseInt(prompt("Juguemos a acertar un número. Tienes 5 oportunidades… Introduce un número entre 1 y 9:"));
//declaración de variable local numero. Convierte en int el valor introducido mediante un cuadro de aviso

var oportunidades = 5; //declaración de variable local oportunidades, con un valor 5 de inicialización

while(oportunidades>1){ //mientras oportunidades sea mayor a 1
	while((numero<1)||(numero>9)){ //mientras numero sea menor de 1 o mayor de 9
		var numero = parseInt(prompt("Has introducido un número que NO está entre el 1 y el 9. Por favor, introduce otro número:")); //se volverá a pedir el valor de numero
	}
	if(numero>aleatorio){ //si numero es mayor a aleatorio
		oportunidades--; //oportunidades restará 1 a su valor previo
		var numero = parseInt(prompt("¡Fallaste! El número que quieres acertar es MENOR\n Te quedan " + oportunidades + " intentos... ¡vuelve a intentarlo!")); //se volverá a pedir el valor de numero
	}else if(numero<aleatorio){ //si por el contrario, numero es menor a aleatorio
		oportunidades--; //oportunidades también restará 1 a su valor previo
		var numero = parseInt(prompt("¡Fallaste! El número que quieres acertar es MAYOR\n Te quedan " + oportunidades + " intentos... ¡vuelve a intentarlo!")); //y se volverá a pedir el valor de numero
	}
	if(numero==aleatorio){ //si numero es igual en contenido/valor a aleatorio
		oportunidades=0; //oportunidades tomará valor 0, terminando así el bucle while
		alert("Felicidades, ¡has acertado!"); //cuadro de alerta con mensaje que concluye el programa
	}
}