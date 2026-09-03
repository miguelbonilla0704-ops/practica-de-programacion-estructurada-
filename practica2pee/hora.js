// TAREA 4: Información completa de fecha y hora

const { clear } = require("node:console");

let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();

let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log("Hoy es " + dia + "/" + mes + "/" + anio);
console.log("Y son las " + hora + ":" + minutos + ":" + segundos);