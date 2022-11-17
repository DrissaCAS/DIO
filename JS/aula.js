
/*
Primeiro Desafio 

Faça um programa para calcular o valor de uma viagem

Você terá 3 variaveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivel = 5.43;
const gastoKM = 13;
const distanciaKM = 100;

const litrosConsumidos = distanciaKM / gastoKM;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log('O valor médio gasto na viagem é ' + valorGasto.toFixed(3));