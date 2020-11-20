
var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
//declaración de variable local diasSemana, que se trata de un array que contiene los días entre el lunes y viernes, ambos incluidos
var horasDia = []; //declaración de variable local horasDia, que se trata de un array dinámico (sin extensión indicada)

for(var cont=0; cont<diasSemana.length; cont++){
	horasDia[cont] = parseInt(prompt("Introduce el nº de horas que se imparten de módulo 6 el\n" + diasSemana[cont] + ":"));
}

/*Inicio del bucle for, donde se declara una variable local llamada cont, con valor 0.
Se indica que el bucle seguirá dando vueltas mientras cont sea menor a la cantidad de posiciones de la variable diasSemana.
Y en cada vuelta cont sumará 1 a su valor previo.*/

var suma = 0; //declaración de variable local suma, con un valor 0 de inicialización

for(var cont_suma = 0; cont_suma<diasSemana.length; cont_suma++){
	suma=suma+horasDia[cont_suma];
}

/*Inicio del bucle for, donde se declara una variable local llamada cont_suma, con valor 0.
Se indica que el bucle seguirá dando vueltas mientras cont_suma sea menor a la cantidad de posiciones de la variable diasSemana.
Y en cada vuelta cont_suma sumará 1 a su valor previo.*/

document.write("<table id='tabla'> <thead> <tr> <th id='thead'>Horario de la asignatura:</th> </tr> </thead> <tbody>");

for(var cont_filas = 0; cont_filas<diasSemana.length; cont_filas++){

	document.write("<tr> <td id='tbody'>" + diasSemana[cont_filas] + ":" + "</td> <td id='tbody'>" + horasDia[cont_filas] + " horas. </td> </tr>");
}

/*Inicio del bucle for, donde se declara una variable local llamada cont_filas, con valor 0.
Se indica que el bucle seguirá dando vueltas mientras cont_filas sea menor a la cantidad de posiciones de la variable diasSemana.
Y en cada vuelta cont_filas sumará 1 a su valor previo.*/

document.write("</tbody> <tfoot> <tr> <td id='tfoot'>Total:</td> <td id='tfoot'>" + suma + " horas a la semana.</td> </tr> </tfoot> </table>");

/*En el conjunto de document.write se va imprimiendo en pantalla una tabla con formato HTML.
En el primer doc.wri se genera la tabla y el thead, con su consiguiente fila y encabezado. También comienza el tbody.
En el segundo doc.wri se van generando filas con celdas de datos a medida que avanza el bucle for.
En el tercer doc.wri finaliza el tbody y se genera el tfoot, con sus consiguientes filas. Además, se cierra la tabla.
Hay diversos id="nombre_id", que se utilizan para dar formato CSS a la tabla. El código se encuentra dentro del HTML correspondiente, dentro de la etiqueta <style></style>.
*/
