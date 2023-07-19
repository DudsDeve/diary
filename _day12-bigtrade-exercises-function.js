/*
1) Objetos : Apresentação 
2) Filter : ele percorre um ARRAY e cria um novo apenas com elementos que você filtrou
3) Reduce: pega uma serie de elementos e soma em uma coisa só
4) New :cria um novo objeto de acordo com a função que estiver na frente
5)Prototype: é uma propriedade que a função sempre vai ter
*/

// 1) OBJETOS

let carro = {
    marca : 'honda',
    preço : 0
} 

//isso é um objeto

// 2) Filter :  ele percorre um ARRAY e cria um novo apenas com elementos que você filtrou

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log( anoDeCriacao ); // ele vai imprimir todos os anos acima de 2000

// 3) Reduce : pega uma serie de elementos e soma em uma coisa só

const rockets = [
    

        {country: "Russia", launches: 32},
        {country: "x", launches: 32},
        {country: "Y", launches: 32},
        {country: "A", launches: 32},
        {country: "b", launches: 32},
        {country: "c", launches: 32},
] 
        const totalLunches = rockets.reduce((anterior,atual) => anterior  + atual.launches,0)
      
        // percorre todo o array o valor anterior mais o atual de lançamentos, começando de 0 


//  4) New :cria um novo objeto de acordo com a função que estiver na frente
  
    function carro (marcaAtribuida, precoAtribuido){
      this.marca = marcaAtribuida;
      this.preco = precoAtribuido;
    }

      const honda = new carro ('Honda', 3000);
      const fiat = new carro (' Fiat', 2000);


// 5) This : ele faz referecia a outro elemento

function carro2 (marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa 
  this.marca = marca;
  this.preco = precoFinal;
}

  const mazda = new carro2 ('Honda', 3000);

  // SEMPRE quando for comunicar dentro de um objeto, usar THIS

  //exemplo

  const pessoa = {
    nome: 'Nome pessoa',
    idade: 0 ,
    andar(){
      console.log(this.nome + 'andou')
    }
  }

  function pessoa (nome, idade){
    this.nome = nome
    this.idade = idade 
    this.andar = function(){
      console.log(this.nome + 'andou')
    }
  }
