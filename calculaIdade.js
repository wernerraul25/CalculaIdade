let anoAtual = prompt("Digite o Ano Atual: ");
let anoNascimento = prompt("Digite o Ano de Nascimento: ");

let dataAtual = new Date();
let anoAutomatico = dataAtual.getFullYear();

let erro = false;

if(anoAtual == ""){
    anoAtual = anoAutomatico;
};

if(anoNascimento == ""){
    erro = true;
};

function calculaIdade(anoAtual,anoNascimento){
    let idade = anoAtual - anoNascimento;
    if(erro){
        console.log("Dados inválidos")
    } else if (anoNascimento <= anoAtual) {
        console.log("Você tem " + idade + " anos de idade.");
    } else {
        console.log("Idade inválida")
    };
};

calculaIdade(anoAtual,anoNascimento);
