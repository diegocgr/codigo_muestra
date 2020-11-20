
var pregunta = prompt("Escribe un número del 1 al 9:");
/*
	Declaración de una variable local llamada pregunta, que será el resultado capturado por el prompt.
	Prompt lo que hará será mostrar un cuadro de aviso que preguntará al usuario un número entre el 1 y el 9, ambos incluidos.
*/

var oportunidades = 5; //declaracíón de la variable local llamada oportunidades, con un valor de número entero equivalente a 5.


while(oportunidades>=1){ //inicio de bucle, donde mientras oportunidades sea igual o mayor a 1, se seguirán dando vueltas.

	if(pregunta>=1 && pregunta<=9){ //si el valor de la variable pregunta es mayor o igual a 1 y es menor o igual a 9, entonces

			var oportunidades = 0; //se declara la variable local oportunidades con un valor de 0
			var contador_general = parseInt(pregunta); //y se contempla que la variable contador_general (recién declarada) tenga el valor de la variable pregunta, pero en número entero mediante parseInt.

			while(contador_general>0){ //inicio de bucle, donde mientras contador_general sea mayor a 0

				document.write("La tabla del " + pregunta + " es:" + "<br>"); //se escribirá en pantalla mediante un document.write el mensaje indicado, recogiendo el valor de la variable pregunta en medio de la frase.

				for(var contador_tabla=1; contador_tabla<10; contador_tabla++){

				/*
					Inicio del bucle for, donde se declara una variable local llamada contador_tabla, con valor 1.
					Se indica que el bucle seguirá dando vueltas mientras contador_tabla sea menor a 10.
					Y en cada vuelta contador_tabla sumará 1 a su valor previo.
				*/

					var resultado = parseInt(pregunta) * parseInt(contador_tabla); //declaración de la variable local resultado, que será igual a la multiplicación entre las variables pregunta y contador_tabla, ambas en en número entero mediante parseInt.
					document.write(pregunta + " x " + contador_tabla + " = " + resultado + "<br>"); //se escribirá en pantalla mediante un document.write el mensaje indicado, que es la multiplicación que acabamos de hacer.
				}

				document.write("<br>"); //al salir del bucle for, se "escribirá"" en pantalla mediante un document.write un <br>, que no se verá como tal en pantalla, pero sí se verá reflejado como un salto de línea.

				var contador_tabla = 1 //reiniciaremos el valor de contador_tabla a 1, ya que fue incrementando durante el bucle for.

				var pregunta = pregunta - 1; //le daremos un nuevo valor a la variable pregunta, que restará 1 a su valor previo en cada vuelta del bucle while.

				var contador_general = contador_general - 1; //le daremos un nuevo valor a la variable contador_general, que restará 1 a su valor previo en cada vuelta del bucle while.
			}

			/*
				Por lo tanto, si el número introducido está entre 1 y 9, el bucle while con la variable oportunidades finalizará, ya que le daremos un valor de 0.
				Con el bucle while con la variable contador_general iremos mostrando en pantalla la tabla de multiplicar de cada número, empezando por el indicado por el usuario con el prompt de la variable pregunta.
				Con el bucle for con la variable contador_tabla iremos calculando y mostrando en pantalla el resultado de cada multiplicación.
				A medida que avanza el bucle while con la variable contador_general, iremos mostrando la tabla de multiplicar del número inmediatamente menor al anterior, hasta llegar a la tabla de multiplicar del número 1.
				Es entonces cuando saldríamos de los bucles y el programa finalizaría.
			*/

	}else{ //si por el contrario, el valor de la variable pregunta NO es mayor o igual a 1 y es menor o igual a 9, entonces

		if((oportunidades==1)&&(isNaN(pregunta)===true)){ //si la variable oportunidades tiene un valor de 1 y el texto introducido para la variable pregunta (mediante prompt) ES no numérico
			var oportunidades = 0; //se declara la variable local oportunidades con un valor de 0
			alert("demasiados errores"); //y se mostrará un cuadro de alerta con un mensaje específico, indicando la finalización del programa.
		}else if(isNaN(pregunta)===true){ //si por el contrario tan solo el texto introducido para la variable pregunta (mediante prompt) ES no numérico
			var oportunidades = oportunidades -1; //le daremos un nuevo valor a la variable oportunidades, que restará 1 a su valor previo en cada vuelta del bucle while.
			var pregunta = parseInt(prompt("No es un número, te quedan " + oportunidades + " oportunidades, introduce un número")); //se pedirá nuevamente un texto para la variable pregunta (mediante prompt), pero en número entero mediante parseInt.

		}

		if((oportunidades==1)&&(pregunta<1 || pregunta>9)){ //si la variable oportunidades tiene un valor de 1 y el texto introducido para la variable pregunta NO es mayor o igual a 1 o es menor o igual a 9
			var oportunidades = 0; //se declara la variable local oportunidades con un valor de 0
			alert("demasiados errores"); //y se mostrará un cuadro de alerta con un mensaje específico, indicando la finalización del programa.
		}else if(pregunta<1 || pregunta>9){ //si por el contrario tan solo el texto introducido para la variable pregunta (mediante prompt) NO es mayor o igual a 1 o es menor o igual a 9
			var oportunidades = oportunidades -1; //le daremos un nuevo valor a la variable oportunidades, que restará 1 a su valor previo en cada vuelta del bucle while.
			var pregunta = parseInt(prompt("Es un número pero no está entre el 1 y el 9, te quedan " + oportunidades + " oportunidades, introduce un número")); //se pedirá nuevamente un texto para la variable pregunta (mediante prompt), pero en número entero mediante parseInt.
		}
	}
}

