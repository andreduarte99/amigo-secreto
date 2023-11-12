let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
       alert('Informe o nome do amigo!');
       return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == ''){

        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

}

function sortear(){
    if(amigos.length <= 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length ; i++){  

        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0]+ '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
        

    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

/*
Seu amigo Paulo, que está estudando programação, escreveu o seguinte código que exibe os números que são múltiplos de 5, entre 1 e 100:

for (let numero = 1; numero <= 100; numero++) {
    if (numero / 5) {
        console.log(numero);
    }
}

Mas ele afirma que o código não está funcionando corretamente e pediu a sua ajuda para encontrar o problema. Escolha a alternativa que indica o problema no código anterior:
A verificação do número ser múltiplo de 5, no bloco if, está incorreta.
O código dentro dos parênteses do if está fazendo uma divisão por 5, ao invés de checar se o resto da divisão é zero. O código correto para verificar se o número é múltiplo de 5 é: numero % 5 == 0.
*/

/*
Nessa aula, você aprendeu como:
Declarar uma variável do tipo array para representar uma lista;

Adicionar um elemento a um array com a função push;

Utilizar um código já desenvolvido por terceiros, para realizar o embaralhamento de elementos em um array.
*/

/*

Para converter um nome para maiúsculo em JavaScript, você pode utilizar o método toUpperCase(). Por exemplo:

let nome = "ana";
let nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo); // Resultado: ANA

Dessa forma, você pode aplicar o método toUpperCase() antes de adicionar o nome ao array e realizar a validação. Isso garantirá que não haja diferenciação entre letras maiúsculas e minúsculas.
*/

/*
Nessa aula, você aprendeu como:
Realizar validações das informações, com o uso de condicionais;

Interromper a execução de uma função, com o uso do return;

Obter o número de elementos em um array, com a propriedade length;

Checar se um elemento existe em um array, com o uso da função includes.
*/