//declaración de un String
let nombre = 'Peter Parker';
console.log(nombre);

//Otras formas de declarar String
nombre = "Tía May";
nombre = `tia May`; //backtip con option + ]

//Si queremos saber el tipo de dato que esta 
//infiriendo JS podemos usar typeof
console.log(typeof nombre);

//declaración de un Boolean
let esMarvel = false; // con minusculas y sin comillas (Si no seria un String)

//declaración de number
let edad = 33;

//undefined
let superPoder;
console.log(typeof superPoder);


//null
let souyNull = null;
console.log(typeof souyNull);

//Declaración de tipo simbol

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(symbol1 === symbol2); // retorna false