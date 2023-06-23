/* Escreva uma função que receba dois parametros, sendo o primeiro, um Number, e o segundo uma String --
 Esta função deve construir um array contendo a sequencia de fibbonacci com o numero de itens igual ao number recebido.
 Considere como o item inicial da sequencia o numero 1.
 A string recebida será par ou impar

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


function fibo (number,string){
    let arr = [1,1]
     for ( let i = 1; i < number ; i++){
         let number = arr[arr.length - 1] + arr[arr.length - 2]
        arr.push(number);}

let result = []
 for( let i = 0; i < arr.length; i++)
    { if (string === 'par') {
        if (arr[i] % 2 === 0 ) 
        result.push(arr[i])
    console.log(`Par ${arr}`) } 

    else { if (arr[i] % 2 !== 0) 
        {   result.push(arr[i])
            console.log(`ímpar ${arr}`)}
     
 }
}
return arr
}

