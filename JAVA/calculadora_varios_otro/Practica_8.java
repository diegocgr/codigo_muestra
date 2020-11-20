
package practica_8;

import java.util.Scanner;

public class Practica_8 {

    public static void main(String[] args) {
        Scanner escanear = new Scanner(System.in);
        calculos apta = new calculos();
        
        System.out.println("\nIntroduzca 10 números:");
        for(int cont=0; cont<10; cont++) {
            apta.numeros[cont] = escanear.nextInt();
            while((apta.numeros[cont]<0)||(apta.numeros[cont]>65000)){
                System.out.println("Por favor, introduzca un número comprendido entre 0 y 65000: ");
                apta.numeros[cont] = escanear.nextInt();
            }
        }
        
        System.out.println("\n***LISTA ORDENADA DE MENOR A MAYOR***");
        apta.ordenar();
        int cont;
        for(cont=0; cont<10; cont++) {
            System.out.print(apta.numeros[cont] + " ");
        }
        
        System.out.println("\n\n***CONVERSIÓN A HEXADECIMAL***");
        System.out.print("El número " + apta.numeros[cont-1] + " en hexadecimal es: ");
        apta.hexadecimal();
        
        System.out.println("\n\n***INVERSIÓN DEL NÚMERO***");
        apta.invertir();
        System.out.print("\n\n");
    }
    
}
