/* 
1) throw / try / catch = capturar erros na aplicação 
*/

//- throw / try / catch

function sayMyName (name = '') { // name = está vazio
    if (name === ''){ // se o name estiver vazio 
     throw new Error ("O nome é necessário") // ele vai disparar um erro que precisa de nome 
    }
     
}
 // usar o throw sem o try e catch funciona, porém ele vai quebrar a aplicação 

 try { 
    sayMyName()
 } catch (capturar){
    console.log(capturar)
 }
  console.log("apos a função de erro")