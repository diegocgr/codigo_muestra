
package practica_4;

public class billetes_monedas {
    //ATRIBUTOS
    int billetes[] = {500,200,100,50,20,10,5,2,1};
    
    //int monedas[] = {2,1};

    
    //MÉTODOS
    String calculo_billetes(int a){
        int cantidad[] = new int[billetes.length];
        int restante=a;
        
        for(int cont = 0; cont < billetes.length; cont++){
            //System.out.println(billetes[cont]);
            cantidad[cont]=restante/billetes[cont];
            //System.out.println(cantidad[cont]);
            restante=restante%billetes[cont];
            //System.out.println(restante);
            //System.out.println("Billetes de " + billetes[cont] + ": " + cantidad[cont] + "\n");
        }
        System.out.println("\nSe requieren:\n");
        
        for(int cont = 0; cont < billetes.length; cont++){
            if((cantidad[cont]>0)&&(billetes[cont]>=5)){
                System.out.println("Billetes de " + billetes[cont] + ": " + cantidad[cont]);
            }
            if((cantidad[cont]>0)&&(billetes[cont]<5)){
                System.out.println("Monedas de " + billetes[cont] + ": " + cantidad[cont]);
            }
        }
        
        return ("");
    }
}
