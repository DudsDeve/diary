// NEW-------

let name1 = new String ('Eduardo')
name1.sobrenome = "Palhares"
let age1 = new Number (25)
let data1 = new Date ('2023-02-06')
console.log( name1 ,name1.sobrenome, age1, data1)

//Type of------

const pessoa2 = {
    nome2: 'Eduardo',
    age2: 25,
}
delete pessoa2.age2
console.log(pessoa2)

// igual a - diferente de 

let one = 1
let two = 2
console.log(two == 1)
console.log(one == 1)

let um = 1
let dois = 2
console.log(um != dois)
console.log(um != 1)
console.log(um != "1")

// Condição

let pão = true 
let queijo = false
const cafédamanhã = pão && queijo ? 'Café TOP' : 'Café RUIM'
console.log(cafédamanhã)
// só ia aparecer café TOP, se os dois fossem true

let age3 = 15
const podedirigir = age3 >=18 ? 'Pode dirigir' : 'Não pode dirigir'
console.log(podedirigir)
// >= Maior ou igual 

// De cima para baixo, do mais importante ao menos importante.

// IMPORTANTE 

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
