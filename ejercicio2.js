// Taller/laboratorio práctico
// Programación Orientada a Objetos en JavaScript

// Ejercicio 2: Encapsulamiento de Comportamiento - Sistema de Veterinaria

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad; //en años
    this.peso = peso; //en KG
    this.presentarse = function() {
        return (`Hola, soy un(a) ${this.especie}, llamado ${this.nombre}, tengo ${this.edad} años y peso ${this.peso} KG. ¡Me gusta mucho estar aquí! ☺`)
    }
}

const mascota1 = new Mascota("Kyle", "perro", 2, 10);
const mascota2 = new Mascota("Pepi", "iguana", 3, 3);
const mascota3 = new Mascota("Rett", "tortuga", 1, 1);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());