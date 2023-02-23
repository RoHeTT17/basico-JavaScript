const heroes = ['Barman', 'Superman','Mujer Maravilla','Aquaman'];

console.warn('For tradicional');

for( let i = 0; i< heroes.length ;  i++){
    console.log(heroes[i]);
}

console.warn('For in');
//Después del "in", se coloca el iterable u objeto que nos permite recorrerlo
for (let i in heroes){
    console.log(heroes[i]);
}

console.warn('For of');
//Es bastante utilizado para obtener referencia a valores de objetos u arreglos.
//Se acostumbra que el nombre antes del "of" sea el singular del elemento que vamos a iterar.
//Basicamente lo que hace el for of, es extraer el valor que esta dentro del arreglos (en este ejemplo)
//y lo regresa a la variable que estamos definiendo ( heroe en este caso).
for (let heroe of heroes){
    console.log(heroe);
}
