
var aleatorio = parseInt(Math.floor(Math.random() * 5)+1);
//declaración de variable local aleatorio. Convierte en int un valor redondeado hacia abajo (sin decimal) contenido entre 1-5

alert("El número aleatorio es: " + aleatorio); //cuadro de alerta con mensaje que muestra el número aleatorio

var texto = prompt("Introduce un texto:"); //declaración de variable local texto, que pedirá con un cuadro de aviso un texto

alert("La letra que hay en la posición " + aleatorio + " es la letra " + texto[aleatorio-1]); //cuadro de alerta con mensaje que mostrará el siguiente mensaje

function revertirTexto(str){ //declaración de función revertirTexto, a la que se le pasa información mediante str
    var texto_reves = ""; //declaración de variable local texto_reves, que es un texto vacío
    for(var i = str.length - 1; i >= 0; i--){ //inicio de bucle for
        texto_reves = texto_reves + str[i]; //la variable texto_reves toma el valor de sí misma más el valor de str en la posición del contador i
    }
    return texto_reves; //se devuelve la variable texto_reves
}

var resultado = revertirTexto(texto); //declaración de variable local resultado, que contiene el texto al revés

alert("El texto introducido del revés es: " + resultado); //cuadro de alerta con mensaje que muestra el resultado

var temporizador = setInterval(mifuncion, 1000);
contador = 0;
var x = texto.length;
var nombre = "";

function mifuncion(){
    console.log (contador);
    contador++;
    nombre = nombre + texto.charAt(contador-1);
    document.write(nombre + "<br>");
    if(contador>x-1) clearInterval(temporizador);
}

/*
Declaración de la variable global interval que corresponde a una función que se llama cada segundo (mediante un intervalo)
Se va mostrando el contenido del array texto de 1 posición en 1 posición, dando un salto de línea por cada vez que muestra una posición
*/

