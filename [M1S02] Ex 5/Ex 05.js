let num = parseInt(prompt('Insira um numero'));
let par=0, impar=0;
for(let i=num;i>=0;i--){
    (i%2==0)?par+=1:impar+=1;
}    
alert(`Numero de pares ${par}`);
alert(`Numero de ímpares ${impar}`);