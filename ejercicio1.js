// Taller/laboratorio práctico
// Programación Orientada a Objetos en JavaScript

// Ejercicio 1: Moldeado de Inventario - Tienda de Tecnología

function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const compu1 = new Computador("Asus", "AMD Ryzen 7 170", "16 GB", "2321946");
const compu2 = new Computador("HP", "Intel Core i3", "8 GB", "1899000");
const compu3 = new Computador("Lenovo", "AMD Ryzen 5", "8GB", "1899070");

console.log(compu1);
console.log(compu2);
console.log(compu3);