// ctrl ; (comentário de uma linha)

/* SHIFT ALT A (comentário de bloco) */

/* Variáveis e Constantes
São recursos para armazenamento e 
manipulação de dados na memória RAM.

let -> indica variável
constant -> indica constante */

// Criando variáveis
let ano = 2023;
let curso = "Programador Web";
let cidade = "São Paulo";

// Criando constantes
const nome = "Raphael";
const escola= "Senac";

// Saída de dados (no console)
console.log("Exemplos");
console.log(curso);
console.log(ano);
console.log(escola);

let produto = "TV Led";
let preco = 1499.715;
let quantidade = 3;
let total = preco * quantidade;

console.log(produto);
console.log(preco, quantidade);
console.log(total);

/* Função toFixed(número)
Usada para determinar quantidade
de casas decimais */
console.log( total.toFixed(2) );

/* Saída de dados estáticos e dinâmicos */

// Forma 1 (moderna): Template String
console.log(`Olá! Me chamo ${nome} e estou fazendo 
o curso de ${curso} no ${escola}`);

// Forma 2 (antiga/tradicional): Concatenação
console.log("Olá! Me chamo "+nome+" e estou fazendo o curso de "+curso+" no "+escola);
