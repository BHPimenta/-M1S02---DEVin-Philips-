let x = parseInt(prompt('Determine um número inteiro'));
let resultado = '';
for(let i=0; i<=10;i++){
    resultado=resultado+(`${x} x ${i} = `+(x*i))+"\n";
}
alert(resultado);
