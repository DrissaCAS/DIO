/*
    O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    /**********************************
    /* < 18.5 = ABAIXO DO PESO
    /* Entre 18.5 e 25 = PESO NORMAL
    /* Entre 25 e 30 = ACIMA DO PESO
    /* Entre 30 e 40 = OBESO
    /* > 40 = OBESIDADE GRAVE
    /**********************************
*/

const peso = 95;
const altura = 1.56;

const imc = peso / (altura * altura);
console.log('Taxa de IMC: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 25) {
    console.log('PESO NORMAL');
} else if (imc >= 25 && imc < 30) {
    console.log('ACIMA DO PESO');
} else if (imc >= 30 && imc < 40) {
    console.log('OBESO');
} else if (imc >= 40) {
    console.log('OBESIDADE GRANDE');
}
