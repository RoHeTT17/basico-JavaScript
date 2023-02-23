//Reducir return de funciones

function crearPersona (nombre, apellido){
    //retornamos un objeto literal
    return {
        /*
            Desde el ECMAScript 6, cuando queremos retornar
            algo en un objeto y el nombre de la propiedad del objeto
            y el nombre de la varible que le esta dando valor a esa
            propiedad son exactamente iguales, no es necesario colocarlo
            de lasiguiente manera:
             
            nombre: nombre,
            apellido: apellido

            Se puede dejar solo con un nombre y JavaScript infiere a cual
            asignar el valor.
         */    

            nombre,
            apellido
    }
}

const persona = crearPersona('Roger','Hernandez');
console.log(persona);

//Hacerlo con función de flecha
/*
  const crearPersona2 = (nombre, apellido)=>{nombre,apellido}
  
  Esto retornaría Undefined porque las {} que estan después de la =>
  hacen referencia a al cuerpo de la función y no al del objeto lireral.
  */

// Para retornar el objeto con función de flecha se ponen parentesis
const crearPersona2 = (nombre, apellido)=>({nombre,apellido});
 
const persona2 = crearPersona2('Roger','Hernandez');
console.log(persona);

/*
  Como se menciono anteriormente en las funciones tradicionales, tenemos
  el objeto arguments.
  
  final imprimirArgumento (){
    console.log(arguments)
  }
  
  En las funcioens de flecha no existe, pero se
  puede "simular" con el parámetro REST (...) el cual le dice que con todos los 
  parámetros que sean enviados se cree un arreglo.

  Se deben tener las siguientes consideraciones al usuar el parámetro REST:
   - Después del parámetro rest no puede ir ningún otro argumento.
   - Los argumentos que esten antes del rest toman su valor según la posición
     de los parámetros enviados y ya no se consideran en el rest.

*/

const imprimirArgumento2 = (edad,...args)=>{
    console.log(args)
    return args;
}

imprimirArgumento2(25,'Holis',448,false,'Ok','No');

//Extraer la información que retorna el argument en una funcion de flecha
/*
  Se puede hacer de la siguiente manera: 

  const argumentos = imprimirArgumento2(25,'Holis',448,false,'Ok','No');
  const saludo = argumentos[0];    

  El problema radica en que lo tendríamos que hacer por cada propiedad. Existe
  la posibilidad de darles un nombre a cada posición del arreglo desde que se obtiene
  solo se deben colodar [] y dentro el nombre que queremos darle a cada posición.

  No lleva la edad porque no esta dentro del args
*/

const [saludo,id,casado,salud,alergias] = imprimirArgumento2(25,'Holis',448,false,'Ok','No'); 

/*
  Lo mismo se puede hacer con objetos. Si la función regresa un objeto, ponemos entre {} el 
  nombre de la propiedad ( como lo esta retornando en la función) que nos interesa. 
  En este caso el apellido.
 */

const {apellido} = crearPersona('Roger','Hernandez');
console.log('Apellido '+apellido);

//Cambiar el nombre de la variable ( que no se llame como regresa el objeto)
//Solo se colocan : y el nombre nuevo
const {apellido: lastName} = crearPersona('Roger','Hernandez');
console.log('Apellido '+lastName);

//Destructuración de argumentos
//Al colocar entre {} el parámetro, podemos extraer las porpiedades que
//nos interesan. Se les puede asignar un valor por defecto, como en la edad.

const imprimirPropiedades = (/*personaje*/{nombre,codeName,vivo,edad = 18,trajes}) =>{

        //En la pagina 5 de las notas se meciona porque van entre {}. Estamos convirtiendolo
        //a un objeto para cuando se imprima, se muestre nombre: nombre.
        console.log({nombre});
        console.log({vivo});
        console.log({codeName});
}

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V','HulkBuster'],
};

imprimirPropiedades(tony);