const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdoutw
 });

rl.question("Ingrese el nombre del producto: ", function(producto) {

    rl.question("Ingrese el precio unitario: ", function(precio) {

        rl.question("Ingrese la cantidad: ", function(cantidad) {

            precio = Number(precio);
            cantidad = Number(cantidad);

            const productoMayusculas = producto.toUpperCase();

            const primerasTres = producto.slice(0, 3);

            const precioTotal = precio * cantidad;

            console.log("Producto en mayúsculas: " + productoMayusculas);
            console.log("Primeras 3 letras: " + primerasTres);
            console.log("Precio unitario: $" + precio.toFixed(2));
            console.log("Cantidad: " + cantidad);
            console.log("Precio total: $" + precioTotal.toFixed(2));

            rl.close();
        });
    });
});