const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base: ", function(base) {
    rl.question("Ingrese la altura: ", function(altura) {

        let area = parseFloat(base) * parseFloat(altura);

        console.log("El área del rectángulo es: " + area);

        rl.close();
    });
});