const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

rl.question("Ingrese su año de nacimiento: ", function(anioNacimiento) {

    anioNacimiento = Number(anioNacimiento);

    const fechaActual = new Date();

    const anioActual = fechaActual.getFullYear();

    const edad = anioActual - anioNacimiento;

    console.log("Año actual: " + anioActual);
    console.log("Año de nacimiento: " + anioNacimiento);
    console.log("Tu edad aproximada es: " + edad + " años.");

    rl.close();
});