"use strict";
 // O uso estricto es una declaracion para activar el modo estricto implica que sean visibles  los errores 
 // lo cual ayuda a detectar y prevenir errores y que se vuelvan mas grandes


 //LET es una palabra clave para declarar variables

//let msg = "Hola chicharrin";

//let resultado = 0;

//Un ciclo for es una estructura que se usa para repetir un numero especifico de veces
// es util para recorrer elementos de una lista o realizar calculos repetitivos

/* --> Ciclo For <-- */
/*Ejemplo repetición de 5 veces
for (let i = 0; i < 5; i++) {
  // Inicio; Condicion; actualizacion
  console.log(i);
}


for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}
*/
let i = 0;
while (i < 10) {
   console.log(i);
   i += 3;
}
/* --> En una variable del tipo string
 * Se tiene el atributo .length que nos
 * devuelve el número de caracteres de la
 * cadena
 * <-- */
/*
for (let i = 0; i < msg.length; i++) {
  console.log(i);
}

for (let i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}


for (let i = 0; i < msg.length; i++) {
  // Evaluar si es consonante o vocal
  if (
    msg[i] == "a" ||
    msg[i] == "e" ||
    msg[i] == "i" ||
    msg[i] == "o" ||
    msg[i] == "u"
  ) {
    //console.log("Vocal");
    resultado++;
  } else {
    //console.log("Consonante");
  }
}
*/
//console.log(resultado);

// x / 2 = entero es divisible entre 2
/*

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par, O"); // Si el residuo es 0 el número es par
  } else {
    console.log(i + " Es un numero impar, X"); // Si el residuo es 1 o cualquier número, el número es impar
  }
}

let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par, O");
  } else {
    console.log(i + " Es un numero impar, X");
  }
  i++;
}


*/
// Mismo ejercicio pero el Ciclo For al revés.
/*
for (let i = 100; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par, O"); // Si el residuo es 0 el número es par
  } else {
    console.log(i + " Es un numero impar, X"); // Si el residuo es 1 o cualquier número, el número es impar
  }
}
*/

// Dentro de un bucle for, poner el numero de iteración pero con x. Del 1 al 10

/*
let msg = "";

for (let i = 1; i <= 10; i++) {
  msg += "X";
  console.log(msg);
}

for (let i = 10; i >= 1; i--) {
  msg = msg.replace("X", "");
  console.log(msg);
}
*/
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/
/*
let msg = 0;

while (msg < 10) {
    msg = msg + 1;
    console.log(msg);
}
*/

/*
let Resultado = "";

let i = 0;

while (i < 5) {
  i = i + 1;
  //concatenar resultado a I
  Resultado = Resultado + i; //"1234"
}

console.log(Resultado); // "1234"
*/
/*
let resultado = "";
let i = 0;

do {
  i = i + 1;
  if (i % 2 === 1) {
    continue;
  }
  resultado = resultado + i;
} while (i < 10);

console.log(resultado);
*/
/*
for (let i = 0; i < 10; i++) {
  console.log("vuelta n° " + i);
}
*/
/*
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}
*/
/*
for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
  if (!'aeiou'.includes(letra)) {
      console.log(letra);
  }
}
*/

// Algoritmo simple

//declarando 2 variables de nombre numero con el valor de 6 y 5
/*
let numero1 = 6;
let numero2 = 5;
 
// Poniendo nombre a la funcion
SumarNumeros(numero1, numero2);

//declarando funcion
function SumarNumeros(numero1, numero2) {

//sumar los 2 numeros
  let resultado = numero1 + numero2;

//mostrar el resultado en la consola
    console.log(resultado);
}
*/

//sintaxis basica del if y else
/*
let fruta = "sandia";
if (fruta === "manzana") {
  console.log("la fruta es roja");
} else if (fruta === "platano") {
  console.log("la frutaes amarilla");
} else if (fruta === "kiwi") {
  console.log("la fruta es verde");
} else if (fruta === "naranja") {
  console.log("la fruta es naranja");
} else {
  console.log("la fruta no esta registrada");
}
*/
