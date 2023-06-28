/* Escreva uma função que receba dois parametros, sendo o primeiro, um Number, e o segundo uma String --
 Esta função deve construir um array contendo a sequencia de fibbonacci com o numero de itens igual ao number recebido.
 Considere como o item inicial da sequencia o numero 1.
 A string recebida será par, impar ou primo

 Returne um array contendo os valores correspondentes a string recebida.
 Exemplo: Number = 10, string = "par"
 Retorno: impar[].
 Number[] = Array<Number>*/

/*function fibo (number,string){
let arr = [1,1]
 for ( let i = 1; i < number ; i++){
     let number = (arr.length - 1) + (arr.length - 2);
    arr.push(i);}
*/

function createFibo(number) { //usamos a para criar a fibo
    let arr = [1,1]
    for (let i = 2; i<= number; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr;
}

function isEven(number) { // para ver se o number era par
    if (number % 2 === 0) return true
    return false
}

function isPrime(number) { // para ver se o number é primo
    if (number === 0 || number === 1) return false
    const numberSqrt = parseInt(Math.sqrt(number).toFixed(0))
    if (numberSqrt === 1) return true
    for (let i = 2; i<=numberSqrt; i++) {
        if (number % i === 0) return false
    }
    return true
}

 function verifica(number, string) {// função para verificar se os numbers são, pares, impares ou primos
    const arrayFibo = createFibo(number);
    let result = []

    if (string === 'par') {
        for (let i = 0; i< arrayFibo.length; i++) {
            if (isEven(arrayFibo[i])) result.push(arrayFibo[i])
        }
    }

    if (string === 'impar') {
        for (let i = 0; i< arrayFibo.length; i++) {
            if (!isEven(arrayFibo[i])) result.push(arrayFibo[i])
        }
    }

    if (string === 'primo') {
        for (let i = 0; i< arrayFibo.length; i++) {
            if (isPrime(arrayFibo[i])) result.push(arrayFibo[i])
        }
    }
    return result
}

console.log(verifica(15, 'primo'))