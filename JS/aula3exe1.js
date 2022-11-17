/*
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3 

    Classificação:
    /**********************************
    /* Média < 5 = REPROVADO
    /* Média entre 5 e 7 = RECUPERAÇÃO
    /* Média > 7 = APROVADO
    /**********************************
*/

const nota1 = 6;
const nota2 = 7;
const nota3 = 2;

let media = (nota1 + nota2 + nota3) / 3;

console.log('Média do aluno: ' + media);

if (media < 5) {
    console.log('REPROVADO');
} else if (media >= 5 && media <= 7) {
    console.log('RECUPERAÇÃO');
} else if (media > 7) {
    console.log('PARABÉNS, APROVADO!');
}
