/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando opreco normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir pra ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    /**********************************
    /* 1 - à vista débito, recebe 10% de desconto
    /* 2 - à vista no Dinheiro ou PIX, recebe 15% de desconto
    /* 3 - em 2 vezespreco normal de etiqueta, sem juros
    /* 4 - acima de 2 vezespreco normal de etiqueta mais 10%
    /**********************************
*/

const preco = 100;
const tipoPagamento = 2;

let valorPago = 0;

if (tipoPagamento === 1) {
    valorPago = preco - (preco * (10/100));
    console.log('Pagamento à vista, no Débito');
    console.log('Valor da etiqueta: R$ ' + preco);
    console.log('Valor pago: R$ ' + valorPago);
    console.log('Valor do desconto: R$ ' + (preco - valorPago));
} else if (tipoPagamento === 2) {
    valorPago =preco - (preco * (15/100));
    console.log('Pagamento à vista, em Dinheiro ou PIX');
    console.log('Valor da etiqueta: R$ ' + preco);
    console.log('Valor pago: R$ ' + valorPago);
    console.log('Valor do desconto: R$ ' + (preco - valorPago));
} else if (tipoPagamento === 3) {
    valorPago = preco;
    console.log('Pagamento no Crédito em até 2 vezes');
    console.log('Valor da etiqueta: R$ ' + preco);
    console.log('Valor pago: R$ ' + valorPago);
} else if (tipoPagamento === 4) {
    valorPago = preco + (preco * (10/100));
    console.log('Pagamento no Crédito em mais de 2 vezes');
    console.log('Valor da etiqueta: R$ ' + preco);
    console.log('Valor pago: R$ ' + valorPago);
    console.log('Valor do juros: R$ ' + (valorPago - preco));
}
