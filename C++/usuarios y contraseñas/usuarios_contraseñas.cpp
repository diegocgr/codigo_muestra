#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include<iostream>
#include <time.h>

int main(void){
    char archivo[20]="llista.txt";

    void llegir(char x[20], char log[20], char pass[20]);
    void gravar(char x[20], char log[20], char pass[20]);
    bool validar(char x[20], char log[20]);
    bool comprobar(char pass[20]);
    void automatico(char pass[20]);
    bool validar_sesion(char x[20], char log[20], char pass[20]);

    char log[20], pass[20]="";
    char temppass[20];
    bool res_log=true, res_pass=false, res_sesion=false;
    int elec=0, salir_log=1, salir_pass=1, tipo_pass=0;

    while((elec<1)||(elec>2)){
        printf("\nQuiere entrar al programa o darse de alta y entrar?\n\t1. Entrar al programa\n\t2. Darse de alta y entrar\n");
        scanf("%i", &elec);
    }

    if(elec==2){
        if(fopen(archivo,"r")==NULL){
            fopen(archivo,"a");
        }

        while((res_log==true)&&(salir_log==1)){
            printf("\nIntroduzca su login: ");
            scanf("%s", &log);

            res_log=validar(archivo, log);

            if(res_log==true){
                printf("\n\tLo sentimos, ese nombre de usuario ya esta en uso\n");
                printf("\nQuiere salir del programa?\n\t1. No, quiero probar otra vez\n\t2. Si, quiero salir\n");
                scanf("%i", &salir_log);
            }
        }

        if(res_log==false){
            printf("\nQuiere introducir manualmente la contrasenya o prefiere que se genere automaticamente?\n\t1. Introducir manualmente\n\t2. Generacion automatica\n");
            scanf("%i", &tipo_pass);

            if(tipo_pass==1){
                printf("\nSu password debe estar compuesto por:\n 1 caracter alfanumerico (/*-+@#!$%&), 1 letra mayuscula, 3 letras minusculas y 3 numeros comprendidos entre el 0-9\n");
                while(salir_pass==1){
                    printf("\nIntroduzca su password: ");
                    scanf("%s", &pass);

                    printf("Vuelva a introducir su password: ");
                    scanf("%s", &temppass);

                    res_pass=comprobar(pass);

                    if(res_pass==true){
                        if(strcmp(pass,temppass)==0){
                            salir_pass=2;
                            printf("\nSu password ha sido validado\n");
                        }else{
                            printf("\n\tSu password cumple con los requisitos especificados, pero no coincide con su comprobacion\n");
                        }
                    }else{
                        if(strcmp(pass,temppass)!=0){
                            printf("\n\tSu password no cumple con los requisitos especificados y no coincide con su comprobacion\n");
                        }else{
                            printf("\n\tSu password no cumple con los requisitos especificados\n");
                        }
                    }
                }
            }else{
                automatico(pass);
            }

            gravar(archivo, log, pass);
            system("cls");
            printf("\nLos usuarios registrados son: \n\n");
            llegir(archivo, log, pass);
        }
    }else{
        if(fopen(archivo,"r")==NULL){
            printf("\nNo existe ningun registro. Ejecute el programa otra vez e indique:\n\n\t2. Darse de alta y entrar\n");
        }else{
            printf("\nIntroduzca su login: ");
            scanf("%s", &log);

            printf("\nIntroduzca su password: ");
            scanf("%s", &pass);

            res_sesion=validar_sesion(archivo, log, pass);

            if(res_sesion==true){
                printf("\nNOTIFICACION: ha iniciado sesion correctamente\n");
            }else{
                while(res_sesion==false){
                    printf("\nERROR:\n\tEs posible que el login introducido no exista\n\tEs posible que el password introducido sea incorrecto o no corresponda con su login\n\n\tVuelva a intentarlo, por favor...\n");
                    printf("\nIntroduzca su login: ");
                    scanf("%s", &log);

                    printf("\nIntroduzca su password: ");
                    scanf("%s", &pass);

                    res_sesion=validar_sesion(archivo, log, pass);
                }
                if(res_sesion==true){
                    printf("\nNOTIFICACION: ha iniciado sesion correctamente\n");
                }
            }
        }
    }
}

