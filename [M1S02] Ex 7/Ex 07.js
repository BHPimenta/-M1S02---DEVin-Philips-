let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth() + 1);
console.log(dia);
console.log(mes);

if(mes==12&&dia>=22||mes==1||mes==2||mes==3&&dia<=21){
    alert('Verão');
}

else if(mes==3&&dia>=22||mes==4||mes==5||mes==6&&dia<=21){
    alert('Outono');
}

else if(mes==6&&dia>=22||mes==7||mes==8||mes==9&&dia<=21){
    alert('Inverno');
}

else{
    alert('Primavera');
}