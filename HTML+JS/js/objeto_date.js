
var fecha_usu = prompt("Introduce una fecha entre el 01-10-2001 y la fecha actual con el formato: dd-mm-aa"); //declaración de variable local fecha_usu, que pedirá con un cuadro de aviso una fecha

var fecha_usu_separada = fecha_usu.split("-"); //declaración de variable local fecha_usu_separada que separará mediante "-" la fecha fecha_usuario, formando un array
var fecha_usu_corregida = new Date("20" + fecha_usu_separada[2], fecha_usu_separada[1]-1, fecha_usu_separada[0], 1, 0, 0, 0);
//declaración de variable local fecha_usu_corregida, que genera una fecha con formato estándar tomando los valores de año, mes y día de fecha_separada. 
//Los 0 corresponden a horas, minutos, segundos y milisegundos. Aunque se haya iniciado con 1h

var fecha_hoy = new Date(); //declaración de la variable local fecha_hoy, que contiene la fecha actual (de hoy)

document.write(fecha_hoy + "<br>"); //imprimimos en pantalla fecha_hoy
document.write(fecha_usu_corregida + "<br>"); //imprimimos en pantalla fecha_usu_corregida

var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//declaración de variable local diasSemana, que se trata de un array que contiene todos los días de la semana, de domingo a sábado (de posición 0 a 6)
var mesesAnno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//declaración de variable local mesesAnno, que se trata de un array que contiene todos los meses del año, de enero a diciembre (de posición 0 a 11)

var dia_usu = fecha_usu_corregida.getDay(); //declaración de variable local dia_usu que devuelve el día de la semana (de 0-6)
var dia_usu_otro = fecha_usu_corregida.getDate(); //declaración de variable local dia_usu_otro que devuelve el día del mes (de 1-31)
var mes_usu = fecha_usu_corregida.getMonth(); //declaración de variable local mes_usu que devuelve el mes (de 0-11)
var anno_usu = fecha_usu_corregida.getFullYear(); //declaración de variable local anno_usu que devuelve el año (4 dígitos)

var dia_hoy = fecha_hoy.getDay(); //declaración de variable local dia_hoy que devuelve el día de la semana (de 0-6)
var dia_hoy_otro = fecha_hoy.getDate(); //declaración de variable local dia_hoy_otro que devuelve el día del mes (de 1-31)
var mes_hoy = fecha_hoy.getMonth(); //declaración de variable local mes_hoy que devuelve el mes (de 0-11)
var anno_hoy = fecha_hoy.getFullYear(); //declaración de variable local anno_hoy que devuelve el año (4 dígitos)


document.write(diasSemana[dia_usu] + "<br>"); //imprimimos en pantalla diasSemana[dia_usu]

document.write("La fecha introducida es: " + diasSemana[dia_usu] + ", " + dia_usu_otro + " de " + mesesAnno[mes_usu] + " de " + anno_usu + "<br>");
//imprimimos en pantalla el contenido indicado de la fecha introducida
document.write("La fecha actual es: " + diasSemana[dia_hoy] + ", " + dia_hoy_otro + " de " + mesesAnno[mes_hoy] + " de " + anno_hoy + "<br>");
//imprimimos en pantalla el contenido indicado de la fecha actual (de hoy)


var milisFechaHoy = fecha_hoy.getTime(); //obtenemos los milisegundos de la fecha actual (de hoy)
var milisFechaIntroducida = fecha_usu_corregida.getTime(); //obtenemos los milisegundos de la fecha introducida
var restaMilis = milisFechaHoy - milisFechaIntroducida; //restamos los milisegundos de ambas fechas y lo guardamos en la variable restaMilis
var dias_dif = Math.trunc(restaMilis/1000/60/60/24); //pasamos los milisegundos a dias y truncamos el valor obtenido

if(dias_dif<0){ //si dias_dif inferior a 0
	dias_dif = dias_dif * -1; //entonces dias_dif es igual a sí mismo multiplicado por -1: para convertir valores negativos en positivos
}

document.write("Hay " + dias_dif + " días de diferencia"); //imprimimos en pantalla los días de diferencia que hay

