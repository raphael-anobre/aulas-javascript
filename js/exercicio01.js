// Entrada de dados (entrada via promopt)
let nome = prompt("Informe seu nome:");
let idade = parseInt(prompt("Informe sua idade:"));

// versão 1 (sem refatoração)
// if (idade >= 18 && idade < 60) {
//     alert(`${nome}, você é uma pessoa adulta`)
// } else if (idade >= 60) {
//     alert(`${nome}, você é uma pessoa idosa`);
// } else {
//     alert(`${nome}, você é uma pessoa menor de idade`);
// }

// versão 2: com refatoração (nelhorias)
let mensagem;
if (idade >= 18 && idade < 60) {
    mensagem = "adulta";
} else if (idade >= 60) {
    mensagem = "idosa";
} else {
    mensagem = "menor de idade";
}
alert(`${nome}, você é uma pessoa ${mensagem}`)

