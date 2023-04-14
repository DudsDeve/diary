// AULA 203 -ORIGAMID -NÚMEROS E OPERADORES
var idade0 = 26;
gols0 = 1000;
pi0 = 3.14; //decimal usa ponto .
exponencial0 = 2e10; // cada número depois do E é um 0 a mais

console.log(exponencial0)

//eu coloco 0 no final para diferenciar se eu precisar de usar em mais linhas  

//Aritméticos

var soma = 100 + 50;
subtração = 100 - 60;
multiplicação = 100 * 2;
divisão = 100 / 2 ;
exponente = 2 ** 4;
modulo = 14 % 5 ;

console.log (soma,subtração,multiplicação,divisão,exponente)
console.log (subtração)
console.log (multiplicação)
console.log (divisão)
console.log (exponente) 

//A ORDEM IMPORTA

var total1 = 20+5*2;
var total2 = (20+5)*2;
var total3 = 20/2*5; 
var total4 = 10+10*2+20/2

console.log(total1, total2, total3, total4)

//INCREMENTO
var incremento1 = 5;
console.log(incremento1++);//adicionando o + ele soma 1
console.log(incremento1);
var incremento2 = 5;
console.log(incremento2--);//adicionando o - ele subtrai 1
console.log(incremento2);

//AULA 203 - exercício

 //somar o string 
 var soma1 = +'200' + 50
 console.log(soma1); 

 var x =5;
 x++;
 console.log(x); 

 // AULA 204 -ORIGAMID -Boolean e condicionais

 //BOOLEAN : serve para fazer uma comparação
 //IF : se o valor for TRUE/verdadeiro
 //ELSE : se o valor for FALSE/falso

 //Exemplo:

 var possuiGraduacion = true ;
 if (possuiGraduacion) {
    console.log("Possui graduação");
 }else {
    console.log('Não possui graduação')
 };



 //ELSEIF: se o If não for verdadeiro ele testa o Else If



//Exemplo:

var possuiGraduação = true ;
var possuiDoutorado = false ;

if ( possuiDoutorado ) {
    console.log (' Possui graduação e doutorado ')
}
    else if (possuiGraduação) { 
        console.log ('Possui graduação, mas não possui doutorado ')
    }
else {
    console.log ('Não possui graduação')

}


//exemplo: se não estiver nada de strings ou dentro dela, o valor é FALSE


var nome = '';
if(nome) {
    console.log (nome)
} else { console.log ('Nome não existe')}



// ! : SE COLOCAR UMA EXCLAMAÇÃO NA FRENTE DE TUDO QUE RETORNE TRUE, ELE VAI RETORNAR FALSE
// if(true) - retorna true
// if(!true) - retorna  false
//  if(!!true) - retorna true



var numero2 = 9;
if (numero2 < 10) { 
    console.log('true')
} else { console.log('false')}

/* exemplo : 
10 > 5 = true
5 > 10 = false
20 < 10 = false 
10 <= 10 = true = menor ou igual 
10 >= 11 = false */ 
 var y = 10;

 console.log(y === 10) // usar tres iguais === para verificar 


 /* && = e (ele SEMPRE retorna o primeiro FALSE, se não tiver false retorna o 
 último true)*/



/*EXEMPLO

true && true = true (retornou o segundo true)
true && false = false (retornou o primeiro false que apareceu)
false && true = false (retornou o primeiro false que apareceu)
'Gato' && 'Cão' = 'Cão' ( retornou o último TRUE, já que os 2 são true)
'Gato' && false = false 
*/

 if ((5-5)&&(5+5)){
    console.log('Verdadeiro ')
 } else { console.log('Falso')}


 // Saiu FALSO porque 0 é um valor FALSO


 if ((5-10)&&(5+5)){
    console.log('Verdadeiro ')
 } else { console.log('Falso')}

/* || = e (ele SEMPRE retorna o primeiro TRUE, se não tiver true retorna o 
 último false)*/

 var condicional2 = (5-5) || (5+5) || (10-2);// 5-5=0 - valor falso/ 5+5 =10 - valor verdadeiro
 console.log(condicional2)

 /* SWITCH = verificar se uma variável é igual a diferentes valores
 usando CASE, caso for igual você utiliza BREAK para parar de verificar*/

 // EXEMPLO:

 var corFavorita = 'azul';
 switch (corFavorita){ 
    case 'vermelho': console.log ('olhe para rosas');//case = caso for x retorne y
    break; //Break = serve para parar a verificação
    case 'amarelo': console.log ('olhe para o sol');
    break;
    case 'azul': console.log('olhe para o céu')
} 
var namoradaFavorita = 'Aline Mendes Barcellos'

switch (namoradaFavorita){
    case 'Irmã da Amanda': console.log('amanda beije o ayrton');
    break;
    case 'Filha da Renata': console.log('talvez eu seja irmão da bia');
    break;
    case 'Aline Mendes Barcellos': console.log('Eduardo você namora');
    break;
    default: console.log ('Você é solteiro')
}

//AULA 204 - exercício

var minhaidade= 26
var idadenamorada = 28

if (minhaidade > idadenamorada){
    console.log ('Você é mais novo');
} else if ( minhaidade < idadenamorada){
    console.log ('Ela é mais velha');
} else if (minhaidade === idadenamorada){ 
    console.log (' Idades iguais ');
}
 
var brasil = 1000;
var china = 2000;

if (brasil>china){
    console.log ('Brasil tem mais habitantes');
} else if (brasil<china){
    console.log('China tem mais habitantes');
} else 
{console.log('Mesma quantidade de habitantes')}