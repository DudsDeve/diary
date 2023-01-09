
// ------------------------NOTAS DE ALUNOS

function getnota(nota) 
{
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaE = nota < 60 && nota >= 0

if (notaA ){
    notafinal = "A"
} else if (notaB){
    notafinal = "B"
}else if (notaC){
    notafinal = "C"
}else if (notaD){
    notafinal = "D"
}else if (notaE){
    notafinal = "E"
}
console.log( notafinal)
}
getnota(90)
getnota(85)
getnota(50)
getnota(1)
getnota(-1)

// -------------------FLUXO DE CAIXA -------------
/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

function calculate (receita, sinal, despesas){

switch (sinal) {
    case '+' : resultado = receita + despesas
    break
    case '-' : resultado = receita - despesas
    break
}
return resultado 
}
console.log(calculate(45, '-', 10))

// MÉTODO ERRADO  ACIMA //

// POSSO ESCREVER TANTO INGLES, QUANTO PORTUGUES
// POSSO USAR _ PARA DEIXAR MAIS ESPECÍFICO
let family = {
    incomes: [2500,3200,250,360.45],
    expenses:[320.50,130,178.85]

}
function sum(array){ // está função vai estar SOMANDO
    let total = 0;
    for (let value of array) {
        total += value
    }
    return total
}

function calculate_balance(){

    const calculate_incomes = sum(family.incomes)
    const calculate_expenses = sum(family.expenses)
    const total = calculate_incomes - calculate_expenses

   const its_ok = total >= 0

   let balance_text = " Negativo"

   if (its_ok) {
    balance_text = "Positivo"
    
   }
      console.log(`Seu saldo é ${balance_text} : R$${total.toFixed(2)}`)// .tofixed = mostra apenas o número () depois da vírgula
      /*fiquei muito tempo procurando o erro, o que acontece, é que ,
      o console.log, tem que ficar no {} DENTRO DA FUNCTION */
}
calculate_balance()
//-------------------CERTO ACIMA-----------------

/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
C = (F - 32) * 5/9 
F = C * 9/5 + 32*/

function transform_graus(_graus) {
    const celsius_existe = _graus.toUpperCase().includes('C')
    const fahrenheit_existe = _graus.toUpperCase().includes('F')

if(!celsius_existe &&!fahrenheit_existe) {
// se NÃO escrever celsius ou fahrenheit
  throw new Error ('Grau não identificado')}
// vai aparecer um ERROR com uma menssagem

// fluxo ideal, F ==> C
let uptade_graus = Number (_graus.toUpperCase().replace("F", ""));

let formula = (fahrenheit) => (fahrenheit - 32) *  5/9;
let sinal_graus = 'C';

return formula(uptade_graus) + sinal_graus;
}
 console.log(transform_graus('50f'))
 // transform_graus('50Z') : esse com Z irá disparar uma menssagem de error

