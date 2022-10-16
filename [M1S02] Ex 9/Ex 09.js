let resultado = " ";
let valorinicial = Number(prompt('Insira o valor inicial: '));
let raiz = Number(prompt('Insira o valor da raiz: '));
cont=0;
do{
    resultado = resultado+valorinicial+" ";
    valorinicial=valorinicial+raiz;
    cont++
}while(cont<=9)
alert(resultado);

