const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function(precio) {
    rl.question("Ingrese el porcentaje de descuento: ", function(descuento) {

        precio = parseFloat(precio);
        descuento = parseFloat(descuento);

        let valorDescuento = precio * descuento / 100;
        let precioFinal = precio - valorDescuento;

        console.log("\nValor del descuento: $" + valorDescuento);
        console.log("Precio final: $" + precioFinal);

        rl.close();
    });
});