/* Array 
Relação de dados indexados.
Também conhecido como vetores
ou matrizes. 

Finalidade deste recurso é armazenar
uma série de dados num mesmo espaço 
de memória. */

// Exemplos
let alunos = ["Raphael", "Thiago", "Kaiky"];

console.log(alunos);

// Acessando o dado pelo índice
console.log(alunos[1]); // Thiago
console.log(alunos[0]); // Raphael

/* Mini-exercício:
- Crie um array com uma lista de 5 comidas
que você mais gosta
- Exiba no console uma mensagem dizendo qual
o nome da terceira e da última comida. */



let comidas = ["Macarrão", "Lasanha ", "Baião de dois", "Feijoada", "Arroz de Forno"];

console.log(comidas);

console.log(comidas[2]);
console.log(comidas[4]);

console.log(`A terceira comida que mais gosto é: ${comidas[2]} e também ${comidas[4]}`);


console.log("-----------------");

// Matriz de 2 dimensões 
let tecnologias = [
    ["HTML", "CSS", "JS"], 
    ["PHP", "Node", "Java", "SQL"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias);
console.log(tecnologias[0][2]); // JS
console.log(tecnologias[1][1]); // Node
console.log(tecnologias[2][1]); // Pothoshop



