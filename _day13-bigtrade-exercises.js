/*
1) Função construtora:função para construir um novo objeto

*/





// função tem que ter uma declaração

// return é essencial para retornar a função

let subject 

function createThing (){// quando a função tem o parametro vazio, ele pega do anterior
    subject = 'study'
    return subject

}
// arrow funcion: tiro a palavra function basicamente

const sayMyName = (nome) => { // ai fica o parametro + o arrow function 
    console.log(nome)
}

//1)Função construtora:função para construir um novo objeto

    function person (name) {
        this.name = name //this serve para referenciar a um objeto criado, como é o caso do objeto person
        this.walk = () => { // o this ele vai criar novas propridades tambem dentro do objeto
            return this.name + "esta andando"
        }
    }
    const mayk = new person ('mayk') //para criar um novo objeto pessoa,
    const joao = new person ('Joao')
    console.log(mayk)