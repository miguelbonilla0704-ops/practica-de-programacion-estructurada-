const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota: ", function(nota1) {
    rl.question("Ingrese la segunda nota: ", function(nota2) {
        rl.question("Ingrese la tercera nota: ", function(nota3) {

            let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

            console.log("El promedio del estudiante es: " + promedio);

            rl.close();
        });
    });
});


