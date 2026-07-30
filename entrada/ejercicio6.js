const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un dato: ", function(dato) {

    let numero = parseFloat(dato);
    let resultado = isNaN(numero);

    console.log("Dato ingresado: " + dato);
    console.log("Resultado de parseFloat(): " + numero);
    console.log("Resultado de isNaN(): " + resultado);

    rl.close();
});