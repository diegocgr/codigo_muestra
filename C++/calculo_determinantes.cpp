#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include<iostream>
#include<math.h>

int main(void){
    int i, j; ///i para filas, j para col's (columnas)
    int orddet, det;
    int Afil, Acol;
    int *puntero=&orddet;

    int Atabla[3][3];

    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            Atabla[i][j]=0;
        }
    }

    void genera(int (*vector)[3], int *porden);
    void mostra(int (*vector)[3], int *porden);
    int calcula(int (*vector)[3], int *porden);


    ///----------Peticion orden determinante----------

    printf("Introduzca el orden del determinante (entre 2 y 3): ");
    scanf("%i", &orddet);

    if(orddet<2 || orddet>3){
        while(orddet<2 || orddet>3){
            printf("\n\tPor favor, introducir un orden de DETERMINANTE entre 2 y 3\n");
            printf("\nIntroduzca el orden del determinante: ", orddet);
            scanf("%i", &orddet);
        }
    }

    if(orddet==2){
        Afil=2;
        Acol=2;
    }else{
        Afil=3;
        Acol=3;
    }

    ///GENERAR TABLA
    genera(Atabla, puntero);

    ///MOSTRAR MATRIZ
    mostra(Atabla, puntero);

    ///CALCULAR EL DETERMINANTE
    det=calcula(Atabla, puntero);
    printf("\nEl resultado del determinante es = %i\n", det);
}


///----------Funcion "genera"----------

void genera(int (*vector)[3], int *porden){
    int i, j, x, Aelec, cantfil, cantcol;
    srand(time(NULL));

    printf("\nQuieres inicializar el determinante de manera:\n\t1. Manual\n\t2. Automatica\n");
    scanf("%i", &Aelec);

    printf("\n");

    if(*porden==2){
        cantfil=2;
        cantcol=2;
    }else{
        cantfil=3;
        cantcol=3;
    }

    if(Aelec==1){
        for(i=0; i<cantfil; i++){
            for(j=0; j<cantcol; j++){
                printf("Introduce un valor en fila %i columna %i: ", i, j);
                scanf("%i", &vector[i][j]);
            }
        }
    }else{
        for(i=0; i<cantfil; i++){
            for(j=0; j<cantcol; j++){
                x=rand()%21-10;
                vector[i][j]=x;
            }
        }
    }

    system("cls");
}


///----------Funcion "mostra"----------

void mostra(int (*vector)[3], int *porden){
    int i, j, numfil, numcol;

    if(*porden==2){
        numfil=2;
        numcol=2;
    }else{
        numfil=3;
        numcol=3;
    }

    printf("Aspecto del determinante: \n");

    for(i=0; i<numfil; i++){
        for(j=0; j<numcol; j++){
            printf("%i\t", vector[i][j]);
        }
        printf("\n");
    }
}


///----------Funcion "calcula"----------

int calcula(int (*vector)[3], int *porden){
    int i, j, res=0, subi=0, subj=0, cont=0, mult=1, limfil=1, limcol=1, inifil=0, inicol=0, subcont=0, contizq=0, contder=0;
    int lista[6], contlista=0;
    int sumaizq=0, sumader=0;

    if(*porden==2){
        res=(vector[0][0]*vector[1][1])-(vector[1][0]*vector[0][1]);
    }else{
        int prueba[5][3];

        for(i=0; i<5; i++){
            for(j=0; j<3; j++){
                prueba[i][j]=0;
            }
        }

        for(i=0; i<3; i++){
            for(j=0; j<3; j++){
                prueba[i][j]=vector[i][j];
            }
        }

        for(i=3; i<5; i++){
            for(j=0; j<3; j++){
                prueba[i][j]=vector[subi][subj];
                subj++;
            }
            subj=0;
            subi++;
        }

        ///ZONA IZQUIERDA

        while(contizq<3){
            while(subcont<3){
                for(i=inifil; i<inifil+1; i++){
                    for(j=inicol; j<inicol+1; j++){
                        mult=mult*prueba[i][j];
                    }
                }
                inifil++;
                inicol++;
                subcont++;
            }
            subcont=0;
            lista[contlista]=mult;
            contlista++;
            mult=1;
            inifil=inifil-2;
            inicol=0;
            contizq++;
        }

        ///INTERZONA

        subcont=0;
        inifil=0;
        inicol=2;
        mult=1;
        contlista=3;

        ///ZONA DERECHA

        while(contder<3){
            while(subcont<3){
                for(i=inifil; i<inifil+1; i++){
                    for(j=inicol; j<inicol+1; j++){
                        mult=mult*prueba[i][j];
                    }
                }
                inifil++;
                inicol=inicol-1;
                subcont++;
            }
            subcont=0;
            lista[contlista]=mult;
            contlista++;
            mult=1;
            inifil=inifil-2;
            inicol=2;
            contder++;
        }

        contlista=0;

        printf("\nDeterminante = (");

        for(i=0; i<3; i++){
            if(i<2){
                printf("%i + ", lista[contlista]);
                sumaizq=sumaizq+lista[contlista];
                contlista++;
            }else{
                printf("%i", lista[contlista]);
                sumaizq=sumaizq+lista[contlista];
                contlista++;
            }
        }

        printf(") - (");

        for(j=0; j<3; j++){
            if(j<2){
                printf("%i + ", lista[contlista]);
                sumader=sumader+lista[contlista];
                contlista++;
            }else{
                printf("%i", lista[contlista]);
                sumader=sumader+lista[contlista];
                contlista++;
            }
        }

        printf(")");

        printf("\n");

        res=sumaizq-sumader;

    } ///fin del "else"

    return(res);
}
