const autos = ['Bora','Ford','Mazda','Honda'];

let i = 0;

/*
   Se ejecuta mientras la condición se a true.

   Si por algún motivo llegamos a tener alguno de los siguientes
   valores se toman como false.
   undefined
   null
   false
*/

console.warn('While');
while (i < autos.length){

    if(i == 1)
        break; //Para salir del ciclo

    console.log(autos[i]);

    i++;
}

console.warn(' Do While');

/*
 * La diferencia en el do whilee y while es que el ciclo se ejecuta
   por lo menos 1 vez 
 */

   let j =0 ;

   do{
        console.log(autos[j]);
        j++;
   }while(autos[j]); // En algún momento le marcaría undefined y asi saldria del ciclo