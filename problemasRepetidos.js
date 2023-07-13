/* 
1) spread (...) = Pegar itens de um array, separa e joga onde o comando "spread" está
2) .length = Para descobrir quantas itens tem um ARRAY
3) .length -1 = Para pegar o último item de um Array
4) .push(item) = Para adicionar no final o item
5) .pop() = Para remover o último item 
6) .unshift (item) = Para adicionar no começo o item 
7) .shift() = Para remover o item do começo
8) .math = Função para usar em tudo que for matemático
9) .sort() = ordena os elementos, tanto numbers quanto arrays **
10) .map = ele altera o array inicial de acordo com o return que você quiser
11) for =  ele passa array por array, porém no for da para alterar 
12) .split() = separa os itens pelo que estiver dentro do ()
13) .replace(" ", number) = consigo alterar meu primeiro valor por um outro valor 
14) .join () = junta os itens pelo que estiver dentro do () 
15) .parseInt() = ela transforma string em valor inteiro
16) .parseFloat() = faz a mesma coisa que o parseInt só q deixa o número decimal
17) .toFixed() = ele mostra apenas determinadas casas decimais depois da virgula
18) .replace( x , y ) = ele substitui um item determinado pelo outro
19) .toLowerCase() = transforma tudo em letra minuscula
20) .toUppercase() = transforma tudo em letra MAIUSCULA
21) .includes() = ele verifica se aquele item existe dentro array/objeto/string, retorna true ou false
22) Array.from() = transformar um item em um array com todas as suas propriedades e separa cada item que esta dentro do array
23) .slice( casa que o item está o index do array , até qual posição do item quero tirar) = ele corta o array, de onte eu quero tirar no começo até onde quero tirar no final, ele cria um novo array com os elementos que tiramos
24) .splice(casa que o item esta o index do array  , até a casa que o outro item está o index do array ) = ele vai modificar o array original, removendo a quantidade de itens que eu quero
25) \n = ele faz o mesmo papel de uma DIV no HTML, só que no jscript
26) new = criar um novo argumento
27) .typeOf = para ver qual o tipo do item/argumento, serve para ver se é um boolean, number, string, etc..
28) % = o resto da divisão, o que sobra do resultado da divisão dos números
29) TERNÁRIO = faz a mesma coisa que o if
30) for(  of  ) = ele pega os itens que em que o for...of for usado e separa todos eles
31) padStart(número de casas no total para ser preenchidas a mais , com o que eu quero preencher) = serve para adicionar itens/caracteres na frente do item que eu quero
32) padEnd(número de casas no total para ser preenchidas a mais , com o que eu quero preencher) = serve para adicionar itens/caracteres no fim do item que eu quero
33) Math.min(array ou numbers) = ele retorna o menor número de todos números dados ou do array dado 
34) Math.max(array ou numbers) = ele retorna o MAIOR número de todos números dados ou do array dado 


-ARRAY-
*/





// 1) Spread - ...


// Ele serve para pegar os itens dentro de um array e separar.

const teste = "Raphael Soares de Freitas"

const separatedName = [...teste]
console.log(separatedName) 


// 2) .length = Para descobrir quantas itens tem um ARRAY


function concatName(array) {
    let name1 = array[0];
    let name2 = array.length; }

//ou

    console.log(shoppinglist.length)


// 3) .length -1 = Para pegar o último item de um Array

function concatName(array) {
    let name1 = array[0];
    let name2 = array[array.length-1]; }

// 4) push - adiciona no final o item

let shoppinglist2 = [ "a", "b", "c", "d"];

shoppinglist2.push ("cotonete")
console.log(shoppinglist2)

// 5) pop - remove o último item 
 
let shoppinglist3 = [ "a","b","c","d"]
shoppinglist3.pop()
console.log(shoppinglist3)

// 6) unshift - adiciona no começo o item 

let shoppinglist4 = ["a","b","c","d"] 
shoppinglist4.unshift("dog")
console.log(shoppinglist4)

// 7) shift - remove o item do começo

let shoppinglist5 = ["a","b","c","d" ]
shoppinglist5.shift()
console.log (shoppinglist5)

