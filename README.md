# 🤖 Chatbot WhatsApp-style

Un **chatbot simulado** con interfaz moderna, animación de typing realista y respuestas inteligentes. ![Demo](https://via.placeholder.com/400x500/007bff/e2e8f0?text=Chatbot)

## ✨ **Demo visual**
Beto bot
hola → ⏳ escribiendo [- - -] ← Puntos suben/bajan
¡Hola! ¿Qué onda? 😊


## 🚀 **Instalación (30 segundos)**

```bash
1. Crea carpeta "chatbot"
2. Guarda 3 archivos: index.html, style.css, script.js
3. Abre index.html en navegador
```

## 🎮 **Funcionalidades**

| ✨ | Característica |
|---|----------------|
| **✅ Animación WhatsApp** | 3 puntos que suben/bajan mientras "escribe" |
| **✅ 10 mensajes máximo** | Borra el más antiguo automáticamente |
| **✅ Nombres personalizados** | "Beto" (usuario) / "bot" |
| **✅ Respuestas inteligentes** | 12+ respuestas diferentes |
| **✅ Scroll automático** | Siempre ves el último mensaje |
| **✅ Debounce anti-spam** | Evita mensajes duplicados |
| **✅ Typing 1.5s** | Simulación realista |
| **✅ Fondos degradé** | Diseño moderno azul-gris |

## 🧠 **Respuestas del bot** *(Ejemplos)*

| **Escribes** | **Bot responde** |
|--------------|------------------|
| `hello` | `"I don't speak ingles 😅"` |
| `hola` | `"¡Hola! estoy aquí para ayudarte"` |
| `qué tal` | `"¡Estoy genial! ¿Y tú Beto?"` |
| `hora` | `"¡Mira tu reloj Beto! 😂"` |
| `pizza` | `"¡Pide una pizza! 🍕"` |
| `cansado` | `"¡Duerme 8 horas Beto! Zzz..."` |
| `??` | **`"No sé de qué hablas hijo 😅"`** |

## 🔧 **Arquitectura**
📄 index.html → Estructura + Layout
🎨 style.css → Diseño + Animación WhatsApp
⚙️ script.js → Lógica (render, typing, respuestas)

### **Flujo completo**
```mermaid
graph TD
  A[Usuario escribe] --> B[Enter/Botón]
  B --> C[Mensaje "Beto" aparece]
  C --> D[Typing animado 1.5s]
  D --> E[Respuesta inteligente]
  E --> F[Scroll automático]
  F --> G{>10 mensajes?}
  G -->|Sí| H[Borra más antiguo]
  G -->|No| I[Continúa]
```

## 🎨 **Diseño responsivo**
🌈 Fondo degradé azul-gris elegante
💬 Burbujas estilo chat moderno
👤 Nombres arriba de cada mensaje
⌨️ Input redondeado + botón verde
🌓 Sombra flotante profesional

## 📱 **Próximas mejoras** *(Fácil)*

```js
// 1. Guardar chat
localStorage.setItem('chat', JSON.stringify(mensajes));

// 2. Tema oscuro  
document.body.classList.toggle('dark-mode');

// 3. Sonidos
new Audio('send.mp3').play();
```

## 🛠 **Tech Stack**

| Tech | Uso |
|------|-----|
| **HTML5** | Estructura semántica |
| **CSS3** | Animaciones + Flexbox |
| **Vanilla JS** | 100% puro |
| **Debounce** | Optimización |

## 📊 **Stats**
💾 3 archivos | 2KB total
⚡ Cero dependencias
📱 100% responsive
🎨 Animaciones 60fps

---

<div align="center">

**👨‍💻 Desarrollado para Beto Alvarez**  
**📅 Marzo 2026**  
**✨ Listo para usar en producción!**

[![Star](https://img.shields.io/badge/Star-⭐-blue?style=flat&logo=github)](https://github.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Netlify-green?style=flat&logo=netlify)](https://netlify.com/)

</div>