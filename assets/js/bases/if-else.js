let a = 5;

if(a >=10) {
    console.log('a es mayor a 10');
}else{
    console.log('A es menor a 20');
}

//Ejercicio 2

const hoy = new Date();
let dia = hoy.getDay(); // 0 Domingo 1 Lunes, etc.

console.log(dia);

if(dia === 0){
    console.log('Domingo');
}else{
    console.log('No es domingo');
}

/*
   Diferencia en el == y el ====
   ==   Evalua el valor, podemos comprar un String y un number y si
        son iguales por ejemplo: if('5' == 5), nos daría true .

   ===  Además de evaluar el valor, también evalua que el tipado sea
        del mismo tipo (es identico).

        por ejemplo: if('5' === 5), nos daría false

*/

//Laboratorio Alternativa if else

dia = 5;
let arrDias = [
                'Domingo',
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Vierenes',
                'Sábadao'
              ];

 const diasLetras = {
                      0:'Domingo',
                      1:'Lunes',
                      2:'Martes',
                      3:'Miercoles',
                      4:'Jueves',
                      5:'Vierenes',
                      6:'Sábadao'
 };

 const diasLetrasFuncion = {
    0:()=>'Domingo',
    1:()=>'Lunes',
    2:()=>'Martes',
    3:()=>'Miercoles',
    4:()=>'Jueves',
    5:()=>'Vierenes',
    6:()=>'Sábadao'
};

console.log('El días es ', arrDias[5] ||'Día no definido');   
//diasLetras[dia]() lleva los () para ejecutar la función que es la que
//apunta al string del días
console.log('El días es ', diasLetras[dia]() ||'Día no definido');   
