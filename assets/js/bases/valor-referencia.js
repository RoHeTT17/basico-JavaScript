//Cuanto estamos trabajando con primitivos cualquier tipo de 
//asignación incluso cuando se manda como argumento, se manda
//por valor (no es el mismo lugar en memoría)
let a = 10;
let b = a;

console.log(a,b);

//En JavaScript todos los objetos son pasados por referencia(mismo lugar en memoria)

let juan = {nombre: 'juan'};
let ana  = juan;
ana.nombre='Ana';

//los dos imprimen Ana
console.log(juan,ana);

const cambiarNomnre = (persona) =>{
    persona.nombre = 'Roger';

    return persona;
}

let peter = {nombre: 'Peter'};
let tonyB = {nombre: 'tony'};
//Los dos imprimen Roger
console.log(peter,tonyB);

//Para romper la referencia podemos usar el operador spread
//el cual sirve para separar todas las propiedades y
//valores de un objeto
let romper = {...juan}
/*
 Se le llama operador rest cuando se coloca como argumento después
 de los () y lo que hace es que une todos los argumentos en una sola
 variable y transformalo en un arreglo.

 Cuando se usa en cualquier otro lugar es el operador spread y
 simboliza que separe los elementos y rompe la referencia. Por
 lo que lo podemos usar para crear copias de objetos.

 Para romper la referencia cuando estamos usando una función
 solo se debe convertir el parámetro en un objeto osea ponerlo
 entre {} y ahora si usar el operador spread.

const cambiarNomnre = ({...persona}) =>{
    persona.nombre = 'Roger';

    return persona;
}

*/

//Con Arreglos

const frutas = ['Manzana','Pera','Mango'];
const otrasFrutas = frutas;

//Agregar otro elemento a lista
otrasFrutas.push('Mango');

//console.table(frutas, otrasFrutas);

//Para romper la referencia en este caso:
const otrasFrutas2 = [...frutas];
otrasFrutas2.push('Sandia');
console.table({frutas, otrasFrutas2});

//Otra forma es usar el slice, el cual retorna un nuevo
//arreglo por lo que estamos rompiendo la referencia

const frutas3 = frutas.slice();