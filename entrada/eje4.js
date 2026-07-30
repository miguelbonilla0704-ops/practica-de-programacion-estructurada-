const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(producto) {
    rl.question("Ingrese el precio unitario: ", function(precio) {
        rl.question("Ingrese la cantidad comprada: ", function(cantidad) {

            let total = parseFloat(precio) * parseInt(cantidad);

            console.log("Producto: " + producto);
            console.log("Total a pagar: $" + total);

            rl.close();
        });
    });
});