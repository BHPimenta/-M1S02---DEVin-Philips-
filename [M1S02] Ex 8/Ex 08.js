let contprimo=0, cont=0;
for(let i=1;i<=1000;i++){
        for(let j=1;j<=i;j++){
            if(i%j==0){
                cont++;
                
            }
        }
        if(cont==2){
            contprimo++;
            console.log(i);
        }
        cont=0; 
} 
console.log("A quantidade de números primos nesse intervalo é "+contprimo+".");