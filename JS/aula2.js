/*
Segundo Desafio 

Faça um programa para calcular o valor de uma viagem

Você terá 5 variaveis. Sendo elas:
    1 - Preço da gasolina;
    2 - Preço do etanol;
    3 - Tipo de combustível utilizado pelo veículo;
    4 - Gasto médio de combustível por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/


const precoGasolina = 5.43;
const precoEtanol = 4.32;
const tipoCombustivel = 'Gasolina';
const gastoKM = 10;
const distanciaKM = 100;

const litrosConsumidos = distanciaKM / gastoKM;
let valorGasto = 1;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor médio gasto na viagem é ' + valorGasto.toFixed(3));
} else if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor médio gasto na viagem é ' + valorGasto.toFixed(3));
} else {
    console.log('Tipo de Combustível não encontrado.')
}
