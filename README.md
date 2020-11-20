# Códigos de ejercicios de DAW1-2

### C++
  - **ordenar_listado_numeros:** orden ascendente o descendente de un listado de 10 números introducidos por el usuario
  
  - **operaciones_matrices:** operaciones de suma, resta y multiplicaciones (AxB o BxA) de matrices hasta 5x5 definidas por el usuario o generadas automáticamente
  
  - **calculo_determinantes:** calculo del determinante de matrices de orden 2 o 3 mediante la regla de Sarrus
  
  - **agenda de usuarios:**
    
    1. _agenda_normal_: visualización de una agenda existente (lista_git.txt) o creación de una nueva (.txt), ambas conteniendo los datos de personas previamente introducidos
    
    2. _agenda_binario_: visualización de una agenda existente (lista_git) o creación de una nueva (sin extensión), ambas conteniendo los datos de personas previamente introducidos. Como indica el nombre, su codificación es en binario
    
  - **usuarios_contraseñas:** visualización de usuarios y sus contraseñas, mediante inicio de sesión o generación de un nuevo usuario y su contraseña. La información se registra en "llista.txt"


### JAVA
  - **calculadora_billetes_monedas:** desglose en cantidades de billetes y monedas de euro de un número entero introducido por el usuario
  
  - **calculadora_varios:** a partir de un número entero introducido por el usuario, calculo de su factorial, impresión de los números pares inferiores a él e indicación de si se trata de un número primo o no
  
  - **calculadora_varios_otro:** en base a un listado de 10 números introducidos por el usuario, ésta se ordena de menor a mayor, se convierte el número mayor en hexadecimal y también se invierte
  
  - **calculo_matriz:** en base a una matriz 3x3 introducida por el usuario, determinación de si se trata de una matriz mágica o no. En matemáticas se define una matriz mágica como aquella matriz cuadrada en la que la suma de las filas, las columnas y las dos diagonales, da el mismo número. Ejemplo: matriz = {{2, 7, 6}, {9, 5, 1}, {4, 3, 8}}
  
  - **matriz_clases:** impresión del menú de un restaurante mediante un vector (menú) cuyas posiciones corresponderán -cada una- a un objeto de la clase "llista" (aperitius, primers, segons, postres, begudes, cafès)
  
  - **palindromos:** a partir de un número entero introducido por el usuario, se determina si dicho número es un palíndromo o no


### HTML+JS
  
  - **desordenar_array:** el usuario introduce 3 nombres separados por comas, los cuales se guardan en un array multidimensional (primero en mayúsculas y después en minúsculas). El programa muestra dicho array, después guarda la información en otro array (unidimensinal) y lo desordena, para finalmente mostrar el resultado. Y así poder comparar entre el array original y el cambiado
  
  - **objeto_date:** al introducir el usuario una fecha (con ciertas restricciones indicadas), se muestra por pantalla la fecha actual y la fecha introducida, ambas con el formato estándar de javascript. A continuación se muestra el día de la semana (domingo-->sábado) al que corresponde y, finalmente, los días de diferencia entre ambas fechas; teniendo en cuenta las horas transcurridas)
    
  - **objeto_string:** mediante ventanas de alerta --> Se muestra un número aleatorio entre 1 y 5. Se pide un texto (Diego, por ejemplo) y seguidamente se indica lo siguiente "La letra que hay en la posición número_aleatorio es la letra: x, que corresponde a la letra de la posición aleatorio del texto introducido. Se muestra el texto introducido al revés. Ahora, mostrándose por pantalla, irá apareciendo el texto introducido de la siguiente manera y segundo a segundo: D - Di - Die - Dieg - Diego
  
  -  **tablas_multiplicar:** en base a un número (entre 1 y 9) introducido por el usuario, se muestra la tabla de multiplicar de dicho número y los inferiores a éste, hasta llegar al 1
  
  - **coleccion:**
    - _ejercicio_3:_ encuentra el número de coincidencias de la letra introducida respecto a un texto previamente introducido, el cual debe contener más de 10 caracteres
    
    - _ejercicio_4:_ en base a un número aleatorio entre el 1 y el 9 (desconocido), el usuario debe hallar qué número es. Tiene un total de 5 intentos y el juego le indica si el número que introduce es mayor o menor que el número aleatorio
    
    - _ejercicio_5:_ el usuario debe introducir la cantidad de horas que se imparten de una unidad formativa (uf) desde el lunes hasta el viernes. Posteriormente se mostrará en una tabla las horas correspondientes a cada día de la semana, así como el total de horas a la semana
    
    - _ejercicio_6:_ el usuario introducirá una fecha y ésta se mostrará con el formato estándar de javascript, otro formato y se indicará si la fecha correspondía a un día de fin de semana o de vacaciones de verano (entre el 1 de junio y el 15 de agosto)
    
    - _ejercicio_7:_ el usuario debe introducir la cantidad de horas que se imparten de una unidad formativa (uf) desde el lunes hasta el viernes. También debe introducir la fecha de inicio y de fin de la uf. Se calculará el número de horas que se impartirán entre esas 2 fechas, respetando las horas introducidas por día
    
    - _ejercicio_9_login:_ se preguntará por el nombre de usuario, haciendo que se guarde como una cookie. Seguidamente, se mostrará en pantalla un botón con el texto "reloj", el cual -al pulsarlo- dirige hasta "reloj"
    
    - _ejercicio_9_reloj:_ es la continuación de "login". Cuando se pulse el botón, se mostrará en el centro de la pantalla un contador que irá desde el 0 hasta el 20, donde se detendrá. En la zona superior derecha, se verá el contenido de la cookie, con la información introducida anteriormente en "login". Al pasar los 20 segundos, el texto cambiará, ya que la cookie solo tiene una vida de 20 segundos
