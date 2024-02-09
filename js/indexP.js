"use strict";

/*for (inicialización; condición; expresión de actualización) {
  // Bloque de código a repetir
}*/

/*
Inicialización: Se ejecuta una vez al comienzo del bucle y se utiliza para inicializar un contador o cualquier variable necesaria.

Condición: La condición se evalúa antes de cada iteración. Si la condición es verdadera, el bloque de código dentro del bucle se ejecuta. Si es falsa, el bucle se detiene.

Expresión de actualización: Se ejecuta después de cada iteración del bucle y generalmente se utiliza para actualizar el contador o realizar otras operaciones necesarias.

El bucle for es especialmente útil cuando se sabe de antemano cuántas veces se debe ejecutar el bloque de código. Ayuda a simplificar el código y hacerlo más legible.

Aquí hay un ejemplo simple que utiliza un bucle for para imprimir los números del 1 al 5 en la consola:*/



/* --> Ciclo For <-- */
/*Ejemplo repetición de 5 veces
for (let i = 0; i < 5; i++) {
  console.log(i);
}


for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
*/

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
*/

/*
let msg = "Hola chicharrin";

let resultado = 0;

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

console.log(resultado);

// x / 2 = entero es divisible entre 2*/

// for El bucle `for` es una estructura de control de flujo que se utiliza para repetir un bloque de código un número determinado de veces
/*
for (let i = 100; i <= 1; i--) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par");
  } else {
    console.log(i + " Es un numero impar");
  }
}
*/

/*
while (i > 0) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par");
  } else {
    console.log(i + " Es un numero impar");
  }
  i--;
}
*/
/*
let miArreglo = ["Rich", "email@email.com", "1234"]; // BUENA PRACTICA

          //numero  string numero
let miArreglo = [120, "+", 50];   // MALA PRACTICA TEMA DE COMILLAS
*/
/*
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Acceder a un elemento del arreglo
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2
console.log(numeros[2]); // 3
console.log(numeros[3]); // 4
console.log(numeros[4]); // 5
*/
/*
let palabras = ["Hola", "Mundo", "Adiós"];

console.log(palabras);
console.log(palabras[0]);
console.log(palabras[1]);
console.log(palabras[2]);
*/
