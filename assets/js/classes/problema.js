
const roger = {
    nombre : 'Rogelio',
    edad:    30,
    impirmir (){
          /*  
            Esta forma no funciona porque la propiedad nombre no existe en este scope. 
            console.log(`Nombre: ${nombre}`);
          */

         /*  
            Esta forma funciona, pero  NO SE RECOMIENDAD, porque condiciona a que tengamos que hacer
            referencia con el nombre de nuestra variable y es muy facil que pueda haber error al escribir.
            console.log(`Nombre: ${roger.nombre}`);
          */

          /*Cuando queramos hacer referencia al mismo objeto se recomienda usar la palabra reservada this */

          console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);

    }
}

const pedro = {
    nombre : 'Pedro',
    edad:    8
}

roger.impirmir();

//Antes del ECMAScript 6, para simular la creación de objetos se hacia lo siguiente:

/*
    Se crea una function pero con UpperCamelCase (no es obligatorio), para indicar que crearemos
    instnacias (usaremos la palabra reservada new).

    El problema con esta forma es que si no se tiene bien documentado el código, otros programadores no
    sabran que deben usar la palabra reservada new ( existen formas de validar eso, pero ya no se recomienda
    trabajar de esta forma).

    Otros problemas son que no puede haber propiedades privadas, estaticas o extenderlo.

*/
function Persona (nombre, edad){

    //Aquí el this apunta a la función Persona, así es como esta asignando los valores.
    this.nombre = nombre;
    this.edad   =  edad;

    this.impirmir = function (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }

}

//Crear una nueva instancia de persona
const maria = new Persona('María', 23);
const tete  = new Persona('Telesa',32);

/*
  Ahora María es "algo", un objeto que tiene de tipo persona.
  Al imprimir en la consola veremos que tiene _proto_ dentro de sus propiedades.
  _proto_ = prototype: Esto indica que el objeto sabe de quien depende o de quien ha heredado. Se 
  puede decir que es el ADN (indica que de donde viene) del objeto. Lo recomendado ahora usar clases
  porque es mas complicado trabajar con prototype.
  */

console.log(maria);