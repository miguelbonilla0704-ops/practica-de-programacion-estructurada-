const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

rl.question("Ingrese su nombre completo: ", function(nombre) {

    const nombreMayusculas = nombre.toUpperCase();

    
    const primerasCuatro = nombreMayusculas.slice(0, 4);

    const nombreMinusculas = nombre.toLowerCase();

    console.log("Nombre original: " + nombre);
    console.log("Nombre en mayúsculas: " + nombreMayusculas);
    console.log("Primeras 4 letras: " + primerasCuatro);
    console.log("Nombre en minúsculas: " + nombreMinusculas);

    rl.close();
});