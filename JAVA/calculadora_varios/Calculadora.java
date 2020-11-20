
package testcalculadora;

public class Calculadora {
    
    //MÉTODOS
    
    void factorial(int x){
        int mult, n=x;
        long fact=1;
        
        if(x==0){
            System.out.println(x + "! = " + 1);
        }else if(x==1){
            System.out.println(x + "! = " + 1);
        }else{
            for(int cont=0; cont<n; cont++){
                fact=fact*x;
                x=x-1;
                //System.out.print(x);
            }
            System.out.println(n + "! = " + fact);
        }
        
        //return("aaa");
    }
    
    void paresInf(int x){
        int par, n=x;
        
        if(x==0){
            System.out.println("No hay ningún número par inferior a 0");
        }else if(x==1){
            System.out.println("Números pares inferiores: 0");
        }else{
            System.out.print("Números pares inferiores: ");
            for(int cont=n; cont!=0; cont--){
                x=x-1;
                par=x%2;
                if(par==0){
                    System.out.print(x + " ");
                }
            }
            System.out.print("\n");
        }
    }
    
    void primer(int x){
        int calc, prim=0;
        
        for(int cont=1; cont<=x; cont++){
            calc=x%cont;
            if(calc==0){
                prim++;
            }
        }
        if(prim==2){
            System.out.println("El número " + x + " ES primo");
        }else{
            System.out.println("El número " + x + " NO es primo");
        }
    }
}
