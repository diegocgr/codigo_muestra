
package practica_4;

import java.util.Scanner;

public class Practica_4 {

    public static void main(String[] args) {
        int x;
        String a;
        
        billetes_monedas dinero = new billetes_monedas();
        Scanner escanear = new Scanner(System.in);
        System.out.println("Introduce una cantidad de dinero: ");
        x = escanear.nextInt();
        a = dinero.calculo_billetes(x);
        System.out.println(a);
    } 
}
