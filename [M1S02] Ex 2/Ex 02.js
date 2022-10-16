let idade = prompt('Determine a idade');
idade = parseInt(idade);
while(idade<0){
    idade = prompt('Determine uma idade válida');
    idade = parseInt(idade);
}
if(idade<=15){
    alert('Jovem');
}
else if(idade>=16&&idade<=64){
    alert('Adulto');
}
else{
    alert('Idoso');
}
