let num = parseInt(prompt('Insira um numero'));
let sum=0;
while(num != -1){
    sum = sum +num;
    num=parseInt(prompt('Insira um numero'));
}
alert(sum);