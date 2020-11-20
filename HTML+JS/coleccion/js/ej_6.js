
var fecha_usuario = prompt("Introduce una fecha con el formato:\n dd/mm/aaaa"); //declaración de variable local fecha_usuario, que pedirá con un cuadro de aviso una fecha

var fecha_separada = fecha_usuario.split("/"); //declaración de variable local fecha_separada que separará mediante "/" la fecha fecha_usuario, formando un array

var fecha_corregida = new Date(fecha_separada[2], fecha_separada[1]-1, fecha_separada[0], 0, 0, 0, 0);
//declaración de variable local fecha_corregida, que genera una fecha con formato estándar tomando los valores de año, mes y día de fecha_separada. Los 0 corresponden a horas, minutos, segundos y milisegundos
document.write(fecha_corregida + " - "); //imprimimos en pantalla fecha_corregida y un guión a continuación

var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//declaración de variable local diasSemana, que se trata de un array que contiene todos los días de la semana, de domingo a sábado (de posición 0 a 6)
var mesesAnno = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//declaración de variable local mesesAnno, que se trata de un array que contiene todos los meses del año, de enero a diciembre (de posición 0 a 11)

var dia_ok = fecha_corregida.getDay(); //declaración de variable local dia_ok que devuelve el día de la semana (de 0-6)
var dia_ok_otro = fecha_corregida.getDate(); //declaración de variable local dia_ok_otro que devuelve el día del mes (de 1-31)
var mes_ok = fecha_corregida.getMonth(); //declaración de variable local mes_ok que devuelve el mes (de 0-11)
var anno_ok = fecha_corregida.getFullYear(); //declaración de variable local anno_ok que devuelve el año (4 dígitos)

document.write(diasSemana[dia_ok] + "<br>"); //imprimimos en pantalla la posición de diasSemana correspondiente a dia_ok

document.write(diasSemana[dia_ok] + ", " + dia_ok_otro + " de " + mesesAnno[mes_ok] + " de " + anno_ok + " - "); //imprimimos en pantalla el contenido indicado

if((dia_ok==6)||(dia_ok==0)){ //si dia_ok es igual en contenido/valor a 6 o dia_ok es igual en contenido/valor a 0
	document.write("SÍ es fin de semana - "); //imprimimos en pantalla "SÍ es fin de semana"
}else{ //por el contrario
	document.write("NO es fin de semana - "); //imprimimos en pantalla "NO es fin de semana"
}

if(((dia_ok_otro>=1)&&(mes_ok>=6))&&((dia_ok_otro<=15)&&(mes_ok<=8))){
//si (dia_ok_otro es mayor o igual a 1 Y mes_ok es mayor o igual a 6) Y (dia_ok_otro es menor o igual a 15 Y mes_ok es menor o igual a 8)
	document.write("SÍ vacaciones"); //imprimimos en pantalla "SÍ vacaciones"
}else{ //por el contrario
	document.write("NO vacaciones"); //imprimimos en pantalla "NO vacaciones"
}