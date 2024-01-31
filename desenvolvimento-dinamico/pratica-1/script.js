const rlSync = require('readline-sync')

const bebida = rlSync.question('Escolha uma bebida: ');
let temNoCardapio = false;

let valor = 0;

switch (bebida) {
    case 'café':
        valor = 5.5;
        temNoCardapio = true
        break;
    case 'leite':
        valor = 3;
        temNoCardapio = true
        break;
    case 'chá':
        valor = 8;
        temNoCardapio = true
        break;
    default:
        temNoCardapio = false
}

if(!temNoCardapio) {
    console.log("A escolha de bebida deve ser café, leite ou chá.")
    return;
}

console.log(`Bebida escolhida: ${bebida}\nValor da bebida: ${valor.toFixed(2)}`)
