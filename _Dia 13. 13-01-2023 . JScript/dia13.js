// Get Element By Id 

document.getElementById('item1')

// ele pega o Id do elemento que estiver no html para modificar
//-------------------------------------------------------------------
// Get Element By Class Name

document.getElementsByClassName('item')
//// ele pega a CLASS do elemento que estiver no html para modificar
//-------------------------------------------------------------------
// Get Element By Tag Name

document.getElementsByTagName('body')

// ele pega  a TAG do elemento que estiver no html para modificar

//Manipular dados

let element = document.querySelector("h1") 
element.textContent = "Olá Mundo" // alterei o elemento do html

// Manipulando atributos

let header = document.querySelector('header')

header.setAttribute ('id', 'header')

let header_id = document.querySelector('#header')


console.log(header_id.getAttribute('class'))

