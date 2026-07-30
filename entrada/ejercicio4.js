const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function(precio) {
    rl.question("Ingrese la cantidad: ", function(cantidad) {

        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);

        let total = precio * cantidad;

        console.log("Total a pagar: $" + total);

        rl.close();
    });
});