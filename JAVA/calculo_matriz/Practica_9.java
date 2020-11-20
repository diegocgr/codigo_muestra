
package practica_9;

import java.util.Scanner;

public class Practica_9 {

    public static void main(String[] args) {
        Scanner escanear = new Scanner(System.in);
        calculos apta = new calculos();
        
        for(int i=0; i<3; i++){
            for(int j=0; j<3; j++){
                System.out.print("Introduzca el valor de la posición " + i + " " + j + ": ");
                apta.matriz[i][j] = escanear.nextInt();
                System.out.println("");
            }
        }
        
        for(int i=0; i<3; i++){
            for(int j=0; j<3; j++){
                System.out.print(apta.matriz[i][j] + "\t");
            }
            System.out.println("");
        }
        
        apta.magia_columas();
        apta.magia_diagonal_Izq();
        apta.magia_diagonal_Der();
        apta.comprobar();
    }
    
}
