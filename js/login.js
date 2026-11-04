// Credenciales de demostración para la actividad académica.
const credencialesDemo = {
    usuario: "Pedrito",
    contrasena: "12345"
};

const formularioLogin = document.querySelector("#formulario-login");
const campoUsuario = document.querySelector("#usuario");
const campoContrasena = document.querySelector("#contrasena");
const mensajeLogin = document.querySelector("#mensaje-login");

formularioLogin.addEventListener("submit", (evento) => {

    evento.preventDefault();

    mensajeLogin.textContent = "";

    const usuarioIngresado = campoUsuario.value.trim();
    const contrasenaIngresada = campoContrasena.value;

    if (usuarioIngresado === "" || contrasenaIngresada === "") {
        mensajeLogin.textContent = "Por favor, completa todos los campos.";
        return;
    }

    if (
        usuarioIngresado === credencialesDemo.usuario &&
        contrasenaIngresada === credencialesDemo.contrasena
    ) {
        sessionStorage.setItem("sesionEventos", "activa");
        window.location.href = "eventos.html";
        return;
    }

    mensajeLogin.textContent = "El usuario o la contraseña son incorrectos. Inténtalo de nuevo.";

    campoContrasena.focus();
});