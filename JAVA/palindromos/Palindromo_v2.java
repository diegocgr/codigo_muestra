
package practica_7_v2;

public class Palindromo_v2 {
    //ATRIBUTOS
    long num_pal;
    int sum_resto=0;

    //MÉTODOS
    void determinacion(long x){
        long div=1, resto=5, cociente, sum=0;
        
        while(resto!=0){
            resto = x%10;
            cociente = x/10;
            if(resto!=0){
                sum_resto++;
            }
            x = cociente;
        }
        
        for(int i=0; i<sum_resto-1; i++){
            div = div * 10;
        }
        
        long pos[] = new long[sum_resto];
        
        for(int cont=0; cont<pos.length; cont++){
            pos[cont] = num_pal/div;
            num_pal = num_pal%div;
            div=div/10;
        }
        
        int otro_cont=pos.length-1;
        
        for(int cont=0; cont<(pos.length/2); cont++){
            if(pos[cont]==pos[otro_cont]){
                sum++;
            }
            otro_cont--;
        }
               
        if(sum==(pos.length/2)){
            System.out.println("\n\tEl número introducido ES un palíndromo\n");
        }else{
            System.out.println("\n\tEl número introducido NO es un palíndromo\n");
        }
    }
}
