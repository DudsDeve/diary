// 1- Arrow Function
// 2- Objetos
// 3- Pegar o último item do array
// 4- Adicionar propriedades aos objetos
// 5- Para mostrar o que tem dentro do objeto (key,values,entries)


// ARROW FUNCTION


/* Voce consegue sair disso:

function subtraction(num1, num2) {
  return num1 - num2;
};
*/
//para isso:

// const subtraction = (num1, num2) => num1 - num2;

/* Onde é necessário escrever apenas o parâmetro e a expressão : (param) => expressão */


//OBJETOS 


//São um conjunto de propriedades e valores

const account = {
  agency: '0975',
  bank: { // pode existir um objeto dentro de um objeto 
    cod: '012',
    id: 4,
    name: 'TrybeBank',
  },
};
//Ai para acessar o "id" por exemplo, eu faço "account.bank.id"


// PARA PEGAR O ÚLTIMO ITEM DO ARRAY


// Exemplo: residents[residents.length - 1];
/* vai pegar dentro do array de residents o tamanho total do conjunto - 1 ,
porque na programação se começa do 0, então tem que reduzir um para não pegar um
item vazio */ 


//Adicionar propriedades novas em um Objeto


//comando addProperty 

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  // Criação da função
  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  // Chamada da função passando os valores dos parâmetros
  addProperty(customer, 'birthPlace', '19/07/1932');
  
  // Exibe o objeto transformado
  console.log(customer);


  // Para mostrar o que tem dentro do objeto
  

  // key, value, entries 


  // object.key() = mostra as propriedades do objeto 
  // object.value() = mostra os valores que tem no objeto
  // object.entrie() = mostra as propriedades e os valores juntos
 