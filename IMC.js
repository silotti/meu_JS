//Vamos calcular o IMC usando JavaScript:
const imc = (peso, altura) => peso / (altura * altura);
const situacao = (valor_imc) => {
    if(valor_imc < 18.5) 
        return "Abaixo do peso";
    else if (valor_imc < 25)
        return "Peso Ideal(Parabéns)";
    else if (valor_imc < 30)
        return "Levemente acima do peso";
    else if (valor_imc < 35)
        return "Obesidade Grau I";
    else if (valor_imc < 40)
        return "Obesidade Grau II (severa)";
    else 
        return "Obesidade Grau III (Mórbida)";
}
