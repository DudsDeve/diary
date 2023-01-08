//Sting em números, números em strings
 
/*let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))*/

// -------------CONTROLANDO STRINGS

/*let phrase = " Eu quero viver o Amor!"
//let myArray = phrase.split("o") // ele vai separar a frase com o .split, cortando o (o)
let myArray = phrase.split (" ") // 
let phraseWith = myArray.join("_")
console.log(phraseWith) */

let a = " Eu quero viver o Amor!"
let b = a.split (" ") // split = separar
let c = b.join("_") // join =  juntar 
console.log(c) 
/* as palavras são apenas modos de se localizar,
mas podem ser qualquer outro tipo de palavra*/

//----------------Encontrando palavras 

let phrase = "Eu quero viver o amor"
console.log(phrase.includes("amor"))
/* Quando se unclui .includes,da pra ver
 se na frase contém ou não a palavra*/

 console.log([
    "a",
    {type: "array"},
    function() { return "alou" },

 ][1].type)
 // ARRAY , é um []

// Manipulando arrays 

let palavrinha = "manipulação"
console.log(Array.from(palavrinha))

