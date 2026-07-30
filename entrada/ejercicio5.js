const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de dólares: ", function(dolares) {
    rl.question("Ingrese el tipo de cambio del euro: ", function(tipoCambio) {

        dolares = parseFloat(dolares);
        tipoCambio = parseFloat(tipoCambio);

        let euros = dolares * tipoCambio;

        console.log("Cantidad en euros: €" + euros);

        rl.close();
    });
});