//8) math = olhar a lista de math na internet, várias possibilidades

// 9) .sort() = ordena os elementos, tanto numbers quanto arrays


const numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers); // Saída: [1, 2, 3, 4, 5]
 
//ou

const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); // Saída: ["apple", "banana", "grape", "orange"]

// porém o sort só odena de 1 a 9, ee tem problemas com operadores de duas casas, então fazemos uma função para isso

// .sort() = ORDEM CRESCENTE

exemplo.sort((a, b) => a - b)



// 10) .map = ele altera o array inicial de acordo com o return que você quiser, meio que um for automático

const resultList = sortedTechList.map(function(tech) { // no caso aqui ele vai alterar o array inicial por um objeto 
    return {
      tech: tech,
      name: name
    };
  });

// 11) for = ele passa array por array, porém no for da para alterar / sempre que for comparar alguma coisa é bom usar
//https://www.youtube.com/watch?v=Xc0uTAa4Mn4

for (let i = 0; i < 5; i++) { // o 'i" começa do 0 , caminha da esquerda pra direita até chegar no número 4, e acrescenta mais um (ou seja ele caminha pra fente até chegar no número 4)
    console.log(i);
  }
  

  //12) .split() = separa os itens pelo que estiver dentro do ()

  let phrase = "eu quero viver o amor !" // frase do curso
  let myArray = phrase.split ("e")
  console.log(myArray)

  //13) .replace(" ", number) = consigo alterar meu primeiro valor por um outro valor 
  // porem ele altera só o primeiro valor que ele achar
  // para alterar todos os valores você pode usar 

  let phrase = "eu quero viver o amor !" // frase do curso
  let myArray = phrase.replace(/["e"]/g, 1) // regex = /[]/g
  console.log(myArray)
  // sendo assim vai alterar todas as letras "e" para o número 1

  //14) .join = junta os itens pelo que estiver dentro do () 

  let phrase = "eu quero viver o amor !" // frase do curso
  let myArray = phrase.replace(/["e"]/g, 1) // regex = /[]/g
  let phareseJunta = myArray.join("_")
  console.log(phareseJunta) 

  //15) parseInt() = ela corta a casa decimal  e transforma os naumber que estiverem em STRING em valor inteiro

  let a = " 1.2"
  let b = 3 
  console.log(parseInt(a)+b) 
  //resultado = 4

  --ARRAY--

   //AO RECEBER UM ARRAY É DIFERENTE DE CRIE UM ARRAY
 //Para criar um array vazio -> let arr = []


 //17) toFixed() = ele mostra apenas determinadas casas decimais depois da virgula

  let number = 245.54557587845
  console.log( number.toFixed(2).replace("." , "," )) // com o replace vou subtituir o ponto por virgula

  //18) replace( , ) = ele substitui um item determinado pelo outro

  //21) .includes() = ele verifica se aquele item existe dentro array/objeto/string, retorna true ou false

    let frase = "Eu quero viver o Amor!"
    console.log(phrase.includes("Amor"))

  //22) array.from() = transformar um item em um array com todas as suas propriedades e separa cada item que esta dentro do array


    let frase = "manipulação"
    console.log(Array.from(frase))
     
    //da pra fazer com numeros também 

    //para isso eu tenho que transformar os number em strings 

    let frase = 1154124
    console.log(Array.from(frase.toString())) //então todos os numeros vão virar strings

    //23) .slice( casa que o item está , até qual posição do item quero tirar) = ele corta o array, de onte eu quero tirar no começo até onde quero tirar no final 

    let tec = [ "A","B","C","D","E","F","G"]
    console.log(tec.slice(1,5)) // pegou do array começando do item 0, até a posição 5 do array

    //24) .splice(casa que o item esta o index do array  , até a casa que o outro item está o index do array ) = ele vai modificar o array original, removendo a quantidade de itens que eu quero
    console.log(letras.splice(1,3)) // ele vai pegar o index 1 do array e vai remover os 3 itens pela frente e criar um novo array
                 
            // resultado:["B", "C", "D"]

    //25) \n = ele faz o mesmo papel de uma DIV no HTML, só que no jscript

    function tree (asterisco) {
      let arvore = ''; // deixei a string vazia para ser preenchida
    
      for (let i = 0; i <= asterisco; i++) { // <= para pegar o numero que é escrito no console.log
        let linha = '';
        for (let j = 0; j < i; j++) {
          linha += '*';
        }
        arvore += linha + '\n'; // \n serve como uma DIV no html, escreve na outra linha
      }
    
      return arvore;
    }
    
    console.log(tree(5));
    
    // por exemplo no código acima, eke vai criar uma arvore, com várias linhas uma acima da outra com *

   //26) new = criar um novo argumento

   let a = new Date()
   let b = new Person 

   //27) .typeOf = para ver qual o tipo do item/argumento, serve para ver se é um boolean, number, string, etc..
    
   let a1 =  1457
   let a2 = true
   let a3 = 'falso'

   console.log(typeof a1)
   console.log(typeof a2)
   console.log(typeof a3)

   //28) % = o resto da divisão, o que sobra do resultado da divisão dos números

      //serve tambem para verificar se o número é par
   if ( 22 % 2 === 0 ){ // quer dizer que se o número for divisivel por 2, com o resto 0, ele é par
    return 'par'
   }
   
      //serve tambem para verificar se o número é ímpar
      if ( 22 % 2 !== 0 ){ // quer dizer que se o número NÃO for divisivel por 2, com o resto diferente de 0, ele é ímpar
        return 'ímpar'
       }

   //29) TERNÁRIO = faz a mesma coisa que o if

   let pao = true
   let queijo = true
   const cafeDaManaha = pao && queijo ? 'café top' : 'café ruim'
       // se tiver  pão e queijo, retorna café top, se não café ruim

  //30) for(  of  ) = ele pega os itens que em que o for...of for usado e separa todos eles

   // pode ser usado com, arrays, strings, numbers, etc

   //ARRAY:

       let iterable = [10,20,30];
       for( let x5 of iterable){
        console.log(x5)
       } 
       // 10
       // 20
       // 30

  //STRING:

       let variavel = 'string'
       for ( let x6 of variavel){
        console.log(x6)
       }
       //S
       //t
       //r
       //i
       //n
       //g

   //31) padStart(número de casas no total para ser preenchidas a mais , com o que eu quero preencher) = serve para adicionar itens/caracteres na frente do item que eu quero

   const str1 = '5';

   console.log(str1.padStart(2, '0')); //2, é o número de casas finais que vai ter na saída
   // saída: "05"
    'abc'.padStart(10);         // "       abc"
    'abc'.padStart(10, "foo");  // "foofoofabc"
    'abc'.padStart(6,"123465"); // "123abc"
    'abc'.padStart(8, "0");     // "00000abc"
    'abc'.padStart(1);          // "abc"

  //32) padEnd(número de casas no total para ser preenchidas a mais , com o que eu quero preencher) = serve para adicionar itens/caracteres no fim do item que eu quero

  const str2 = 'Breaded Mushrooms';

  console.log(str1.padEnd(25, '.'));
  // saída: "Breaded Mushrooms........"

  'abc'.padEnd(10);          // "abc       "
  'abc'.padEnd(10, "foo");   // "abcfoofoof"
  'abc'.padEnd(6, "123456"); // "abc123"
  'abc'.padEnd(1);           // "abc"

  //33) Math.min(array ou numbers) = ele retorna o menor número de todos números dados ou do array dado 

  console.log(Math.min(2, 3, 1));
//saída: 1

console.log(Math.min(-2, -3, -1));
// saída: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1)); // usado o spread para pegar todo o array usado
//saída: 1

//34) Math.max(array ou numbers) = ele retorna o MAIOR número de todos números dados ou do array dado 

console.log(Math.max(1, 3, 2));
// saída: 3

console.log(Math.max(-1, -3, -2));
// saída: -1

const array2 = [1, 3, 2];

console.log(Math.max(...array2));
// saída: 3




    
    
    
