//Los objetos van dentro {}
//Los objetos literales son como los HashMap de java, key:value
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    //Se pueden anidad otros objetos
    coord: {
        lat: 34.034,
        lon: -118.70
    },
    //Incluso se puede agregar arreglos
    trajes: ['Mark I','Mark V','HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'Ultima-pelicua': 'Infinity',
    //Es mas recomendable usar ultimaPelicua, ultima_pelicual, ultima$pelicua
};

//Por estandar al imprimir las propiedades de un objeto, se muestran de forma alfabetica
console.log(personaje);
//Imprimir una propiedad
console.log('Nombre: ',personaje.nombre);
//Tambén se puede así
console.log('Nombre: ',personaje['nombre']);
//De un objeto anidado
console.log('Coors lat', personaje.coord.lat);

//Length del arreglo
console.log('No. Trajes', personaje.trajes.length);

//Mas detalle
//Literalmente borrar una propiedade de un objeto
//Colocar la palabra delete antes de la propiedad que queremos borrar
delete personaje.edad;

//Agregar una propiedad al objeto. La propiedad casado no existe, aquí se agrega
personaje.casado = true;

//convertir el objeto en Array que este conformado por par-valor
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Bloquear las propiedades del objeto
Object.freeze(personaje);
//Esto no se agrega porque esta el freeze
personaje.dinero = 1000;

//Obtener un arreglo de las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames(personaje);
//Obtener un arreglo de los valores de las propiedades 
const valores = Object.values(personaje);

