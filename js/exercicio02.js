let valorEmDolares = 1000;


function converteMoeda(valor){
    return valor * 4.94;
}

let valorConvertido = converteMoeda(valorEmDolares);


console.log(
    `Valor em dólares: ${valorEmDolares}`
);

console.log(
    `Valor em reais (convertido): ${valorConvertido}`
);

