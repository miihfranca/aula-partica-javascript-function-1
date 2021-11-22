//1)Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
//a)Chamar a função e exibir o resultado no console.

let multiplicar = (num1, num2) => {
    let calculo = num1 * num2;
    return 'O resultado da Multiplicação é ' + calculo;
}
console.log(multiplicar(5,2));

//2)Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
//a)Chamar a função e exibir o resultado no console.

let maiorValor = (valor1, valor2, valor3) => {
    let resultado = Math.max(valor1, valor2, valor3);
    return 'O maior numero é ' + resultado;
}
console.log(maiorValor(3,6,9));

//3)Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
//a)Chamar a função e exibir no console o resultado.

let par_impar = (valor) => {
    if(Number.isInteger(valor)){
        if(valor % 2 == 0){
            return  true;
        }
        else{
            return false;
        }
    }
}
console.log(par_impar(10) ? "par." :"ímpar.");