// IF - ELSE = se / se não
// if() 

let temperatura1 = 36.5

if (temperatura1 >= 37){
    console.log('FEBRE')
} else { 
    console.log('SAUDÁVEL')
}
/*Se a temperatura for igual ou maior que 37
o console vai escrever 'FEBRE', caso seja menor 
o console vai escrever 'SAUDÁVEL' */

let temperatura2 = 37.2

if (temperatura2 >= 37.5){
    console.log('FEBRE ALTA')
} else if ( temperatura2 <37.5 && temperatura2 >=37) { 
    console.log('febre moderada')
} else (
    console.log('Saudável')
)
// mais de um IF

//------------- OU--------------
let temperatura3 = 36.9
let alta_temperatura = temperatura3 >= 37.5
let media_temperatura = temperatura3< 37.5 && temperatura3 >= 37

if(alta_temperatura) {
    console.log('Febre alta')
} else if(media_temperatura) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

//------------SWITCH-----------

function calculate(numero1, sinal, numero2) {
    let resultado

    switch (sinal) { // o switch = ele troca automaticamente, dependendo do que for pedido
        case '+':// case são as opções que o switch vai ter para usar
            resultado = numero1 + numero2
            break // break é um ponto final 
        case '-':
            resultado = numero1 - numero2
            break
        case '*':
            resultado = numero1 * numero2
            break
        case '/':
            resultado = numero1 / numero2 
            break
        default: // default se caso nenhuma das opções escolhidas estiver dentro do switch
            console.log('não implementado')
            break
    }

    return resultado
}

console.log(calculate(4, '+', 8))

//------ESTRUTURA DE REPETIÇÃO ------------
for(let i = 0; i <10; i++){ // o código vai contar de 0 até 9
    console.log(i)
}
//------------- FOR=============PARA // QUANDO SE SABE O MOMENTO DA PARADA
for(let c = 100; c >0; c--){// o código vai contar de 100 até 50, de forma decrescente
   if( c===50)  {
    break; // ai quando chega no 50 ele para, pq tem o IF
}
   console.log(c)
}
    
//------------WHILE-------------ENQUANTO // ENQUANTO A GENTE N SABE QUANDO É O MOMENTO DA PARADA

let d = 5000000
while(d > 5) { // o número do d, foi dividido por 20, até chegar em um número que não fosse menor que 5
    console.log(d);
    d /=20
}
   
//----------FOR  // OF ----------------

let name1 = 'Eduardo'
let names1 = [ 'Ravacini', 'Juan', 'Ayrton', 'Geovane']

for(let name1 of names1){ // for ..of = separa os itens que estão em strings e arrays
    console.log(name1)
}
