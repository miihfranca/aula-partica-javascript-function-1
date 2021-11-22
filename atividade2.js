//1)Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
//a)Calcular a média do aluno.
//b)Se a média for maior ou igual a 7, retornar "Aprovado!";
//c)Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
//d)Se a média for menor que 5, retornar "Reprovado!".
//e)Chamar a função e exibir no console o resultado.

let statusMedia = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if(media >= 7) {
        return 'Aprovado';
    }
    else if(media >= 5 && media < 7) {
        return 'Recuperação';
    }
    else if(media < 5) {
        return 'Reprovado!';
    }
    else {
        return 'Algo deu errado tente novamente';
    }
}
console.log(statusMedia(5.5,10));

//2)Criar uma função anônima que calcula a tabuada de 3.
//a)Chamar a função e exibir no console o resultado.

let tabuada = function() {
    let num = 3;
    for(var i = 1; i <=10; i++) {
        let resultado = 3 * i;
        console.log(num + ' x ' + i + ' = ' + resultado);
    }
}
console.log(tabuada());

//3)Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
//a)Chamar a função e exibir no console o resultado.

let idade = (anoNascimento) => {
    if(anoNascimento < 2003) {
        return 'Você já é maior de idade!';
    }
    else {
        return 'Você ainda é menor de idade!';
    }
}
console.log(idade(2005));