bool validar(char x[20], char log[20]){
    FILE *fichero;

    char usuario[20], contra[20];

    bool acabar_log=false, logok=false;

    fichero=fopen(x,"r");

    if (fichero==NULL){
        printf("\nError al abrir el archivo\n");
        logok=false;
    }else{
        while((fscanf(fichero,"%s %s\n", &usuario, &contra)!=EOF)&&(acabar_log!=true)){
            if(strcmp(log,usuario)==0){
                logok=true;
                acabar_log=true;
            }else{
                logok=false;
            }
        }
        fclose(fichero);
    }
    return logok;
}

bool comprobar(char pass[20]){
    bool acabar_pass=false;
    int mayu=0, minu=0, num=0, espe=0;

    for(int i=0; i<strlen(pass); i++){
        if (pass[i] >= 'A' && pass[i] <= 'Z')
            mayu++;
        else if (pass[i] >= 'a' && pass[i] <= 'z')
            minu++;
        else if (pass[i]>= '0' && pass[i]<= '9')
            num++;
        else
            espe++;
    }

    if((mayu==1)&&(minu==3)&&(num==3)&&(espe==1)){
        acabar_pass=true;
    }else{
        acabar_pass=false;
    }

    return acabar_pass;
}

void automatico(char pass[20]){
    char main_espe[11]="/*-+@#!$%&";
    char main_mayu[27]="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char main_minu[27]="abcdefghijklmnopqrstuvwxyz";
    char main_num[11]="0123456789";

    int x_espe, x_mayu, x_minu, x_num, pos[8], n=8;
    srand(time(NULL));

    x_espe=rand()%10;
    x_mayu=rand()%26;
    x_minu=rand()%26;
    x_num=rand()%10;

    for (int i=0; i<8; i++){
        pos[i] = i;
    }

    if(n>1){
        size_t i;
        for (int i = 0; i < n-1; i++){
          size_t j = i + rand() / (RAND_MAX / (n - i) + 1);
          int t = pos[j];
          pos[j] = pos[i];
          pos[i] = t;
        }
    }

    for(int i=0; i<8; i++){
        switch(i){
            case 0:
                pass[pos[i]]=main_espe[x_espe];
                break;
            case 1:
                pass[pos[i]]=main_mayu[x_mayu];
                break;
            case 2:
                pass[pos[i]]=main_minu[x_minu];
                break;
            case 3:
                x_minu=rand()%26;
                pass[pos[i]]=main_minu[x_minu];
                break;
            case 4:
                x_minu=rand()%26;
                pass[pos[i]]=main_minu[x_minu];
                break;
            case 5:
                pass[pos[i]]=main_num[x_num];
                break;
            case 6:
                x_num=rand()%10;
                pass[pos[i]]=main_num[x_num];
                break;
            case 7:
                x_num=rand()%10;
                pass[pos[i]]=main_num[x_num];
                break;
            default:
                break;
        }
    }

    printf("\nSu password es: %s\n", pass);
}

void llegir(char x[20], char log[20], char pass[20]){
    FILE *fichero;

    fichero=fopen(x,"r");

    if (fichero==NULL){
        printf("\nError al abrir archivo\n");
    }else{
        while(fscanf(fichero,"%s %s\n", &*log, &*pass)!=EOF){
            printf("%s %s\n", log, pass);
        }
        fclose(fichero);
    }
}

void gravar(char x[20], char log[20], char pass[20]){
    FILE *fichero;

    fichero=fopen(x,"a");

    if(fichero!=NULL){
        fprintf(fichero,"%s %s\n", log, pass);
        fclose(fichero);
        printf("\nNOTIFICACION: usuario creado correctamente\n");
    }else{
        printf("\nError al abrir archivo\n");
    }
}

bool validar_sesion(char x[20], char log[20], char pass[20]){
    FILE *fichero;

    char usuario[20], contra[20];

    bool acabar_log=false, logok=false, passok=false, sesionok=false;

    fichero=fopen(x,"r");

    if (fichero==NULL){
        printf("\nError al abrir el archivo\n");
        logok=false;
        passok=false;
    }else{
        while((fscanf(fichero,"%s %s\n", &usuario, &contra)!=EOF)&&(acabar_log!=true)){
            if((strcmp(log,usuario)==0)&&(strcmp(pass,contra)==0)){
                logok=true;
                passok=true;
                acabar_log=true;
            }else{
                logok=false;
                passok=false;
            }
        }
        fclose(fichero);
    }
    if((logok==true)&&(passok==true)){
        sesionok=true;
    }
    return sesionok;
}
