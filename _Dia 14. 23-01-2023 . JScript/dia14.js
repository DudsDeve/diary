//  JA SE PASSOU MUITO TEMPO, comecei um curso técnico e também
// agora estou  estudando na plataforma Origamid que o Pedriho me emprestou

//3 tipos de variáveis
var nome = "André";
var idade = 28; 
var PossuiFaculdade = true
console.log(nome , idade, PossuiFaculdade )

//EVITE REPETIÇÕES NA PROGRAMAÇÃO

var preço = 25
var totalComprado = 5
var totalPreço = totalComprado * preço
console.log(totalPreço)

// palavra chave + nome específico que voce quer dar = valor final
 var nome1 = 'Eduardo', 
 sobrenome = 'Palhares',
  nome2 = 'Aline';
 //sempre fechar com ;
 console.log(nome1 , sobrenome ,nome2)

 // valores válidos - $,_,...AAA 
 var $selecionar 
 var _selecionar
 var selecionarAlgo
  // var e let, é possivel modificar o valor da variável

  var time = "Cruzeiro"
time = "Galo"
console.log ( time )
// o console.log le o primeiro que vem acima dele 
  
// NÚMEROS NÃO LEVAM ASPAS, APENAS PALAVRAS OU FRASES

// Exercício 1 - ORIGAMID - AULA 201 - VARIÁVEIS

var nome2 ="Eduardo", 
idade2 = 26;
var comida // undefined porque eu não atribui valor, =''
bebida = "",
banheiro = "",
filmes = "",
jogo = "";
console.log (nome2, idade2, comida, bebida, banheiro, filmes, jogo)

// AULA 202 -ORIGAMID -TIPOS DE DADOS 
 var _nome = "Duds";// Strings = aspas são chamadas de strings
 var _idade = 26 ; // Numbers = não se coloca strings neles
 var _possuiFaculdade = false ; // Boolean = true or false
 var _time // Undefined = não tem valor atribuido
 var _comida = null// Null
 var _simbolo = Symbol() ;// Symbol =
 var _novoObjeto = {} ;// Objeto =

 console.log ( _nome, _idade, _possuiFaculdade,_time,_comida,_simbolo,_novoObjeto)

//Para verificar o tipo de dado, basta escrever console.log(typeof -nome da variável) 
//Exemplo 

console.log (typeof  _idade)
console.log (typeof _nome)
console.log (typeof _possuiFaculdade)

//SOMA DE STRINGS = string + string 
var nome0 = "Eduardo",
sobrenome0 = "Palhares",
nomeCompleto0 = nome0 + " "+sobrenome0;
console.log(nomeCompleto0)

// SOMA NÚMERO E STRING
var jogador = 'Hulk fez mais de',
gols = 1000,
restoDaFrase = 'gols no Galo ',
fraseCompleta = jogador +" " + gols +" "+ restoDaFrase
console.log(fraseCompleta)
  
// Exercício 2 - ORIGAMID - AULA 202 - VARIÁVEIS

var pessoa = 'Duds',
janelas = 78,
variavelJanelas = `este prédio tem ${janelas}`,
variavelIdade = 26,
nome00 = 'Eduardo',
sobrenome00 = 'Palhares',
tempo00 = 'Its time',
fraseCompleta00 = `${pessoa} ${variavelJanelas}` // o `${}` da epaço nos itens sem precisar de +""+
nomeCompleto00 = `${nome00} ${sobrenome00}`


console.log(fraseCompleta00)
console.log(typeof nome00)
console.log(nomeCompleto00)

