// IMPRIMA somente os números pares até 100

var contador = 2; // contador vai começar no número 2 

    while(contador <= 100) { // ele vai contar até 100
        mostra(contador);
        contador = contador + 2;} //ele vai somando de 2 em 2

// fazer uma tela de login

<script>

var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        alert("Bem-vindo ao sistema, " + loginInformado);

        tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

    } else {

        if (tentativaAtual == 3) {
            alert("Número permitido de tentativas ultrapassado!");
        } else {
            alert("Login inválido. Tente novamente");
        }
    }

   // vai para a próxima tentativa
    tentativaAtual = tentativaAtual +1  
}

</script>

// LOOP FOR / WHILE

//FOR
for (let multiplicador = 1; multiplicador <= 10; multiplicador++){ 
    mostra(7*multiplicador)
}

// WHILE

var multiplicador = 1;
while (multiplicador <= 10) {
    mostra(7*multiplicador)
    multiplicador = multiplicador + 1
}

// Exemplo de campo de texto e botão para senhas

let segredo = 5 // a senha vai ser igual a 5

let input = document.querySelector("input")// o documente.querySelector, serve para pegar o input do HTML onde a senha será escrita

function verifica () {
    if ( input.value == segredo) { // se o valor colocado no input, foi igual o segredo
        alert ("Você acertou!");
    }   else { 
                alert (Voce errou!!)
            }
        }
        var button = document.querySelector("button") // para pegar o button 
        button.onclick = verifica //o onclick do button, chama a função verifica
        // Lembrar sempre de chamar a função sem o ()

    }
}
