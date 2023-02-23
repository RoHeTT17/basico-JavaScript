//Formas de declarar funciones

//1. Clasica. Esta forma no se recomienda si estamos usando var para 
//declarar variables, porque podemos sobre escribir y esto marca
//un error raro. 
//1. Usar la palbra reservada function
//2. Nombre de la función
function saludar(){
    console.log('Hola mundo');
}

//2. Como una función anonima. Es anonima porque no tiene nombre.
//Esta función ahora responde al usar el saludar2.
//Gracias al const evitamos sobreescribilar
const saludar2 = function (){
    console.log('Hola mundo');
}

//3. Con argumentos
function saludarA(nombre){
    console.log('Hola '+nombre);
}

//3.1. Con argumentos
const saludarA2 = function (nombre){
    console.log('Hola ' +nombre);
}

//En las function clasicas (las que tiene la plabra xplicita function),
//tienen un objeto implicito llamado arguments, en el cual se recibe
//todos los argumentos que se mandan la función aunque no esten
//definidos como parámetros.

function saludarArguments(nombre){
    console.log(arguments);
    console.log('Hola '+nombre);
}

saludarArguments('Roger', 23, false);

//Funciones de flecha o lambda ( fueron agregadas en el 2015)
const saludarFlecha = () =>{
    console.log('Hola flecha');
}

//Con argumentos
//Cuando lleva argumentos, los parentesis en los que van los 
//argumentos son opcionales, es buena practica dejarselo.
const saludarFlecha2 = (nombre) =>{
    console.log('Hola flecha '+ nombre);
}

function saludarReturn(nombre){

    //return 1,2; // Esto no sirver no regresa los dos valores

    //Para regresar varios valores
    return[1,2];
}

console.log(saludarReturn[0],saludarReturn[1]);

function getAleatorio (){
    return Math.random();
}

console.log('Aleatorio '+ getAleatorio());

const getAleatorio2 = ()=> Math.random();
console.log('Aleatorio2 '+ getAleatorio2());

