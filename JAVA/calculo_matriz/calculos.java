
package practica_9;


public class calculos {
    //ATRIBUTOS
    int[][] matriz = new int[3][3];
    int suma_diag_izq=0, suma_diag_der=0, suma_normal=0;
    
    //MÉTODOS
    void magia_columas(){              
        for(int i=0; i<3; i++){
            for(int j=0; j<3; j++){
                suma_normal = suma_normal + matriz[i][j];
            }
        }
        //System.out.println(suma_normal);
    }
    
    /*void magia_filas(){
        int suma=0;
                
        for(int j=0; j<3; j++){
            for(int i=0; i<3; i++){
                suma = suma + matriz[i][j];
            }
        }
        System.out.println(suma);
    }*/
    
    void magia_diagonal_Izq(){
        int n=0;
                
        for(int i=0; i<3; i++){
            for(int j=0; j<3; j++){
                if(j==n){
                    suma_diag_izq = suma_diag_izq + matriz[i][j];
                }
            }
            n++;
        }
        //System.out.println(suma_diag_izq);
    }
    
    void magia_diagonal_Der(){
        int n=2;
                
        for(int i=0; i<3; i++){
            for(int j=0; j<3; j++){
                if(j==n){
                    suma_diag_der = suma_diag_der + matriz[i][j];
                }
            }
            n--;
        }
        //System.out.println(suma_diag_der);
    }
    
    void comprobar(){
        if(suma_diag_izq==suma_diag_der){
            if(suma_diag_izq==(suma_normal/3)){
                System.out.println("\n¡La matriz ES mágica!\n");
            }
        }else{
            System.out.println("\nLa matriz NO es mágica...\n");
        }
    }
    
}
