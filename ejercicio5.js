// Taller/laboratorio práctico
// Programación Orientada a Objetos en JavaScript

// Ejercicio 5: Registro interactivo - Concesionario de Vehículos
const prompt = require('prompt-sync')();

// Datos de ejemplo: 
// modelo: AKT NKD 125, tipo: moto, color: negro, fuenteEnergia: gasolina, precio: 4990000
// modelo: Tesla Model Y, tipo: camioneta, color: rojo, fuenteEnergia: electrico, precio: 119990000
// modelo: Toyota Corolla, tipo: carro, color: gris, fuenteEnergia: hibrido, precio: 109500000

// DATOS LOGIN: usuario: tu-nombre, contraseña: 123

// inicio-login
console.log("⚙️  ═══════════ 🛞  MOTORS CENTER 🛞  ═══════════ ⚙️");
let vendedor = prompt("Usuario: ").toUpperCase().trim().replace(/ /g, "");
while (!isNaN(vendedor)) {
    console.log("⚠ Carácter inválido");
    vendedor = prompt("Escribe el usuario de nuevo: ").toUpperCase().trim().replace(/ /g, "");
}

const contrasena = 123;
let intento = Number(prompt("Contraseña: "));
while (intento !== contrasena) {
    console.log("Contraseña incorrecta");
    intento = Number(prompt("Escribe la contraseña de nuevo: "));
}
console.log(`⭐​ Sesión iniciada correctamente. Bienvenid@ ${vendedor} ⭐`);

// inventario - registro de automóviles

function Vehiculo(modelo, tipo, color, fuenteEnergia, precio) {
    this.modelo = modelo;
    this.tipo = tipo;
    this.color = color;
    this.fuenteEnergia = fuenteEnergia;
    this.precio = precio;
    this.vendido = false;
    this.vender = function() {
        if (this.vendido === false) {
            this.vendido = true;
            console.log("Su venta ha sido registrada correctamente 🎉");
        } else {
            console.log("Este vehículo ya se vendió 🚗");
        }
    }
    this.filtrarTipo = function(regTipo) {
        if (regTipo === this.tipo) {
            return true;
        } else {
            return false;
        }
    }
    this.mostrarFicha = function() {
        console.log(`
 ┌───────────────────────────────────────
    ⚙️  Modelo: ${this.modelo}                
 ├───────────────────────────────────────
 ├─ 🛞  Tipo: ${this.tipo}                  
 ├─ 🎨 Color: ${this.color}
 ├─ ⚡ Energía: ${this.fuenteEnergia}
 ├─ 💰 Precio: $${this.precio.toLocaleString()}
 ├─ 🛒 Vendido: ${this.vendido}
 └───────────────────────────────────────
    `);
    }
}

let inventario = [];
let opcion;

do {
    console.log(`
 ┌───────────────────────────────────────┐
 │         🛞  MOTORS CENTER 🛞            │
 ├───────────────────────────────────────┤
    👤 Usuario: ${vendedor}               
 ├───────────────────────────────────────┤
 │  🏠 Inicio                        ▼   │
 │  🧾 Facturación                   ▼   │
 │                                       │
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ▓ 📋 INVENTARIO ELECTRÓNICO        ▲  ▓
  ▓─────────────────────────────────────▓
  ▓  ├─ Registrar vehículo  [ 1 ]       ▓
  ▓  ├─ Vender vehículo     [ 2 ]       ▓
  ▓  ├─ Filtrar por tipo    [ 3 ]       ▓
  ▓  └─ Mostrar inventario  [ 4 ]       ▓
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 │  📤 Salir                [ 5 ]        │
 └───────────────────────────────────────┘
`);

    opcion = Number(prompt("Elige una opción (1-5): "));
    if (opcion === 1) {
        console.log("\n🛞  ═══════════ REGISTRAR VEHÍCULO ═══════════ 🛞")
        let regModelo = prompt("Modelo: ");
        let regTipo = prompt("Tipo: ");
        let regColor = prompt("Color: ");
        let regFuenteEnergia = prompt("Fuente de energía: ");
        let regPrecio = Number(prompt("Precio (en número sin puntos): "));
        inventario.push(new Vehiculo(regModelo, regTipo, regColor, regFuenteEnergia, regPrecio));
        console.log("✅ Vehículo registrado con éxito en el inventario");
    } else if (opcion === 2) {
        console.log("\n🛞  ═══════════ VENDER VEHÍCULO ═══════════ 🛞")
        let regModelo = prompt("Modelo: ").toUpperCase();
        for (let i = 0; i < inventario.length; i++) {
            let modeloActual = inventario[i];
            if (modeloActual.modelo.toUpperCase() === regModelo) {
                modeloActual.vender();
            }
        }
    } else if (opcion === 3) {
        console.log("\n🛞  ═══════════ FILTRAR TIPO ═══════════ 🛞");
        regTipo = prompt("Tipo: ");
        for (let i = 0; i < inventario.length; i++) {
            let tipoActual = inventario[i];
            if (tipoActual.filtrarTipo(regTipo) === true) {
                tipoActual.mostrarFicha();
            }
        }
    } else if (opcion === 4) {
        console.log("\n🛞  ═══════════ INVENTARIO ═══════════ 🛞");
        for (let i = 0; i < inventario.length; i++) {
            let vehiculoActual = inventario[i];
            vehiculoActual.mostrarFicha();
        }
    } else if (opcion === 5) {
        console.log("💬 Sesión cerrada correctamente");
    } else {
        console.log("\n ⚠️  Opción no válida. Intenta de nuevo.");
    }
} while (opcion !== 5);
