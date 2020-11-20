
var nombres_user = prompt("Introduce 3 nombres separados por comas. Ejemplo:\nEdmundo, Diego, César");
var nombres_separados = nombres_user.split(",");

nombres = [ ["", ""], ["", ""], ["", ""] ];

for(var i=0; i<3; i++){
	for(var j=0; j<2; j++){
		if(j==0){
			nombres[i][j] = nombres_separados[i].toUpperCase();
		}else if(j==1){
			nombres[i][j] = nombres_separados[i].toLowerCase();
		}
	}
}

document.write("Array ordenado: <br>");

for(var i=0; i<3; i++){
	for(var j=0; j<2; j++){
		if(i==2 && j==1){
			document.write(nombres[i][j]);
		}else{
			document.write(nombres[i][j] + ", ");
		}
	}
}

function fila_random(){
  return Math.floor(Math.random() * 6);
}

function desordenar(nombres){
	nombresDesordenados = ["", "", "", "", "", ""];
	cont = 0;
	aux = 0;

	for(var i=0; i<3; i++){
		for(var j=0; j<2; j++){
			nombresDesordenados[cont] = nombres[i][j]
			cont++;
		}
	}

	for(var i=0; i<6; i++){
		f = fila_random();
		aux = nombresDesordenados[f];
		nombresDesordenados[f] = nombresDesordenados[i];
		nombresDesordenados[i] = aux;
	}

	return nombresDesordenados;
}

document.write("<br><br>Array desordenado: <br>");
document.write(desordenar(nombres));

