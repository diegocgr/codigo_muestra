
package testcalculadora;

import java.util.Scanner;

public class TestCalculadora {

    public static void main(String[] args) {
        int num;
        
        Calculadora apta = new Calculadora();
        Scanner escanear = new Scanner(System.in);
        System.out.print("Introduce un número entero positivo: ");
        num = escanear.nextInt();
        
        System.out.println("\n*** FACTORIAL de " + num + " ***");
        apta.factorial(num);
        
        System.out.println("\n*** NÚMEROS PARES INFERIORES a " + num + " ***");
        apta.paresInf(num);
        
        System.out.println("\n*** NÚMERO PRIMO ***");
        apta.primer(num);
    }
}
