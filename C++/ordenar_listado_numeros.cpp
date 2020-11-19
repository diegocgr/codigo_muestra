#include <stdio.h>
#include <stdlib.h>

int main(void){
    int lista[10];
    int n, option, aux, cont;

    printf("***PROGRAMA PARA ORDENAR 10 NUMEROS ENTEROS DE MENOR A MAYOR O AL REVES***\n\n");

    for(n=0; n<10; n++){
        printf("Introduzca un numero entero (%i): ", n+1);
        scanf("%i", &lista[n]);
    }

    printf("\nComo quiere ordenar estos numeros?\n\n");
    printf("\t1. De mayor a menor\n\n");
    printf("\t2. De menor a mayor\n\n");
    scanf("%i", &option);

    /*system("cls");*/

    if(option<1 || option>2){
        while(option<1 || option>2){
            printf("\nComo quiere ordenar estos numeros?\n\n");
            printf("\t1. De mayor a menor\n\n");
            printf("\t2. De menor a mayor\n\n");
            scanf("%i", &option);
        }
    }

    if(option==1){
        for(i=0; i<10; i++){
            for(j=i+1; j<10; j++){
                if(lista[i]<lista[j]){
                    aux=lista[i];
                    lista[i]=lista[j];
                    lista[j]=aux;
                }
            }
        }
        printf("\n\nNUMEROS ORDENADOS DE MANERA DESCENDENTE:\n");
        for(cont=0; cont<10; cont++){
            printf("%i  ", lista[cont]);
        }
        printf("\n\n");
    }else if(option==2){
        for(i=0; i<10; i++){
            for(j=i+1; j<10; j++){
                if(lista[i]>lista[j]){
                    aux=lista[i];
                    lista[i]=lista[j];
                    lista[j]=aux;
                }
            }
        }
        printf("\n\nNUMEROS ORDENADOS DE MANERA ASCENDENTE:\n");
        for(cont=0; cont<10; cont++){
            printf("%i  ", lista[cont]);
        }
        printf("\n\n");
    }
}
