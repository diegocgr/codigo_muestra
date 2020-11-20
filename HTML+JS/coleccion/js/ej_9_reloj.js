
var aCookies = document.cookie.split(";"); 
//obtenemos un array con el nombre y valor de una cookie guardados como cadena, en cada posición

var posicionSignoIgual = aCookies[0].indexOf("=");
//obtenemos la posición en la que está el signo igual

var nombreCookie = aCookies[0].substring(0, posicionSignoIgual ).replace(" ", "");
//obtenemos el nombre de la cookie, eliminando espacios

var valorCookie = aCookies[0].substring(posicionSignoIgual + 1);
//añadimos 1 'posicionSignoIgual' porque con substring() las posiciones de la cadena comienzan desde cero

document.write("<p id='mensaje' style='text-align:right; font-size:25px'>" + nombreCookie + ": " + valorCookie + "</p>");
//escribe en pantalla, en el espacio del bloque cuya etiqueta es "mensaje", la sintaxis que describe: en este caso información sobre la cookie buscada


var temporizador = setInterval(mifuncion, 1000); //llamamos a la función "mifuncion" cada 1 segundo

var tempo20 = setTimeout(finCookie, 20000); 
//llama a función "finCookie" al cabo de 20 segundos, para equiparar este tiempo con el del contador, el cual comienza en 1 segundo

function finCookie(){ //creamos una función llamada finCookie
	document.getElementById("mensaje").innerHTML = "Se ha acabado el tiempo de la cookie"; 
	//que devuelve por pantalla, en el espacio del bloque cuya etiqueta es "mensaje", la sintaxis que describe: en este caso un texto
}

contador = 1; //declaración de variable global contador, incializada en 1

function mifuncion(){ //creamos una función llamada mifuncion
	//console.log(contador);
	document.getElementById("con").innerHTML = contador; 
	//que devuelve por pantalla, en el espacio del bloque cuya etiqueta es "con", la sintaxis que describe: en este caso la variable contador (su contenido)
	if(contador >= 20){ //si contador es mayor o igual a 20
		clearInterval(temporizador); //cancela la acción iniciada mediante el setInterval de "mifuncion"
		//location.reload();
	}
	contador++; //contador aumenta en 1 su valor previo
}
