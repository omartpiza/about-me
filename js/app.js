'use strict';

let nombre = prompt("¿Cuál es tu nombre?");
console.log("Nombre: " + nombre);
alert("Bienvenido " + nombre);
document.write("Bienvenido " + nombre);
let score = 0;
let preguntasRealizadas = 0;

const preguntas = [
  "¿Soy hincha de universitario?",
  "¿Me gustan las verduras?",
  "¿Soy guapo?",
  "¿Tengo hijos?",
  "¿Soy buen jugador de fútbol?"
];

const respuestas = ["si", "no", "si", "si", "no"];

function preguntar(pregunta, respuestaCorrecta) {
  let respuestaUsuario = prompt(pregunta);
  console.log("Respuesta del usuario:", respuestaUsuario);
  console.log("Respuesta correcta:", respuestaCorrecta);
  if (respuestaUsuario === null) {
    console.log("El usuario canceló la operación.");
    return;
  }
  if (respuestaUsuario.toLowerCase() === respuestaCorrecta) {
    alert("¡CORRECTO!");
    console.log("Acertaste: " + pregunta);
    score++;
  } else {
    alert("¡INCORRECTO!");
    console.log("Fallaste: " + pregunta);
  }
}

for (let i = 0; i < preguntas.length; i++) {
  preguntar(preguntas[i], respuestas[i]);
  preguntasRealizadas++;
  if (preguntasRealizadas >= 5) {
    break;
  }
}

if (preguntasRealizadas <= 5) {
  pregunta6();
  pregunta7();
}

/*function pregunta1() {
let pregunta1 = prompt('¿Soy hincha de universitario?');
if ( pregunta1.toLowerCase() === 'si' ) {
  alert('Genial! Y DALE U !!!');
  console.log("Equipo de futbol: Acertaste");
  score++;
} else {
  alert('¿pero como te vas a equivocar?!!!, si la U es la U!');
  console.log("Equipo de futbol: Fallaste");
}
}

function pregunta2() {
let pregunta2 = prompt('¿Me gustan las verduras?');
if ( pregunta2.toLowerCase() === 'no' ) {
  alert('Exacto!, a quien le podria gustar! :D');
  console.log("Verduras: Acertaste");
  score++;
} else {
  alert('Porsupuesto que no!, nunca me gustaron :(');
  console.log("Verduras: Fallaste");
}
}


function pregunta3() {
let pregunta3 = prompt('¿soy guapo?');
if ( pregunta3.toLowerCase() === 'si' ) {
  alert('Porsupuesto!, y ademas divertido :D');
  console.log("Soy guapo: Acertaste");
  score++;
} else {
  alert('Te equipocaste!, tengo mi gracia :(');
  console.log("Soy guapo: Fallaste");
}
}

function pregunta4() {
let pregunta4 = prompt('¿tengo hijos?');
if ( pregunta4.toLowerCase() === 'si' ) {
  alert('Si, mi princesa! <3 ');
  console.log("Hijos: Acertaste");
  score++;
} else {
  alert('Te equipocaste!, tengo mi pequeña princesa <3');
  console.log("Hijos: Fallaste");
}
}

function pregunta5() {
let pregunta5 = prompt('¿soy bueno jugador de futbol?');
if ( pregunta5.toLowerCase() === 'no' ) {
  alert('Eres cruel, pero es verdad, aunque me esfuerzo mucho =( ');
  console.log("futbol: Acertaste");
  score++;
} else {
  alert('te equivocaste!, jajaja soy recontra malo!');
  console.log("futbol: Fallaste");
}
}*/

function pregunta6() {
  let talla;
  let attempts = 0;
  const tallaCorrecta = 43;

  while (talla !== tallaCorrecta && attempts < 4) {
    talla = prompt("Adivina mi talla de calzado:");
    if (talla < tallaCorrecta) {
      alert("Error, soy mas Zapaton ");
    } else if (talla > tallaCorrecta) {
      alert("No!, tampoco exageres, ni que fuera un payaso :D");
    } else {
      alert("¡CORRECTO! Adivinaste mi talla de calzado.");
      console.log("talla de zapatos: Acertaste");
      score++;
      break;
    }
    attempts++;
    if( attempts===4){
      alert("Se acabaron tus intentos. La talla correcta de mi calzado es " + tallaCorrecta + ".");
      console.log("talla de zapatos: Fallaste");
    }
  }
}

function pregunta7() {
  const mascotasFavoritas = ["perro", "gato", "hamster"];
  let respuesta;
  let intentos = 1;

  while (intentos <= 6) {
    respuesta = prompt("Adivina una de mis mascotas favoritas:");
    respuesta = respuesta.toLowerCase();

    let acertado = false;
    for (let i = 0; i < mascotasFavoritas.length; i++) {
      if (respuesta === mascotasFavoritas[i]) {
        acertado = true;
        alert("¡CORRECTO! Adivinaste una de mis mascotas favoritas.");
        console.log("Mascota favorita: Acertaste");
        score++;
        return;
      }
    }

    if (!acertado) {
      alert("INCORRECTO, intento " + intentos + " de 6");
      console.log("INCORRECTO, intento " + intentos + " de 6");
    }
    intentos++;
  }

  let mascotasTexto = "";
  for (let i = 0; i < mascotasFavoritas.length; i++) {
    mascotasTexto += mascotasFavoritas[i];
    if (i !== mascotasFavoritas.length - 1) {
      mascotasTexto += ", ";
    }
  }
  alert("Se acabaron tus intentos. Mis mascotas favoritas son: " + mascotasTexto + ".");
  console.log("Mascota favorita: Fallaste");
}

/*pregunta1();
pregunta2();
pregunta3();
pregunta4();
pregunta5();
pregunta6();
pregunta7();*/

console.log("Tu score es: ", score);