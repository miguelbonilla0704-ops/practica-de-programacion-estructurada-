const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", function(nombre) {
    rl.question("Ingrese las horas trabajadas: ", function(horas) {
        rl.question("Ingrese el pago por hora: ", function(pago) {

            horas = parseFloat(horas);
            pago = parseFloat(pago);

            let salario = horas * pago;

            console.log("\nNombre del empleado: " + nombre);
            console.log("Salario semanal: $" + salario);

            rl.close();
        });
    });
});