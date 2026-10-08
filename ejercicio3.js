// Taller/laboratorio práctico
// Programación Orientada a Objetos en JavaScript

// Ejercicio 3: Lógica de Negocio Automática - Plataforma de Cursos

function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.aprobado = this.nota >= 3.0;
    this.mostrarResultado = function() {
        if (this.aprobado === true) {
            console.log("✅ Aprobado. ¡Felicidades!");
        } else {
            console.log("❌ Desaprobado. Sigue esforzándote");
        }
    }
}

const est1 = new Estudiante("Adrián", "Décimo", 4.2);
const est2 = new Estudiante("Ariel", "Undécimo", 2.9);
const est3 = new Estudiante("Andrea", "Octavo", 3.0);
const est4 = new Estudiante("Natalia", "Noveno", 1.5);

est1.mostrarResultado();
est2.mostrarResultado();
est3.mostrarResultado();
est4.mostrarResultado();