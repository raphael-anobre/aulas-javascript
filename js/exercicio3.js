const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let palpiteDigitado = parseInt(campoPalpite.value);
    resultado.innerHTML = `Palpite: ${palpiteDigitado}`;

    /* Se o palpite digitado pelo usuário
    for igual ao número aleatório que o jogo gerou */
    if (palpiteDigitado == numeroAleatorio) {
        // Então acertou!
        resultado.innerHTML = "Acertou! 😍";
        resultado.style.color = "blue";
        /* Senão, se o palpite digitado for menor que zero
        OU maior que 10 */
    } else if (palpiteDigitado < 0 || palpiteDigitado > 10) {
        // Então informar que os valores precisam ser entre 0 e 10
        resultado.innerHTML = "Digite um valor entre 0 e 10! 😱";
        resultado.style.color = "orange";

    }
    else {
        // Senão, errou!
        resultado.innerHTML = "Errou! 💩";
        resultado.style.color = "red";
    }
});



/* Gerar valores entre 0 e 10 (sem casa decimal) */
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);







