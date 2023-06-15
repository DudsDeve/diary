// Spread - ...

// Ele serve para pegar os itens dentro de um array e separar 

const teste = "Raphael Soares de Freitas"

const separatedName = [...teste]
console.log(separatedName) 

//nesse caso ele vai separar letra por letra do nome, porque uma string também é considerado um array

 let array = [ 3,5,10,1000,15,84,100,1000] 
console.log( Math.max(...array)) 

// Nesse caso ele funcinou para pegar os numbers dentro do array e jogou no (...array)


//Functions review

//sempre usar RETURN nas funções, pois uma função SEMPRE retorna algo

// expressão " new", cria um novo objeto 

let x = new Date