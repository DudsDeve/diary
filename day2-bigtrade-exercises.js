

// Throw - try - catch
let sum1 = (a,b) => { //arrowfuncion
    return a + b
}
console.log(sum1(5,5))
 // resultado = 10 - pois são dois Numbers

//Mas caso aconteça de ficar number + sting



/*const checkvalue = (c,d) => {
    if (typeof c !== 'number' || typeof d !== 'number'){
        throw new Error ("Os valores precisam ser numéricos")
    } // new = usado para criar um novo objeto
}
 console.log(checkvalue(5,"5"))

let sum2 = (c,d) => {
    return c + d
}
console.log (sum2(5,"5"))*/

//Então soma errado e fica 55, pois soma number + string



/* ------------- Mas para que esse erro não aconteça, eu talvez consigo usar
uma função if else + parseInt para já evitar algum erro e transformar em número,
qualquer possível string */ 


 // TRY - testa o erro, se tiver o erro, o bloco de código para ali mesmo
 // Catch - pega o erro e implementa uma menssagem e correção


const chekvalue1 = (e,f) => {
    if (typeof e !== 'number' || f !== 'number') {
        throw new Error ("Os valores precisam ser numéricos")
    }
}

const sum3 = (e,f) =>{ 
    try {
        chekvalue1 (e,f);
         return e + f; }
         catch (erro) { // no lugar de "erro", pode ser usado qualquer nome de variável
            return  erro.message; // message = é nativa da variável Error, então pode ser usado qualquer nome antes
         }
}

console.log(sum3(5,"5"))