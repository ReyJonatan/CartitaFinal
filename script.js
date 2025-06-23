const mensaje = `Gracias a unfusible comenzó una historia que incluye nombres falsos, regaños en puestos de quesadillas, salidas a escondidas, chocolates y dulces inventados.

Ahora te veo en las bugambilias, Humbe y Jorge Cuellar me hablan de ti y me doy cuenta de que eres todo lo que quiero.
Quiero hacer todo especial para ti, te seguiré enamorando y por que quiero que siempre seas mia.

Te amo y amo todo lo que hemos pasado.

Hay preguntas importantes que sé que tendré que hacerte, y esta por poco no la logro ¿me la respondes?
`;

const carta = document.getElementById("carta");
let i = 0;

function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach(p => p.classList.add("oculta"));
  document.getElementById(id).classList.remove("oculta");
}

function escribirTexto(callback) {
  if (i < mensaje.length) {
    carta.innerHTML += mensaje.charAt(i) === "\n" ? "<br><br>" : mensaje.charAt(i);
    i++;
    setTimeout(() => escribirTexto(callback), 45);
  } else if (callback) {
    callback();
  }
}

document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim().toLowerCase();
  const talla = document.getElementById("talla").value.trim();
  const chocolates = document.getElementById("chocolates").value.trim().toLowerCase();
  const objeto = document.getElementById("objeto").value.trim().toLowerCase();
  const respuestaChistes = document.querySelector('.opcion.correcto');
  const mensajeQuiz = document.getElementById("mensajeQuiz");

  if (nombre && talla && chocolates && objeto && respuestaChistes) {
    mostrarPantalla("pantalla-1");
  } else {
    mensajeQuiz.textContent = "Responde todo y selecciona una opción válida.";
  }
});

document.querySelectorAll(".opcion").forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelectorAll(".opcion").forEach(b => b.classList.remove("correcto", "incorrecto"));
    if (boton.dataset.correct === "true") {
      boton.classList.add("correcto");
    } else {
      boton.classList.add("incorrecto");
    }
  });
});

document.getElementById("btnLeer").addEventListener("click", () => {
  mostrarPantalla("pantalla-2");
  setTimeout(() => mostrarPantalla("pantalla-3"), 3000);
  setTimeout(() => mostrarPantalla("pantalla-4"), 6000);
  setTimeout(() => {
    mostrarPantalla("pantalla-carta");
    escribirTexto(() => {
      document.getElementById("btnFinal").style.display = "block";
    });
  }, 9000);
});

document.getElementById("btnFinal").addEventListener("click", () => {
  mostrarPantalla("pantalla-final");
});

document.getElementById("btnSiQuiero").addEventListener("click", () => {
  const fecha = new Date().toLocaleString();
  const mensajeFinal = document.createElement("p");
  mensajeFinal.innerHTML = `✨ <strong>Mándame la captura</strong><br><small>Registrado el: ${fecha}</small>`;
  mensajeFinal.style.marginTop = "20px";
  mensajeFinal.style.textAlign = "center";
  mensajeFinal.style.color = "#000000";
  document.getElementById("pantalla-final").appendChild(mensajeFinal);
});
