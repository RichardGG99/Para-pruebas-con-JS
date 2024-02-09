
"use strict";
/*
let edad = prompt("Por favor ingresa tu edad");

// Convertir la entrada a un número (ya que prompt devuelve una cadena)
edad = parseInt(edad);

if (edad === 18) {
    alert("Eres mayor de edad " + edad);
    alert("Puedes votar");
    alert("Puedes conducir");
} else {
    alert("No cumples con los requisitos de edad para votar o conducir");
}
*/

/* --> Sentencias Condicionales <-- */

/*
if (condicion1) {
    // Código si condicion1 es verdadera
} else if (condicion2) {
    // Código si condicion1 es falsa y condicion2 es verdadera
} else {
    // Código si ninguna de las condiciones anteriores es verdadera
}
*/

/*
 if (condicion) {
 	// Bloque de código Se ejecuta si la condición es verdadera.
 } else {
 	// Bloque de código Se ejecuta si la condición es falsa.
 }
*/

// Estás declarando una variable llamada edad y asignándole el valor de 18. Esta variable representa la edad de una persona.
/*
let edad = 18;

if (edad === 18) {
// Bloque de código ejecutado si la condición es verdadera

  console.log("Eres mayor de edad");
  console.log("Puedes votar");
  console.log("Puedes conducir");
} else {
// Bloque de código ejecutado si la condición es falsa
  console.log("Eres menor de edad");
}
//Aquí estás utilizando una estructura if-else para evaluar la edad. Si la edad es igual a 18 
//(usando el operador de igualdad estricta ===), se ejecutarán las instrucciones dentro del 
//primer bloque (dentro de {}). En caso contrario, se ejecutarán las instrucciones dentro del bloque else.
*/


// let banderaError = true;
//Aquí se crea una variable llamada banderaError y se le asigna el valor true. 
//Esta variable actúa como un indicador o interruptor, 
//que se utilizará para controlar el flujo del programa.
/*
if (banderaError) {
  //Se inicia una estructura condicional if. La condición dentro del paréntesis es banderaError, 
  //por lo que el bloque de código dentro del if se ejecutará si banderaError es verdadero (true).
  console.log("Error");
  banderaError = false;
  //si la condición del if es verdadera, se imprime en la consola el mensaje "Error". Después, 
  //la variable banderaError se actualiza a false. Esto significa que en la próxima ejecución 
  //del código, el bloque else se ejecutará.
} else {
  console.log("Todo bien");
  banderaError = true;
  //Si la condición del if es falsa, el programa ejecutará el bloque de código dentro del else. 
  //n este caso, se imprime en la consola el mensaje "Todo bien". Luego, 
  //la variable banderaError se actualiza a true, cambiando su valor para la siguiente ejecución.
}
console.log(banderaError);
//Después de ejecutar el bloque if o else, se imprime en la consola el valor actual de banderaError. 
//Esto te mostrará si la bandera está actualmente establecida en true o false después de la ejecución del bloque condicional.
*/

/*let cadena = "o";
console.log(cadena);

if (cadena) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo");
}*/

/*
let cadena = "";  //eh declarado un valor a la variable de nombre "cadena" y por ende se activa la condicion if pero si no hay ningun valor declarado se ejecuta el bloque else
//Se declara una variable llamada cadena y se le asigna el valor "o". En este caso, la cadena contiene un carácter "o".
console.log(cadena);
//Se imprime en la consola el valor de la variable cadena. En este caso, imprimirá la letra "o".
if (cadena) {
//Se inicia una estructura condicional if. La condición en los paréntesis es cadena, lo que significa que se evalúa si la cadena es verdadera o no. En JavaScript, una cadena no vacía se considera verdadera.
  console.log("Bloque Positivo");
//Si la condición del if es verdadera, se ejecuta este bloque de código, que imprime en la consola el mensaje "Bloque Verdadero".
} else {
  console.log("Bloque Negativo");
}
//Si la condición del if es falsa, se ejecuta este bloque de código dentro del else, que imprime en la consola el mensaje "Bloque Negativo"
*/

/* Valores Falsy */
/* Valores verdaderos */

// false: El valor booleano falso en sí mismo.
// 0:  El número cero.
// " o "": (cadena vacía): Una cadena de texto vacía.
// null: Representa la ausencia de valor.
// undefined: Indica que una variable no ha sido definida.
// NaN: Representa un resultado no numérico.

/* Valores Truthy */
/* Valores verdaderos */
// true
// 1
// " "
// "a"

