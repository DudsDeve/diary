
// ainda sobre buttons 

var input = document.querySelector("input");

function exibeTexto() {

    alert(input.value); //o alerta, vai puxar o valor que vai ser escrito no input
}

var button = document.querySelector("button");
button.onclick = exibeTexto;

// um pouco de arrays 

let segredos = [5,7,10,2,3];

let input = document.querySelector("input");
input.focus(); // serve para o campo do input ficar em foco quando atualizar a página

function verifica (){
    let achou = false ; //se o achou for igual a false, não tiver achado, ele vai entrar no loop for e percorrer todo array
    for ( let posicao = 0; posicao < segredos.length; posicao++){
        if ( input.value == segredos[posicao]) {// se o valor que colocou no input for igual a posição certa de onde esta o segredo
            alert("Voce acertou!")
            achou = true;
            break; // ai o loop para
        } else {"vOCÊ errou"}
    }
}

// somas 
function aVeryBigSum(ar) {
    let total = 0 // total inicial é igual a 0 
    for ( let i = 0 ; i < ar.length ; i++ ){ // 
        total += ar[i] // vai concatenar o total inicial mais o total final 
    }
    return total // vai retornar o total final da função
}

// resolução da matriz do exércicio do hackrank

function diagonalDifference(arr) {
    let diagonalEsquerda = 0; // começar o array do total 0
    let diagonalDireita = 0; // começar o array do total 0
    for (let i = 0; i < arr.length; i++) { // percorrer todo o array
      diagonalEsquerda += arr[i][i]; // diagonal da esqueda concatena com o array na posição 0,0 no primeiro loop, depois, 1,1 e por ai vai
      diagonalDireita += arr[i][arr.length - 1 - i]; // para percorrer da direita pra esquerda, o primeiro i na posição 0, que quer dizer que é a primeira fileira
      //logo depois é a coluna, o array todo menos 1, para pegar o último número, que é 9 por exemplo, menos o index 
    }
    //lembrando que isso é apenas sobre pósição e não valores 

    return Math.abs(diagonalDireita - diagonalEsquerda);
  }
  // é um array dentro de um array 

  //exemplo, no primeiro loop,[arr.length - 1 - i] -> 3 - 1 - 0 = 2 => tamanho total do array, menos 1 pra pegar o último número do array, menos o i que começa em 0
[2,1,9]
[4,7,1]
[5,7,2]