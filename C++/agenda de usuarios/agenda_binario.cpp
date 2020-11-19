#include <stdio.h>
#include <stdlib.h>

int main(void){
    int elec, leer, exis, leer_desp;
    char archivo[20];
    void llegir(char x[20]);
    void gravar(char x[20]);

    while((elec<1)||(elec>2)){
        printf("\nQuiere trabajar con una agenda existente o quisiera crear una nueva?\n\t1. Agenda existente\n\t2. Agenda nueva\n");
        scanf("%i", &elec);
    }

    if(elec==2){
        printf("\nDime el nombre del archivo: ");
        scanf("%s",&archivo);

        gravar(archivo);

        system("cls");

        while((leer<1)||(leer>2)){
            printf("Le gustaria visualizar los datos introducidos?\n\t1. Si\n\t2. No\n");
            scanf("%i", &leer);
        }

        if(leer==1){
            system("cls");
            llegir(archivo);
        }

    }else{
        printf("\nDime el nombre del archivo: ");
        scanf("%s",&archivo);

        while((exis<1)||(exis>2)){
            printf("\nQuiere leer la agenda o quiere anyadir mas registros?\n\t1. Leer agenda\n\t2. Anyadir mas registros\n");
            scanf("%i", &exis);
        }

        if(exis==1){
            system("cls");
            llegir(archivo);
        }else{
            gravar(archivo);

            while((leer_desp<1)||(leer_desp>2)){
                printf("\nLe gustaria visualizar los datos introducidos?\n\t1. Si\n\t2. No\n");
                scanf("%i", &leer_desp);
            }

            if(leer_desp==1){
                system("cls");
                llegir(archivo);
            }
        }
    }
}

void llegir(char x[20]){
    FILE *fichero;
    int conti;

    struct data{
        int dia=0;
        int mes=0;
        int any=0;
    };

    struct fitxa{
        char nom[20];
        char cognom1[20];
        char cognom2[20];
        char direccio[30];
        int telefon=0;
        struct data fecha;
    };

    fitxa persona;

    printf("Los datos guardados son: \n\n");

    fichero=fopen(x,"rb");

    if (fichero==NULL){
        printf("Error al abrir archivo en modo lectura\n");
    }else{
        while(fread(&persona,sizeof(persona),1,fichero)!=0){

            printf("Nombre: %s\nPrimer apellido: %s\nSegundo apellido: %s\nDireccion: %s\nTelefono: %i\nFecha nacimiento: %i/%i/%i\n\n",
            persona.nom, persona.cognom1, persona.cognom2, persona.direccio, persona.telefon, persona.fecha.dia, persona.fecha.mes, persona.fecha.any);

        }
        fclose(fichero);
    }
}

void gravar(char x[20]){
    FILE *fichero;
    int conti;

    struct data{
        int dia=0;
        int mes=0;
        int any=0;
    };

    struct fitxa{
        char nom[20];
        char cognom1[20];
        char cognom2[20];
        char direccio[30];
        int telefon=0;
        struct data fecha;
    };

    fitxa persona;

    fichero=fopen(x,"ab");

    if(fichero!=NULL){
        printf("\nIntroduzca los datos de la persona: \n\n");
        while(conti!=2){

            printf("Introduzca el nombre: ");
            scanf("%s",&persona.nom);

            printf("Introduzca el primer apellido: ");
            scanf("%s",&persona.cognom1);

            printf("Introduzca el segundo apellido: ");
            scanf("%s",&persona.cognom2);

            printf("Introduzca su direccion: ");
            scanf("%s",&persona.direccio);

            while((persona.telefon<=0)||(persona.telefon>999999999)){
                printf("Introduzca su telefono (9 cifras): ");
                scanf("%i",&persona.telefon);
            }

           while((persona.fecha.dia<1)||(persona.fecha.dia>31)){
                printf("Introduzca su dia de nacimiento: ");
                scanf("%i",&persona.fecha.dia);
            }

            while((persona.fecha.mes<1)||(persona.fecha.mes>12)){
                printf("Introduzca su mes de nacimiento: ");
                scanf("%i",&persona.fecha.mes);
            }

            while((persona.fecha.any<1900)||(persona.fecha.any>2020)){
                printf("Introduzca su anyo de nacimiento: ");
                scanf("%i",&persona.fecha.any);
            }

            fwrite(&persona,sizeof(persona),1,fichero);

            persona.telefon=0;
            persona.fecha.dia=0;
            persona.fecha.mes=0;
            persona.fecha.any=0;

            conti=0;

            while((conti<1)||(conti>2)){
                printf("\nQuiere introducir los datos de otra persona?\n\t1. Si\n\t2. No\n");
                scanf("%i", &conti);
            }

            if(conti==1){
                system("cls");
                printf("Introduzca los datos de la persona: \n\n");
            }
        }
        fclose(fichero);

    }else{
        printf("Error al abrir archivo en modo escritura\n");
    }
}
