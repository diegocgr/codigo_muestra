
package practica_7_v2;

import java.util.Scanner;

public class Practica_7_v2 {

    public static void main(String[] args) {
        long num;
        
        Palindromo_v2 apta = new Palindromo_v2();
        
        Scanner escanear = new Scanner(System.in);
        System.out.print("Introduce un número entero positivo de las cifras que considere: ");
        num = escanear.nextLong();
        
        apta.num_pal = num;
        apta.determinacion(num);
    }
    
}
