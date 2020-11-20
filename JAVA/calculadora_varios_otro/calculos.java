
package practica_8;

public class calculos {
    //ATRIBUTOS
    int[] numeros = new int[10];
    
    //MÉTODOS
    void ordenar(){
        int aux, n=numeros.length;
        
        for(int cont_pos=0; cont_pos<n-1; cont_pos++){
            for(int cont_int=0; cont_int<n-cont_pos-1; cont_int++){
                if(numeros[cont_int]>numeros[cont_int+1]){
                    aux = numeros[cont_int];
                    numeros[cont_int] = numeros[cont_int+1];
                    numeros[cont_int+1] = aux;
                }
            }
        }
    }
    
    void hexadecimal(){
        int[] hexa = new int[4];
        int div=5, resto=5, cont=1;
        int a=numeros[numeros.length-1];
        
        while(div>0){
            resto = a%16;
            hexa[hexa.length-cont] = resto;
            //System.out.print(resto + " ");
            div = a/16;
            a = div;
            cont++;
        }
        
        int[] post = new int[]{10,11,12,13,14,15};
        char[] post_letra = new char[]{'A','B','C','D','E','F'};
        
        for(int i=0; i<hexa.length; i++){
            if(hexa[i]>=10){
                for(int j=0; j<post.length; j++){
                    if(hexa[i]==post[j]){
                        System.out.print(post_letra[j]);
                    }
                }
            }else{
                if(hexa[i]==0){
                    System.out.print("");
                }else{
                    System.out.print(hexa[i]);
                }
            }
        }
    }
    
    void invertir(){
        int x=numeros[numeros.length-1];
        int pos[] = new int[5];
        int div=10000, sum=0, n=1;
        
        while(div>0){
            pos[pos.length-n] = x/div;
            x = x%div;
            div=div/10;
            n++;
        }
        
        for(int cont=0; cont<pos.length; cont++) {
            if(pos[cont]==0){
                System.out.print("");
            }else{
                System.out.print(pos[cont]);
            }
        }
    }
}
