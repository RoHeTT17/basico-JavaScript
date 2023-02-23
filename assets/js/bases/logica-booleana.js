const regresaTrue = ()=>{
    console.log('regresa true');
    return true;
}

const regresaFalse = ()=>{
    console.log('regresa false');
    return false;
}

//console.warn Muestra como un Warning en la consola
console.warn('Not o la negación');

console.log(!regresaFalse());

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true);
console.log(true && !false);

//Disparar acciones solo si la primera condición se cumple
//El orden en la condinción And (&&) es muy importante, si el
//valor a la izquierda ya retorna false, no sigue evaluando las demas condiciones
console.log('=====Orden And ======');
console.log(regresaFalse() && regresaTrue ()); //regresa false y solo se ejecuta la primera función
console.log(regresaTrue() && regresaFalse()); //regresa false, pero si se ejecutan ambas funciónes

//También se puede poner sin un if 
regresaFalse() && regresaTrue ();

console.warn('OR');  //por lo menos una condición debe retornar true se leconce en ingles como pipe
console.log (true || false); //Retorna true

//Muy parecido a lo que hace el And, el orden importa, cuando una de las condiciones retorna
//true, no sigue evluando las demás.
console.log(regresaFalse() || regresaTrue ()); //regresa false
console.log(regresaTrue()  || regresaFalse()); //regresa true

//36. Pro tip: Asignaciones con operadores.

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = falso;

//En este ejemplo a1 sería igual a Hola mundo porque asigna el ultimo valor
const a1 = true && 'Hola Mundo';
//Aquí a2 sería false, porque se aplican las mismas reglas, si en un And hay un false,
//no continua evaluando
const a2 = false && 'Hola Mundo';

//a3 es igual a Ya no soy falso, porque sigue las reglas del or, si hay un true no continua evaluando.
const a3 = soyFalso || 'Ya no soy falso';