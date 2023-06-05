
// Exercises
let preco = 15;
let totalComprado = 5;
let totalPreco = totalComprado * preco ;
console.log(totalPreco)

let b = " olá";
console.log(b)

// // Um objeto é um conjunto de variáveis e funções  
 /*let quadrado = {
   lados: 4;
    area: function (lado){
        return lado * lado;
    }
 }
 console.log(quadrado.lados)*/

//------------------------------------------------------PROCURAR PROPRIEDADES GLOBAIS DO JSCRIPT

/*Math.PI;
let pi = Math.PI;
console.log(pi)*/
console.log(Math.PI)

//exercises 2 opereções aritimeticas 
let salary = 9000;
let bonus = 5000;
let vacations = 3000;
let taxes = 700;
console.log (salary * 12 + bonus + vacations - taxes);

// exercises 3
 const age = 15;
 let podeDirigir;
 
 if (age >= 18 ){
    podeDirigir = "Maior de idade";
 } else { podeDirigir = "Menor de idade"}

console.log(podeDirigir)

//exercises 4
const age2 = 18 
if (age2 >= 18) {
    console.log("Pode dirigir")
} else { console.log("Não pode dirigir")}

// exercises 5

let food1 = "Pão";
let food2 = "Batata";
let food3 = "Feijão";
let drink1 = "Refri";
let drink2 = "Cerveja";
let drink3 = "Água";

if (drink3 === "Água" && drink2 === "Cerveja" && food1 === "Pão") // se a função obedecer todas essas especificações, ela escreve x coisa
{ console.log ("Meu pedido está certo");}
else { console.log ("Erraram meu pedido")}

let joi = 1
let joi2= '1'

console.log(joi == joi2) // == compara valor
console.log(joi === joi2); // === compara valor e tipo

// const carro = {
//     ano: 2023,
//     marca: 'Honda',
//     isManualTrans: true,
//     valor: 1920.00
// }

// console.log(carro.ano)
// console.log(carro['ano'])
// carro.valor = 1900
// carro['valor'] = 1900

// console.log(carro)


const gmtdocuments = {
    Future_contracts: {},
    History_report: {}
}

const pessoa= {
    nome: 'Raphael',
    idade: 32,
    profissao: null
}
// null é quando tem a propriedade mas falta dados
// undefined é quando não tem nem a propriedade

console.log(pessoa.nome)
console.log(pessoa.profissao)

// String
// Number
// Boolean
// Array
// Object
// undefined
// null

const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
      {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
      }
    ],
  };

  console.log("o livro favorito de"+" "+(reader.name)+" "+ (reader.lastName)+ " "+ "se chama"+ " "+ (reader.favoriteBooks[0].title) ) 
  //o name estava riscado,pq eu estava pegando a propriedade sem citar de onde eu queria
  // o [0] serve para falar em qual posição está o objeto
  //
 

  console.log( `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`)

  // mas é melhor escrever assim porque poupa espaços


const {name, lastName} = reader

console.log(name, lastName)

console.log (`Júlia tem ${reader.favoriteBooks.length} livros favortios.`) 
//length serve para contar o número de determinados itens

/* 
console.log(Object.keys(reader))
//console.log(Object.values(reader))

const ChavesDoObjeto = Object.keys(reader);

const Chave = 'name'

const IndexDaChave = ChavesDoObjeto.findIndex((item) => item === Chave);

console.group(IndexDaChave)

console.log(ChavesDoObjeto[IndexDaChave]) */



