const elMayor = (a,b) =>(a>b) ? a : b;

const tieneMenbresia = (isMiembro) => (isMiembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(20,15));
console.log(tieneMenbresia(false));

const amigo = false;

const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo? 'Thor' : 'Loki',
    //Esto es una función anonima auto invocada por eso lleva los () al final
    (()=>'Nick Fury') (),
];

console.log(amigosArr);

//Ternario anidado

const nota = 79.8;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B+': 'C';