
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//declaración de variable local diasSemana, que se trata de un array que contiene los días entre el domingo y sábado, ambos incluidos
var horasDia = [0, , , , , , 0]; //declaración de variable local horasDia, con inicialización en 0 para la posición 0 y 6, correspondientes a domingo y sábado

for(var cont=1; cont<diasSemana.length-1; cont++){
	horasDia[cont] = parseInt(prompt("Introduce el nº de horas que se imparten de módulo 6 el\n" + diasSemana[cont] + ":"));
}

/*Inicio del bucle for, donde se declara una variable local llamada cont, con valor 1, ya que queremos empezar desde el lunes
Se indica que el bucle seguirá dando vueltas mientras cont sea menor a la cantidad de posiciones de la variable diasSemana-1, ya que queremos terminar el viernes
Y en cada vuelta cont sumará 1 a su valor previo.*/

var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//declaración de variable local diasSemana, que se trata de un array que contiene todos los días de la semana, de domingo a sábado (de posición 0 a 6)
var mesesAnno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//declaración de variable local mesesAnno, que se trata de un array que contiene todos los meses del año, de enero a diciembre (de posición 0 a 11)

var fecha_inicio = prompt("Introduce la fecha de INICIO del módulo 6 con formato:\n dd/mm/aaaa"); //declaración de variable local fecha_inicio, que pedirá con un cuadro de aviso una fecha
var fecha_fin = prompt("Introduce la fecha de FINALIZACIÓN del módulo 6 con formato:\n dd/mm/aaaa"); //declaración de variable local fecha_fin, que pedirá con un cuadro de aviso una fecha

var fecha_inicio_corr = fecha_inicio.split("/", 3); //declaración de variable local fecha_inicio_corr que separará mediante "/" la fecha fecha_inicio, formando un array limitado a 3 posiciones
var fecha_fin_corr = fecha_fin.split("/", 3); //declaración de variable local fecha_fin_corr que separará mediante "/" la fecha fecha_fin formando un array limitado a 3 posiciones

var fecha_inicio_sep = new Date(fecha_inicio_corr[2], fecha_inicio_corr[1]-1, fecha_inicio_corr[0], 0, 0, 0, 0);
//declaración de variable local fecha_inicio_sep, que genera una fecha con formato estándar tomando los valores de año, mes y día de fecha_inicio_corr. Los 0 corresponden a horas, minutos, segundos y milisegundos
var fecha_fin_sep = new Date(fecha_fin_corr[2], fecha_fin_corr[1]-1, fecha_fin_corr[0], 0, 0, 0, 0);
//declaración de variable local fecha_fin_sep, que genera una fecha con formato estándar tomando los valores de año, mes y día de fecha_fin_corr. Los 0 corresponden a horas, minutos, segundos y milisegundos

var ini_dia = fecha_inicio_sep.getDay(); //declaración de variable local ini_dia que devuelve el día de la semana (de 0-6)
var ini_dia_otro = fecha_inicio_sep.getDate(); //declaración de variable local ini_dia_otro que devuelve el día del mes (de 1-31)
var ini_mes = fecha_inicio_sep.getMonth(); //declaración de variable local ini_mes que devuelve el mes (de 0-11)
var ini_anno = fecha_inicio_sep.getFullYear(); //declaración de variable local ini_anno que devuelve el año (4 dígitos)

var fin_dia = fecha_fin_sep.getDay(); //declaración de variable local fin_dia que devuelve el día de la semana (de 0-6)
var fin_dia_otro = fecha_fin_sep.getDate(); //declaración de variable local fin_dia_otro que devuelve el día del mes (de 1-31)
var fin_mes = fecha_fin_sep.getMonth(); //declaración de variable local fin_mes que devuelve el mes (de 0-11)
var fin_anno = fecha_fin_sep.getFullYear(); //declaración de variable local fin_anno que devuelve el año (4 dígitos)

document.write("La fecha de inicio de la UF es: " + "<strong>" + diasSemana[ini_dia] + " " + ini_dia_otro + " de " + mesesAnno[ini_mes] + " de " + ini_anno + "</strong>" + "<br>");
//imprimimos en pantalla el contenido indicado de la fecha de inicio
document.write("La fecha de finalización de la UF es: " + "<strong>" + diasSemana[fin_dia] + " " + fin_dia_otro + " de " + mesesAnno[fin_mes] + " de " + fin_anno + "</strong>" + "<br>");
//imprimimos en pantalla el contenido indicado de la fecha de finalización

var totem_fecha_inicio = new Date(fecha_inicio_sep); //declaración de variable local totem_fecha_inicio como nueva fecha, tomando como referencia (copia) a fecha_inicio_sep

var horas_uf = 0; //declaración de variable local horas_uf, con un valor 0 de inicialización

while(totem_fecha_inicio<=fecha_fin_sep){ //mientras totem_fecha_inicio sea menor o igual en contenido/valor a fecha_fin_sep

	var totem_dia = totem_fecha_inicio.getDay(); //declaración de variable local totem_dia, que toma el valor del día de la semana (de 0-6) de totem_fecha_inicio

	var horas_uf=horas_uf+horasDia[totem_dia]; 
	//declaración de variable local horas_uf, que sumará en base al valor que se encuentre en la posición marcada por totem_dia (de 0-6) en horasDia

	var otra_fecha = totem_fecha_inicio.setDate(totem_fecha_inicio.getDate()+1);
	//declaración de variable local otra_fecha, que tomará el valor ajustado del día del mes (de 1-31) en base al día del mes + 1 de totem_fecha_inicio
	totem_fecha_inicio = new Date(otra_fecha); //declaración de variable local totem_fecha_inicio como nueva fecha, tomando como referencia (copia) a otra_fecha
}

document.write("El número de horas que se impartirán en la UF es de " + "<strong>" + horas_uf + "</strong>");
//imprimimos en pantalla el contenido indicado el número de horas que se impartirán en ese período de tiempo