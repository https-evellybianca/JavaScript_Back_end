//Declarações de variáveis no JavaScript
var nome = 'Lucas'; //não é recomendado
let anoNascimento = 2006; // recomendado
const anoAtual = 2024;

// Exemplos de leitura via console
//console.log()
console.log(nome);
console.log(anoNascimento);
console.log(anoAtual);

anoNascimento = 1994
console.log(anoNascimento)

// Exemplo de console.log com concatenação
console.log('Meu nome é ' + nome + ' nasci em ' + anoNascimento +' e estamos em' + anoAtual)
console.log('Meu nome é' ,nome, ', nasci em' , 'e estamosem' , anoAtual)
console.log('Meu nome é $(nome),nasci em $(anoNascimento) e estamos em $(anoAtual)')

//Tipos de dados no javascript
console.log('------------------------------------')
console.log('Tipos de dados primitivos no javascript.');

//string:
console.log('------------------------------------')
console.log('Tipos de string');
let veiculo = "carro"; // definição com aspas duplas 
let marcaCarro = 'ford'; // delinição com aspas simples
let modeloCarro = `Ranger`; // definição com template literal

console.log(typeof veículos )
console.log(veículos)
console.log(typeof marcaCarro)
console.log(marcaCarro)
console.log(typeof modeloCarro)
console.log(modeloCarro)

//Exemplo de utilização com template laterais
console.log(`Meu nome é ${nome}, nasci em ${anoNascimento} e estamos em ${anoAtual}`)

//Number:
console.log('------------------------------------')
console.log('Tipos Number')

let numeroPortasCarro = 4
console.log(typeof numeroPortasCarros)
console.log(numeroPortasCarro)
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)

// Boolean:
console.log('------------------------------------')
console.log('Tipos Boolean')

let portaAberta = true
let torneiraLigada = false

console.log(typeof portaAberta)
console.log(typeof portaAberta)
console.log(torneitaligada)
console.log(torneitaligada)

// Empyt
console.log('------------------------------------');
console.log('Empty values')
console.log('Tipo Null')
let testeNull = null;

console.log(typeof testeNull)
console.log(testeNull)

console.log('Tipo Undefine:')
let testeUndefine

console.log(typeof testeUndefine)
console.log(testeUndefine)

// Exemplo de conversão automática no javascript
console.log('------------------------------------');
console.log('conversaõ automática no javascript');
console.log('conversão 1: ','5' + 3); // conversão
