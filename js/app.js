'use strict';
let nombre = prompt("¿Cual es tu nombre?");
console.log("Nombre: "+ nombre);
alert("Bienvenido "+nombre);
document.write("Bienvenido "+nombre);


let pregunta1 = prompt('¿Soy hincha de universitario?');
if ( pregunta1.toLowerCase() === 'si' ) {
  alert('Genial! Y DALE U !!!');
//   console.log("Equipo de futbol: Acertaste");
} else {
  alert('¿pero como te vas a equivocar?!!!, si la U es la U!');
//   console.log("Equipo de futbol: Fallaste");
}

let pregunta2 = prompt('¿Me gustan las verduras?');
if ( pregunta2.toLowerCase() === 'no' ) {
  alert('Exacto!, a quien le podria gustar! :D');
  console.log("Verduras: Acertaste");
} else {
  alert('Porsupuesto que no!, nunca me gustaron :(');
  console.log("Verduras: Fallaste");
}

let pregunta3 = prompt('¿soy guapo?');
if ( pregunta3.toLowerCase() === 'si' ) {
  alert('Porsupuesto!, y ademas divertido :D');
  console.log("Soy guapo: Acertaste");
} else {
  alert('Te equipocaste!, tengo mi gracia :(');
  console.log("Soy guapo: Fallaste");
}

let pregunta4 = prompt('¿tengo hijos?');
if ( pregunta4.toLowerCase() === 'si' ) {
  alert('Si, mi princesa! <3 ');
  console.log("Hijos: Acertaste");
} else {
  alert('Te equipocaste!, tengo mi pequeña princesa <3');
  console.log("Hijos: Fallaste");
}

let pregunta5 = prompt('¿soy bueno jugador de futbol?');
if ( pregunta5.toLowerCase() === 'no' ) {
  alert('Eres cruel, pero es verdad, aunque me esfuerzo mucho =( ');
  console.log("futbol: Acertaste");
} else {
  alert('te equivocaste!, jajaja soy recontra malo!');
  console.log("futbol: Fallaste");
}
