// Dominating Arrays

// Da pra tirar, colocar, mover e separar itens dentro de arrays

// Para escrever dentro de arrays ` akakakk kakak ${}`

const shoppinglist = [ "banana", "arroz","alface","batata"]

console.log (shoppinglist[0]) // [0] = para pegar o primeiro item
console.log (shoppinglist[2]) // [2] = para pegar o terceiro item


shoppinglist[2] = "suco de açai" 
console.log(shoppinglist)
// agora o 3 item é "suco de açai" invés de alface

//para alterar o valor de um item basta usar a função e colocar a key de onde esta o objeto que deseja mudar

//Push && Pop || Unshift && Shift

// PUSH - adiciona no final o item
let shoppinglist2 = [ "a", "b", "c", "d"];

shoppinglist2.push ("cotonete")
console.log(shoppinglist2)

//POP - remove o último item 
 
let shoppinglist3 = [ "a","b","c","d"]
shoppinglist3.pop()
console.log(shoppinglist3)

// UNSHIFT - adiciona no começo o item 
let shoppinglist4 = ["a","b","c","d"] 
shoppinglist4.unshift("dog")
console.log(shoppinglist4)

// SHIFT - remove o item do começo

let shoppinglist5 = ["a","b","c","d" ]
shoppinglist5.shift()
console.log (shoppinglist5)

// Length - medir quantos itens tem 

console.log(shoppinglist.length)  //4
console.log(shoppinglist2.length) //5
console.log(shoppinglist3.length) //3
console.log(shoppinglist4.length) //5
console.log(shoppinglist5.length) //3

//exercises

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1]; // vai pegar 

menu.push("contato")
console.log(menuServices);
console.log(menu)


//Index é posição
// FOR - looping de repetição 

let list1 = [ "aaa", "bbb" , "ccc", "ddd" , "eee" , "fff", "ggg"];
// pode ser colocado qualquer nome, botei listinhazinha para testar
for (let listinhazinha = 0; listinhazinha < list1.length ; listinhazinha += 1)
{//console.log(list1[listinhazinha]) 
//console.log(listinhazinha)
console.log(`${listinhazinha} - ${list1[listinhazinha]}`)
}

/* listinhazinha = 0 - quer dizer que vai começar desde o primeiro elemento do meu array */

/*listinhazinha < list1.length - quer dizer que a listinhazinha tem que ser menor que o valor total 
 do array, que o array vai até 6*/

/*listinhazinha += 1 / quer dizer que o looping vai se repetir de quanto em quanto
ele pode avançpar ou regredir, posso colocar mais 2, então ele vai pular 1 item */

/*ele vai e executa o looping e escreve o valor de onde está o item 0,
ai ele SecurityPolicyViolationEvent, incrementa 1 ai onde está "listinhazinha=0",
vai ficar "listinhazinha =1", ai ele executa e volta, incrementa 1 ai onde está "listinhazinha=1",
vai ficar "listinhazinha =2", e assim por diante até chegar no número final da length*/

//exercises 
//1
console.log()

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]); //função para escrever separadamente os itens de um array 
};

//2 
const numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0; //let results = 0 - significa que o resultado vai começar em 0

for (let index = 0; index < numbers1.length; index += 1) {
  result += numbers1[index];
};

console.log(result);
//3
const numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result1 = 0; 
for (let index = 0; index < numbers3.length; index += 1) {
  result1 += numbers3[index];
};
let resultadofinal =  result1 / numbers3.length;

console.log(resultadofinal)