let mensajes = [];

const chat = document.getElementById("message-list");
const input = document.getElementById("message-input");
const button = document.getElementById("send-button");

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function escapeHTML(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function render() {
  const html = mensajes.map(m => {
    if (m.texto === "typing") {
      return `
        <div class="message bot">
          <div class="nombre">${escapeHTML(m.nombre)}</div>
          <div class="typing-indicator">
            <span class="typing-dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </span>
            <span>escribiendo</span>
          </div>
        </div>
      `;
    }
    return `
      <div class="message ${m.tipo}">
        <div class="nombre">${escapeHTML(m.nombre)}</div>
        <div class="texto">${escapeHTML(m.texto)}</div>
      </div>
    `;
  }).join("");

  chat.innerHTML = html;
  chat.scrollTop = chat.scrollHeight;
}

function mostrarTyping() {
  mensajes.push({
    tipo: "bot",
    nombre: "bot",
    texto: "typing"  // ← Marcador especial
  });
  render();
}

function respuestaBot(textoUsuario) {
  const texto = textoUsuario.toLowerCase().trim();

  if (texto.includes("hello") || texto.includes("hi")) {
    return "I don't speak ingles 😅";
  }

  if (texto.includes("hola") || texto.includes("buenas")) {
    const saludos = ["¡Hola! estoy aquí para ayudarte", "¡Ey Beto! ¿Qué onda?", "¡Holaaa! 😊"];
    return saludos[Math.floor(Math.random() * saludos.length)];
  }

  if (texto.includes("como estas") || texto.includes("qué tal") || texto.includes("que tal")) {
    return "¡Estoy genial! ¿Y tú qué tal Beto?";
  }

  if (texto.includes("adios") || texto.includes("chao") || texto.includes("bye")) {
    return "¡Nos vemos Beto! Que tengas un gran día 😊";
  }

  if (texto.includes("como te llamas") || texto.includes("nombre")) {
    return "Soy bot, tu asistente personal 😉";
  }

  if (texto.includes("hora") || texto.includes("que hora es")) {
    return "¡Mira tu reloj Beto! 😂";
  }

  if (texto.includes("comer") || texto.includes("comida") || texto.includes("hambre")) {
    return "¡Pide una pizza! 🍕";
  }

  if (texto.includes("trabajo") || texto.includes("estudio")) {
    return "¡Ánimo Beto! Tú puedes 💪";
  }

  if (texto.includes("cansado") || texto.includes("sueño")) {
    return "¡Duerme 8 horas Beto! Zzz...";
  }

  return "No sé de qué hablas hijo 😅";
}

function enviarMensaje() {
  const texto = input.value.trim();
  if (!texto) return;

  mensajes.push({
    tipo: "user",
    nombre: "Beto",
    texto: texto
  });

  if (mensajes.length > 10) {
    mensajes.shift();
  }

  input.value = "";
  render();

  mostrarTyping();

  setTimeout(() => {
    if (mensajes[mensajes.length - 1].texto === "typing") {
      mensajes.pop();
    }
    
    mensajes.push({
      tipo: "bot",
      nombre: "bot",
      texto: respuestaBot(texto)
    });

    if (mensajes.length > 10) {
      mensajes.shift();
    }

    render();
  }, 1500);
}

const enviarDebounce = debounce(enviarMensaje, 200);

button.addEventListener("click", enviarDebounce);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enviarDebounce();
  }
});

render();