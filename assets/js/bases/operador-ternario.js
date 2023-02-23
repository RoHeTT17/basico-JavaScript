/** 
 * Días de semana abrimos a las 11,
 * Pero los fines de semana abrimos a las 9
*/

//Un usuario entra al sitio web un domindo a las 10:00 am. para
//consultar si está abierto el día de hoy....
//0:domingo

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, Hoy abrimos a las xx

//Sin conocer el ternario
/*
  Esta linea se puede simplificar por [0,6].includes(dia).
  includes es un método que existe en los arreglos y lo que hace
  es que regresa un true si el valor que recibe existe en el arreglo. 
  if(dia === 0 || dia === 6){ //sábado o domingo
 */

/*
//Normal

if([0,6].includes(dia)){ //sábado o domingo
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Día de semana');
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{
    
    //Ya no se recomienda usar el + para concatenar porque puede provocar
    //errores raros al pensar que quiere hacer una suma
    //mensaje = 'Esta cerrado, hoy abrimos a las ' +horaApertura;
    
    //Se recomiendo usar el back tip para así hacer la interpolarización con las {}  
    //back tip con option + ]
    mensaje = `Esta cerrado, hoy abrimos a las ${horaActual}`;

}

*/

//Con ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaActual}`;

console.log({horaApertura,mensaje});