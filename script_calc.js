//Arquivo JS
function somar(a,b) {return a + b;}
function subtrair(a,b) {return a - b;}
function multiplicar(a,b) {return a * b;}
function dividir(a,b) {
    //Verificando, Se o divisor é zero para evitar erros
    if (b==0) {
        alert("Não é possível dividir por zero!");
        return 0;
    }
    //Senão, realiza a divisão normalmente
    return a/b;
}
function exponencial(a,b) {return Math.pow(a,b);}

