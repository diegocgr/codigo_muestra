#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void){
    int i, j; ///i para filas, j para col's (columnas)
    int Atabla[5][5];
    int Btabla[5][5];
    int Rtabla[5][5];
    int mult[1][1]={0}, suma[1][1]={0};

    int Afil, Acol, Bfil, Bcol, x, Aelec, Belec, ope;
    int Afn=0, Acn=0, Bfn=0, Bcn=0;
    int multf=0, multc=0, sumaf=0, sumac=0;
    int Rfil, Rcol;
    srand(time(NULL));


    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            Atabla[i][j]=0;
        }
    }

    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            Btabla[i][j]=0;
        }
    }

    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            Rtabla[i][j]=0;
        }
    }

    ///----------Matriz A----------

    printf("Introduzca el numero de filas de la matriz A: ");
    scanf("%i", &Afil);

    if(Afil<1 || Afil>5){
        while(Afil<1 || Afil>5){
            printf("\n\tPor favor, introducir un valor de FILA entre 1 y 5\n");
            printf("\nIntroduzca el numero de filas de la matriz A: ", Afil);
            scanf("%i", &Afil);
        }
    }

    printf("\nIntroduzca el numero de columnas de la matriz A: ");
    scanf("%i", &Acol);

    if(Acol<1 || Acol>5){
        while(Acol<1 || Acol>5){
            printf("\n\tPor favor, introducir un valor de COLUMNA entre 1 y 5\n");
            printf("\nIntroduzca el numero de columnas de la matriz A: ", Acol);
            scanf("%i", &Acol);
        }
    }

    system("cls");

    printf("La matriz A se compone de %i filas y %i columnas\n", Afil, Acol);

    printf("\nQuieres inicializar la matriz A de manera:\n\t1. Manual\n\t2. Automatica\n");
    scanf("%i", &Aelec);

    printf("\n");

    if(Aelec==1){
        for(i=0; i<Afil; i++){
            for(j=0; j<Acol; j++){
                printf("Introduce un valor en fila %i columna %i: ", i, j);
                scanf("%i", &Atabla[i][j]);
            }
        }
    }
    if(Aelec==2){
        for(i=0; i<Afil; i++){
            for(j=0; j<Acol; j++){
                x=rand()%21-10;
                Atabla[i][j]=x;
            }
        }
    }

    system("cls");

    ///----------Matriz B----------

    printf("Introduzca el numero de filas de la matriz B: ");
    scanf("%i", &Bfil);

    if(Bfil<1 || Bfil>5){
        while(Bfil<1 || Bfil>5){
            printf("\n\tPor favor, introducir un valor de FILA entre 1 y 5\n");
            printf("\nIntroduzca el numero de filas de la matriz B: ", Bfil);
            scanf("%i", &Bfil);
        }
    }

    printf("\nIntroduzca el numero de columnas de la matriz B: ");
    scanf("%i", &Bcol);

    if(Bcol<1 || Bcol>5){
        while(Bcol<1 || Bcol>5){
            printf("\n\tPor favor, introducir un valor de COLUMNA entre 1 y 5\n");
            printf("\nIntroduzca el numero de columnas de la matriz B: ", Bcol);
            scanf("%i", &Bcol);
        }
    }

    system("cls");

    printf("La matriz B se compone de %i filas y %i columnas\n", Bfil, Bcol);

    printf("\nQuieres inicializar la matriz B de manera:\n\t1. Manual\n\t2. Automatica\n");
    scanf("%i", &Belec);

    printf("\n");

    if(Belec==1){
        for(i=0; i<Bfil; i++){
            for(j=0; j<Bcol; j++){
                printf("Introduce un valor en fila %i columna %i: ", i, j);
                scanf("%i", &Btabla[i][j]);
            }
        }
    }
    if(Belec==2){
        for(i=0; i<Bfil; i++){
            for(j=0; j<Bcol; j++){
                x=rand()%21-10;
                Btabla[i][j]=x;
            }
        }
    }

    system("cls");

    ///----------Operaciones----------

    printf("Matriz A: \n");

    for(i=0; i<Afil; i++){
        for(j=0; j<Acol; j++){
            printf("%i\t", Atabla[i][j]);
        }
        printf("\n");
    }

    printf("\n\n");

    printf("Matriz B: \n");

    for(i=0; i<Bfil; i++){
        for(j=0; j<Bcol; j++){
            printf("%i\t", Btabla[i][j]);
        }
        printf("\n");
    }

    printf("\n\nQue operacion quieres realizar con las matrices?\n\t1. Sumar las matrices\n\t2. Restar las matrices\n\t3. Multiplicar las matrices AxB\n\t4. Multiplicar las matrices BxA\n");
    scanf("%i", &ope);

    switch (ope){
    case 1:
        if(Afil==Bfil && Acol==Bcol){
            for(i=0; i<5; i++){
                for(j=0; j<5; j++){
                    Rtabla[i][j]=Atabla[Afn][Acn]+Btabla[Bfn][Bcn];
                    Acn=Acn+1;
                    Bcn=Bcn+1;
                }
                Acn=0;
                Bcn=0;
                Afn=Afn+1;
                Bfn=Bfn+1;
            }
            printf("\nSuma de matrices:\n");
            for(i=0; i<Afil; i++){
                for(j=0; j<Acol; j++){
                    printf("%i\t", Rtabla[i][j]);
                }
                printf("\n");
            }
        }else{
            printf("\nERROR: no es posible realizar la operacion\n");
            printf("\n\tMOTIVO: tanto el numero de filas como el de columas no es equivalente entre las matrices\n");
        }
        break;

    case 2:
        if(Afil==Bfil && Acol==Bcol){
            for(i=0; i<5; i++){
                for(j=0; j<5; j++){
                    Rtabla[i][j]=Atabla[Afn][Acn]-Btabla[Bfn][Bcn];
                    Acn=Acn+1;
                    Bcn=Bcn+1;
                }
                Acn=0;
                Bcn=0;
                Afn=Afn+1;
                Bfn=Bfn+1;
            }
            printf("\nResta de matrices:\n");
            for(i=0; i<Afil; i++){
                for(j=0; j<Acol; j++){
                    printf("%i\t", Rtabla[i][j]);
                }
                printf("\n");
            }
        }else{
            printf("\nERROR: no es posible realizar la operacion\n");
            printf("\n\tMOTIVO: tanto el numero de filas como el de columas no es equivalente entre las matrices\n");
        }
        break;

    case 3:
        if(Acol==Bfil){
            for(i=0; i<5; i++){
                for(j=0; j<5; j++){
                    while(Bfn<5){
                        mult[multf][multc]=Atabla[Afn][Acn]*Btabla[Bfn][Bcn];
                        suma[sumaf][sumac]=suma[sumaf][sumac]+mult[multf][multc];
                        Acn=Acn+1;
                        Bfn=Bfn+1;
                    }
                    Rtabla[i][j]=suma[sumaf][sumac];
                    mult[multf][multc]={0};
                    suma[sumaf][sumac]={0};
                    Acn=0;
                    Bfn=0;
                    Bcn=Bcn+1;
                }
                Bcn=0;
                Afn=Afn+1;
            }
            printf("\nMultiplicacion de AxB:\n");
            Rfil=Afil;
            Rcol=Bcol;
            for(i=0; i<Rfil; i++){
                for(j=0; j<Rcol; j++){
                    printf("%i\t", Rtabla[i][j]);
                }
                printf("\n");
            }
        }else{
            printf("\nERROR: no es posible realizar la operacion\n");
            printf("\n\tMOTIVO: el numero de columnas de la matriz A no es equivalente al numero de filas de la matriz B\n");
        }
        break;

    case 4:
        if(Bcol==Afil){
            for(i=0; i<5; i++){
                for(j=0; j<5; j++){
                    while(Afn<5){
                        mult[multf][multc]=Btabla[Bfn][Bcn]*Atabla[Afn][Acn];
                        suma[sumaf][sumac]=suma[sumaf][sumac]+mult[multf][multc];
                        Bcn=Bcn+1;
                        Afn=Afn+1;
                    }
                    Rtabla[i][j]=suma[sumaf][sumac];
                    mult[multf][multc]={0};
                    suma[sumaf][sumac]={0};
                    Bcn=0;
                    Afn=0;
                    Acn=Acn+1;
                }
                Acn=0;
                Bfn=Bfn+1;
            }
            printf("\nMultiplicacion de BxA:\n");
            Rfil=Bfil;
            Rcol=Acol;
            for(i=0; i<Rfil; i++){
                for(j=0; j<Rcol; j++){
                    printf("%i\t", Rtabla[i][j]);
                }
                printf("\n");
            }
        }else{
            printf("\nERROR: no es posible realizar la operacion\n");
            printf("\n\tMOTIVO: el numero de columnas de la matriz B no es equivalente al numero de filas de la matriz A\n");
        }
        break;

    default:
        printf("\nNo ha sido posible realizar ninguna operacion\n");
        break;
    }
}