/*
let pseudoNumero = -0;
console.log(pseudoNumero);
//Evaluacion de estructura condicional
if (pseudoNumero) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo");
}
*/


// Este bloque de codigo comprueba si es mayor o menor de edad
/*
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
*/


/* El signo de exclamación (!) niega el valor de una variable  o  viceversa.*/
/*
let banderaError = true; // true
banderaError = !banderaError; // banderaError = false
console.log(banderaError); // false
if (banderaError) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo"); // Se ejecuta
}
*/
/*
let animal = "serpiente"; // animal -> "serpiente"
if (animal === "perro") {
  console.log("Es un perro");
} else if (animal === "gato") {
  console.log("Es un gato");
} else if (animal === "rata") {
  console.log("Es una rata");
} else {
  console.log("animal no reconocido"); // Se ejecuta
}
*/
/*
let animal = "serpiente"; // Se declara y asigna el valor "serpiente" a la variable 'animal'
if (animal === "perro") { // Comprueba si 'animal' es igual a "perro"
  console.log("Es un perro"); // No se ejecuta
} else if (animal === "gato") { // Si no es "perro", comprueba si 'animal' es igual a "gato"
  console.log("Es un gato"); // No se ejecuta
} else if (animal === "rata") { // Si no es "perro" ni "gato", comprueba si 'animal' es igual a "rata"
  console.log("Es una rata"); // No se ejecuta
} else {
  console.log("animal no reconocido"); // Si ninguna de las condiciones anteriores es verdadera, se ejecuta este bloque
}
*/

/*
let animal = "conejo"; //Se declara una variable llamada animal y se le asigna el valor de la cadena de texto "conejo".
//Se utiliza una estructura de control if-else if-else para evaluar 
 if (animal === "perro") { //El primer if verifica si animal es igual a "perro". Si es cierto, se ejecuta el bloque de código dentro de ese if. En este caso, la condición es falsa (animal es "conejo"), por lo que se pasa al siguiente else if
  console.log === ("Es un perro");
 } else if (animal === "gato") { //El segundo else if verifica si animal es igual a "gato". Si es cierto, se ejecuta el bloque de código dentro de ese else if. En este caso, también la condición es falsa.
  console.log("Es un gato");
 } else if (animal === "rata") { //El tercer else if verifica si animal es igual a "rata". Si es cierto, se ejecuta el bloque de código dentro de ese else if. Nuevamente, la condición es falsa
  console.log("Es una rata");
 } else if (animal === "serpiente") { //El cuarto else if verifica si animal es igual a "serpiente". Si es cierto, se ejecuta el bloque de código dentro de ese else if. Una vez más, la condición es falsa.
  console.log("Es una serpiente");
 } else if (animal === "conejo") { //El quinto else if verifica si animal es igual a "conejo". En este caso, la condición es cierta, y se ejecuta el bloque de código dentro de ese else if, que imprime en la consola "Es un conejo".
  console.log("Es un conejo");
 }else { //Si ninguna de las condiciones anteriores es verdadera, se ejecuta el bloque de código dentro del else, que imprime en la consola "animal no reconocido"{}
  console.log("animal no reconocido");
 }
*/

/* Operadores Lógicos */
/*
// && -> AND (Y) Condición1 && Condición2
// || -> OR (O)  || Condición1
// ! -> NOT (Negación)
*/

// Tengo que prestar mas atencion a este codigo y jugar con el
/*
let pastilla1 = "verde"; // pastilla1 -> "verde"
let pastilla2 = "azul"; // pastilla2 -> "roja"
if (pastilla1 === "roja" && pastilla2 === "azul") {
  console.log("Caja Especial");
} else if (pastilla1 === "azul" || pastilla2 === "azul") {
  console.log("Caja Azul");
} else if (
  (pastilla1 === "roja" && pastilla2 === "roja") ||
  pastilla1 === "verde"
) {
  console.log("Caja Roja"); // Se ejecuta
} else {
  console.log("Caja Normal");
}


/*
Ficha1 = 11 Ficha1 = 11
Ficha2 = 12 Ficha2 = 21
Ficha3 = 13 Ficha3 = 31

Ficha1 = 21 Ficha1 = 12
Ficha2 = 22 Ficha2 = 22
Ficha3 = 23 Ficha3 = 32

Ficha1 = 31 Ficha1 = 13
Ficha2 = 32 Ficha2 = 23
Ficha3 = 33 Ficha3 = 33
*/
