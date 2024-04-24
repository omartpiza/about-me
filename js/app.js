'use strict';

function bienvenida(){
  let nombre = prompt("¿Cuál es tu nombre?");
  console.log("Nombre: " + nombre);
  alert("Bienvenido " + nombre);
}

let score = 0;
let preguntasRealizadas = 0;

const preguntas = [
  "¿Soy hincha de universitario?",
  "¿Me gustan las verduras?",
  "¿Soy guapo?",
  "¿Tengo hijos?",
  "¿Soy buen jugador de fútbol?",
];

const respuestas = ["si", "no", "si", "si", "no"];

function cuestionario(preg, rpta){
  for(let i = 0; i < 5; i++) {
    let pregunta = preg[i];
    let solucion = rpta[i];
    let rptaUsuario = prompt(pregunta);
    if(rptaUsuario.toLowerCase() === solucion){
      alert("CORRECTO");
      score++;
    } else {
      alert("INCORRECTO");
    }
  }
}

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

bienvenida();
cuestionario(preguntas, respuestas);
pregunta6();
pregunta7();

alert("Tu score es: "+score);
console.log("Tu score es: ", score);