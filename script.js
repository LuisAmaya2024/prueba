let nombre = "Luis andres";
let numero = 10;
let bandera = true;
let gravedad = 9.8;

console.log(nombre);
console.log(numero);
console.log(bandera);
console.log(gravedad);

const usario = { primerNombre: "Luis", primerApellido: "Andres", edad: 20, telefono: 1234567890 };
console.log(usario);

let animal = { nombre: "perro", raza: "labrador", edad: 5, color: "cafe", genero: "macho", alimentacion: "carnivoro" };
console.log(animal);

let persona = { nombrecompleto: "Luis", apellido: "Andres", edad: 20, telefono: 1234567890, direccion: "calle 123" };
//fragmetar el objeto persona
const { nombrecompleto, edad, telefono } = persona;
console.log(nombrecompleto);
console.log(edad);
console.log(telefono);
//Destructing Multiple 
let persona1 = { nombrecompleto: "Luis", edad: 24, estudiante: true, };
let persona2 = { nombrecompleto: "Andres", apellido: "Luis", edad: 20, estudiante: false, };
const { nombrecompleto: nombre1, apellido: apellido1, edad: edad1, estudiante: estudiante1 } = persona1;
const { nombrecompleto: nombre2, apellido: apellido2, edad: edad2, estudiante: estudiante2 } = persona2;
console.log(nombre1);
console.log(nombre2);

//Destucting anidado
let persona3 = { nomb: "perdro", direccion: { calle: "calle 123", ciudad: "Bogota" } };
const { nomb, direccion: { calle, ciudad } } = persona3;
console.log(nomb);
console.log(calle);

//Unir objetos 

//Spread Operator  
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const objetoUnido = { ...objeto1, ...objeto2 };
console.log(objetoUnido);

//object.assign 
const objeto3 = { a: 1, b: 2 };
const objeto4 = { c: 3, d: 4 };

const objetoUnido2 = Object.assign(objeto3, objeto4);
console.log(objetoUnido2);

//Manipulacion de arrays 
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const frutas = ["manzana", "pera", "mango", "fresa"];
frutas.push("uva");
frutas.unshift("sandia");
console.log(frutas);

//Interaciones 
//Map 

console.log("map");
frutas.map((fruta) => {
    console.log(fruta);
});

//For 
console.log("for");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//tor Each
console.log("forEach");
frutas.forEach((fruta) => {
    console.log(fruta);
});

//for for 
console.log("for of");
for (const fruta of frutas) {
    console.log(fruta);
}
//Funciones 
//funcion basica 
function saludar() {
    console.log("Hola");
}
saludar();

//Funcion con parametros

function mostrarMensaje(mensaje) {
    console.log("El mensaje es: " + mensaje);

}
mostrarMensaje("Hola como estas");

//funccion flecha 

const mutiplicar = (a, b) => {
    return a * b;
}
console.log(mutiplicar(2, 3));

//Condicionales

let edadpaciente = 20;
if (edadpaciente > 18) {
    console.log("El paciente es mayor de edad");
} else {
    console.log("El paciente es menor de edad");
}

//igualdad no estrica no considera el tipo

if (edadpaciente == "20") {
    console.log("El paciente es mayor de edad");

} else {
    console.log("El paciente es menor de edad");
}

//Desigualdad estricta 
if (edadpaciente !== "20") {
    console.log("El paciente es mayor de edad");

} else {
    console.log("El paciente es menor de edad");
}

//Condicionales  anidados
let tieneLicencia = true;

if (edad && tieneLicencia) {
    console.log("Puede conducir");
} else if (edad && !tieneLicencia) {
    console.log("No puede conducir");
} else {
    console.log("No puede conducir");
}
//Scope local 
function ejemplolocal() {
    var variableLocal = "123";
    console.log(variableLocal);
}
ejemplolocal();

//Scope global
var variableGlobal = "123";
function ejemploglobal() {
    console.log(variableGlobal);
}
ejemploglobal();
console.log(variableGlobal);

//QUErySelectors
var primerParrafo = document.querySelector('#contenedor p');
primerParrafo.textContent = "cambio de texto en el parrafo";

var nuevoParrafo = document.getElementById('mensaje');
nuevoParrafo.textContent = "nuevo texto en el parrafo el parrafo desde JS";

