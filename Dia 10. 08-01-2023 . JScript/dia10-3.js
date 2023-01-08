// Manipulaçao de ARRAYS

let techs = ["html","css","js"]

// não preciso do CONSOLE.LOG na frente deles

techs.push("nodejs") // .push() = empurra o item para o final
techs.unshift("Olá") // .unshift()= empurra o item para o começo
techs.pop() // .pop() = remove do final
techs.shift() // .shift = remove do começo
techs.splice(0,2) // .splice() = remove apenas objetos desejados

console.log(techs)

