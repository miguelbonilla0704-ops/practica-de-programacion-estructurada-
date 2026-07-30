const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas: ", function(horas) {

    let minutos = parseFloat(horas) * 60;

    console.log(horas + " horas equivalen a " + minutos + " minutos.");

    rl.close();
});