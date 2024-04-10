//Exemplos de Estruturas rm JavaScript

//Estrutura Condicional (IF - ELSE)
let idade = 25

if(idade >=18){
    console.log("Você é maior de idade");
} else{
    console.log("Você é menor de idade");
}

// IF - ELSE encadeado

if(idade < 16){
    console.log("Você não pode votar");
}else if(idade >=16 && idade < 18){
    console.log("Voto opcional");
}else if(idade >=18 && idade < 70) {
    console.log("Voto obrigatório");
}else{
    console.log("Voto opcional");
}

//Estrutura de Escolha (SWITCH - CASE)
console.log("---------------------");
switch (true){
    case value:
        console.log("Você é menor de idade");
        break;

    default:
        console.log("Você é maior de idade");
        break;
}

switch(true){
    case idade <16:
        console.log("Você não pode votar");
        break;

    case idade >= 18 && < 70:
        console.log("Voto obrigatório");
        break
    case idade > 70:
        console.log("voto opcional");
        break;

        default:
            console.log("idade não foi informada");
            break;

}

console.log("---------------------------------------");
let cor = prompt ("Informe uma cor de CD para saber o seu valor");

switch(cor){
    case "verde":
        console.log("O valor do CD verde é R$ 10.00");
        break;
    
    case "azul":
        console.log("O valor do CD azul é R$ 20.00");
        break;

    case "amarlo":
        console>log("O valor do CD amarelo é R$ 30.00");
        break;

    case "vermelho":
        console.log(") valor do CD vermelho é R$ 40,00");
        break

default:
    console.log("A cor informada é invalida");
    break;
}