
function generarCookies(){ //creamos una función llamada generarCookies

	var cname = "usuario"; //declaración de variable local cname, inicializada con "usuario"
	var cvalue = prompt("Introduzca su nombre de usuario:"); //declaración de variable local cvalue, que pedirá con un cuadro de aviso un nombre de usuario

	var d = new Date(); //declaración de variable local d como nueva fecha
	d.setTime(d.getTime()+20000);
	//la variable d tomará el valor ajustado del tiempo en milisegundos (desde 1970) en base a la fecha de sí misma + 20000 milisegundos (20 segundos)

	var expires = "expires="+ d.toUTCString(); 
	//declaración de la variable expires, que convertirá la variable d (una fecha) en una cadena, utilizando la zona horaria UTC.
	document.cookie = cname + "=" + cvalue + ";" + expires + ";";
	/*
	declaración de que las cookies equivaldrán a ese conjunto de información
	cname = usuario
	cvalue = el nombre del usuario
	expires = tiempo en el que expirará la cookie, equivalente al tiempo de acceso a la web + 20 segundos
	*/
}

generarCookies(); //se llama a la función "generarCookies"



