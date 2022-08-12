"use strict"

/* Texto type */

var i = 0;
var speed = 20;
var txt = 'Soy una persona creativa y positiva, que lo da todo por cumplir lo que se propone, y estoy completamente convencido que voy a lograr realizarme como un gran profesional de la programación, consiguiendo así las herramientas faltantes para el desarrollo de mejores y auténticos sitios webs.';

const about = document.querySelector(".h3Header");
const about2 = document.querySelector(".about");

about.addEventListener("click", typeWriter);
about2.addEventListener("click", typeWriter);

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".codigoW_p").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  } else{
    document.querySelector(".codigoW_p").innerHTML = 'Soy una persona creativa y positiva, que lo da todo por cumplir lo que se propone, y estoy completamente convencido que voy a lograr realizarme como un gran profesional de la programación, consiguiendo así las herramientas faltantes para el desarrollo de mejores y auténticos sitios webs.';
    
  }
  about2.classList.remove("about");
}

var typed = new Typed(".auto-type", {
  strings: ["Taiel Perez", "About Me", "私について"],
  typeSpeed: 150,
  backSpeed: 120,
  loop: true
})

/*Copiar el E-mail*/

function copyToClipBoard() {

  var content = document.getElementById('textArea');
  
  content.select();
  document.execCommand('copy');

  alert("E-mail copied!");
}
