let sinal = prompt('qual o tipo de cálculo deseja fazer? (“+”, “-”, “*” ou “/”)');
let num1 = Number(prompt('Insira o primeiro valor que deseja calcular'));
let num2 = Number(prompt('Insira o segundo valor que deseja calcular'));
if(sinal === "+"){
    alert(`O resultado do cálculo é: `+(num1+num2));
}
else if(sinal === "-"){
    alert(`O resultado do cálculo é: `+(num1-num2));
}
else if(sinal === "*"){
    alert(`O resultado do cálculo é: `+(num1*num2));    
}
else{
    alert(`O resultado do cálculo é: `+(num1/num2));
}

