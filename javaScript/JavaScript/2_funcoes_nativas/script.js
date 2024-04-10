//Exemplo de Função Built-in
//Prompt:
let nome = prompt('Informe o seu nome:');


//Alert:
let mensagem = `Sejem bem vindos ${nome}`;
alert(mensagem)

/*Math.x
*Tipos de Math.x:
*Math.max();
*Math.min();
*Math.random();
*Math.pow();
*Math.sqrt();
*etc ...
*
*/
let maiorNumero =Mat.max(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); // Mostrar o maior valor
let menorNumero =Mat.min(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); // Mostrar o menor valor
let numeroAleatorio =Math.floor(Math.random() * 100); // Math.random()criar um número 0 e 1, enquanto o Math.floor ele arredonda o número
let numeroElevado = Math.pow(2, 3); // vai realizar calculo de número elevado. nesse caso: 2 elevado 3 que é igual a 8

//console.log:
console.log(nome);
console.log(`Maior número: ${maiorNumero}`);
console.log(`Menor número: ${menorNumero}`);
console.log(`número aleatório: ${numeroAletorio}`);
console.log(`número elevado: ${numeroElevado}`);