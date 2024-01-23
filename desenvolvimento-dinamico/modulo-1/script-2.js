const rlSync = require('readline-sync')

let nome = rlSync.question('Qual o seu nome?\n')

console.log(`Olá, ${nome}`)
