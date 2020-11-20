
package restaurant_v2;

import java.util.Scanner;

public class Restaurant_v2 {

    public static void main(String[] args) {
        int a;
        
        Scanner escanear = new Scanner(System.in);    
        Llista_v2[] menu = new Llista_v2[6];
        
        for(int i=0 ; i<6; i++){
            for(int j=0 ; j<3; j++){
                menu[i] = new Llista_v2();
                if(j==0){
                    System.out.println("\n" + menu[i].menu_apartados[i] + ":");
                }
                System.out.println("\t- " + menu[i].opciones[i][j]);
            }
        }
    }
}

