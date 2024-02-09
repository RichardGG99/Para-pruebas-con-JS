"use strict"
/*
let arreglo = [];
for (let i = 2; i <= 100; i +=2) {
    arreglo.push(i);
    console.log(arreglo);
}
*/

/*
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < Numeros.length; i ++) {

    console.log(Arreglo);
}


let arrResultado = [];

for (let i = 1; i <= 100; i += 2) {
  arrResultado.push(i);
}

console.log(arrResultado);

 */
// Creo un array de numeros del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Creo 3  arrays vacíos 
let a = [0];
let b = [0];
let c = [0];
// Creo un array vacio para almacenar los numeros adyacentes 
let res = [];
// Utilizo el bucle for para recorrer el array de numeros 
for (let i = 0; i < numeros.length - 1; i++) {
  let numerosAdyacentes = [numeros[i], numeros[i + 1]];
  // Agrego el array de numeros adyacentes al array res
  res.push(numerosAdyacentes);
}

console.log(res);


/*
let arri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let arrResultado = [];

for (let i = 0; i < arri.length - 1; i++) {
  arrResultado.push(arri[i] + arri[i + 1]);
}

arrResultado.push(arri[arri.length - 1]);

console.log(arrResultado);
*/


