// FUNCTION 

//TODA FUNÇÃO TEM UM NOME
function exibeAlerta(mensagem) {
    alert("***" + mensagem + "***");
}

var idade1 = 10;
var idade2 = 20;
var idade3 = 30;
var totalIdades = idade1 + idade2 + idade3;
var mediaIdades = totalIdades/3;

exibeAlerta("Total de idades é " + totalIdades);
exibeAlerta("A média das idades é " +  mediaIdades);


// EXERCISES

// Escreva uma função que receba um numero e uma string -
// Essa função cria um array com numeros, iniciado em 1, até o numero recebido.-
// Exemplo: numero = 10 || array = [1,2,3,4,5,6,7,8,9,10]-
// a string recebida será "par" ou "impar"-
// retorne um array contendo os numeros pedidos pela string.
// exemplo: numbero = 10 e string = par | retorno { array = [2,4,6,8,10]}

function array (number,string){
    let arrayUse = []
    for (let i = 1; i <= number; i++) {
    arrayUse.push(i) // push para inserir os números que acharam no i dentro do array
    } // sempre quando o array estiver vazio por exemplo, usar o .push
    let result = []
    for (let i = 0; i < arrayUse.length; i++) {
        if (string === 'par') {
            if (arrayUse[i] % 2 === 0) {
                result.push(arrayUse[i])
            } 
        } else {
            if (arrayUse[i] % 2 !== 0) {
                result.push(arrayUse[i])
            } 
        }
    }
    console.log(result)
}
    
array(10, 'impar')

function testeNumero(number, string) {

}

// IMC - calculate

function calculateImc ( peso, altura) {
    
    return peso / (altura * 2)
    //let imc = peso / (altura * 2 )
   // return imc
} 
    let informeNome = prompt("Informe seu nome")
    let informePeso = prompt("Informe seu peso")
    let informeAltura = prompt("Informe sua altura")

    let imc = calculateImc(informeAltura, informeAltura)

 // Pontos

 let vitorias = parseInt(prompt("entre com o número de vitórias")) //parseInt = ele transforma strings e numbers 
 let empates = parseInt(prompt("Entre com o número de empates"))
 let pontos = (vitórias * 3 ) + empates 
 prompt


 //AO RECEBER UM ARRAY É DIFERENTE DE CRIE UM ARRAY
 //Para criar um array vazio -> let arr = []