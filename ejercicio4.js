// Taller/laboratorio práctico
// Programación Orientada a Objetos en JavaScript

// Ejercicio 4: Control de Estados Modificables - Biblioteca

function Libro(titulo, autor, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.prestado = false;
    this.prestar = function() {
        if (this.prestado === false){
            this.prestado = true;
            console.log(`✅ Préstamo exitoso del libro "${this.titulo}"`);
        } else {
            console.log(`🚨 Ya está prestado el libro "${this.titulo}"`);
        }
    }
    this.devolver = function() {
        if (this.prestado === true) {
            this.prestado = false;
            console.log(`📖 Devuelto exitosamente el libro "${this.titulo}" `);
        } else {
            console.log(`⚠️  Error: El libro "${this.titulo}" no se ha prestado`);
        }
    }
}

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", "fábula filosófica");

libro1.prestar();
libro1.prestar();
console.log(" ");
libro1.devolver();
libro1.devolver();
console.log(" ");
libro1.prestar();
libro1.devolver();