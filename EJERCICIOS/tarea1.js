// Declaración de variables
const radio = 5;
const PI = 3.14159;

// Cálculos
const perimetro = 2 * PI * radio;
const area = PI * Math.pow(radio, 2);

// Salida en consola redondeada a 2 decimales
console.log("Radio: " + radio);
console.log("Perímetro: " + perimetro.toFixed(2));
console.log("Área: " + area.toFixed(2));