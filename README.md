# Documentación del proyecto: Plataforma de Eventos

> **Propósito de este documento:** explicar cómo está construido el proyecto, qué responsabilidad tiene cada archivo y cómo se relacionan HTML, CSS, JavaScript, Bootstrap y Git. Está escrito como material de estudio para que los integrantes del equipo puedan comprender y explicar el código.

---

## 1. Descripción general

La **Plataforma de Eventos** es un sitio web académico que presenta eventos de tipo tecnológico, académico y cultural. El usuario puede:

- Consultar una página de inicio con una presentación y un carrusel de eventos.
- Consultar un formulario de contacto.
- Acceder a una página de inicio de sesión.
- Ver una página con tarjetas de eventos después de iniciar sesión.
- Cerrar la sesión desde la página de eventos.
- Contactar mediante un botón flotante de WhatsApp.

El proyecto está desarrollado principalmente con:

| Tecnología | Uso en el proyecto |
|---|---|
| HTML5 | Estructura y contenido de las páginas. |
| CSS3 | Colores, tamaños, distribución, diseño adaptable y estados visuales. |
| JavaScript | Validación sencilla del login, almacenamiento de sesión y redirecciones. |
| Bootstrap 5.3.3 | Sistema de rejilla, utilidades visuales y carrusel. |
| Font Awesome 6.4.0 | Icono de WhatsApp y otros iconos. |
| Git y GitHub | Control de versiones y colaboración del equipo. |
| GitHub Pages | Publicación del sitio web estático. |

### Importante sobre el inicio de sesión

El login utiliza credenciales escritas directamente en JavaScript y `sessionStorage`. Es una **simulación educativa de autenticación**, no un sistema seguro para proteger información real. Cualquier persona que inspeccione el JavaScript puede encontrar las credenciales y modificar el almacenamiento desde el navegador. Un sistema real necesita validación en un servidor.

---

## 2. Estructura de carpetas y archivos

```text
trabajo_grupal/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── img/
│   ├── campus-party.avif
│   ├── congreso-internacional-educacion-superior-cies.avif
│   ├── feria-internacional-del-libro.avif
│   ├── hay-festival.avif
│   ├── latinoware.avif
│   └── tedx-conferences.avif
│
├── js/
│   ├── eventos.js
│   └── login.js
│
└── paginas/
    ├── eventos.html
    └── login.html
```

| Ruta | Responsabilidad |
|---|---|
| `index.html` | Página pública de inicio. Contiene navegación, presentación, carrusel, contacto, WhatsApp y footer. |
| `css/styles.css` | Hoja de estilos propia compartida por las páginas. |
| `img/` | Imágenes utilizadas en el carrusel y las tarjetas de eventos. |
| `js/login.js` | Comprueba los datos ingresados y crea la marca de sesión de demostración. |
| `js/eventos.js` | Comprueba la marca de sesión y permite cerrar sesión. |
| `paginas/login.html` | Interfaz del formulario de inicio de sesión. |
| `paginas/eventos.html` | Página que presenta las seis tarjetas de eventos. |

### ¿Por qué algunas rutas comienzan con `../`?

Una ruta relativa se interpreta desde la ubicación del archivo HTML que la utiliza.

- Desde `index.html`, que está en la raíz, la hoja de estilos se encuentra en `css/styles.css`.
- Desde `paginas/login.html`, hay que subir un nivel (`..`) para volver a la raíz y luego entrar en `css/`: `../css/styles.css`.
- Desde `paginas/eventos.html`, la imagen `campus-party.avif` se referencia como `../img/campus-party.avif`.

`..` significa “carpeta superior”. No es una etiqueta HTML ni una instrucción JavaScript: es parte de la ruta del archivo.

---

## 3. Conceptos fundamentales de HTML

HTML describe el contenido y la estructura de una página. No es un lenguaje de programación: organiza títulos, párrafos, imágenes, enlaces, formularios y secciones.

### Estructura inicial

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nombre de la página</title>
</head>
<body>
    <!-- Contenido visible -->
</body>
</html>
```

- `<!DOCTYPE html>`: indica al navegador que el documento utiliza HTML5.
- `<html lang="es">`: elemento raíz; `lang="es"` declara que el idioma principal es español.
- `<head>`: contiene información y recursos de la página, no el contenido principal visible.
- `<meta charset="UTF-8">`: permite representar correctamente caracteres como tildes y eñes.
- `<meta name="viewport" ...>`: adapta el ancho del documento al ancho del dispositivo y establece la escala inicial; es importante para diseño responsive.
- `<title>`: texto que aparece en la pestaña del navegador.
- `<body>`: contiene el contenido que se presenta al usuario.
- `<!-- comentario -->`: comentario para desarrolladores; no se muestra como contenido de la página.

### Etiquetas semánticas utilizadas

| Etiqueta | Función |
|---|---|
| `<header>` | Encabezado de una página o sección. |
| `<nav>` | Agrupa enlaces de navegación. |
| `<main>` | Contenido principal de la página. |
| `<section>` | Agrupa contenido relacionado por un tema. |
| `<article>` | Contenido independiente, como una tarjeta de evento. |
| `<footer>` | Pie de página o de una sección. |
| `<h1>` a `<h4>` | Títulos con distintos niveles jerárquicos. |
| `<p>` | Párrafo de texto. |
| `<a>` | Enlace a otra página, archivo o sección. |
| `<img>` | Inserta una imagen. |
| `<form>` | Agrupa controles para enviar información. |
| `<label>` | Texto asociado a un campo de formulario. |
| `<input>` | Campo de entrada de datos. |
| `<textarea>` | Campo de texto de varias líneas. |
| `<button>` | Botón que puede ejecutar una acción o enviar un formulario. |
| `<span>` | Contenedor en línea para texto o elementos pequeños. |
| `<div>` | Contenedor genérico para agrupar elementos. |
| `<i>` | En este proyecto se usa para mostrar iconos de Font Awesome. |
| `<dl>`, `<dt>`, `<dd>` | Lista descriptiva: grupo de datos, nombre del dato y su valor. |

### Atributos HTML importantes

- `class`: asigna una o varias clases CSS. También permite que JavaScript encuentre elementos mediante selectores.
- `id`: identifica un elemento con un identificador único dentro del documento. Se utiliza, por ejemplo, para `#usuario`, `#formulario-login` y los destinos de enlaces internos.
- `href`: destino de un enlace.
- `src`: ruta de una imagen o archivo externo.
- `alt`: descripción alternativa de una imagen, útil para lectores de pantalla y cuando la imagen no carga.
- `type`: define el tipo de campo o el comportamiento del botón.
- `name`: nombre del dato del formulario cuando se envía.
- `required`: indica que un campo debe completarse para que el navegador permita el envío normal.
- `autocomplete`: orienta al navegador sobre el tipo de dato que puede autocompletar.
- `target="_blank"`: abre el enlace en otra pestaña.
- `rel="noopener noreferrer"`: evita que la página abierta en otra pestaña pueda controlar la página de origen y limita el envío de información de referencia.
- `aria-label`: proporciona un nombre accesible cuando el texto visible no es suficiente.
- `aria-hidden="true"`: oculta un elemento decorativo a tecnologías de asistencia.
- `aria-live="polite"`: permite que un lector de pantalla anuncie cambios en el contenido sin interrumpir bruscamente.
- `aria-labelledby`: relaciona una región con el elemento que funciona como su título.
- `data-bs-*`: atributos de datos que Bootstrap utiliza para configurar componentes, como el carrusel.

---

## 4. Página principal: `index.html`

### 4.1. Recursos del `<head>`

La página carga tres hojas de estilo:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="css/styles.css">
```

1. **Font Awesome**: permite usar iconos mediante clases como `fa-brands fa-whatsapp` y `fa-solid fa-location-dot`.
2. **Bootstrap CSS**: proporciona clases preparadas para rejillas, botones, espaciados, colores, carruseles y otros componentes.
3. **CSS propio**: contiene los estilos creados para la identidad visual del proyecto.

El orden importa: primero se cargan las librerías y después los estilos propios. Así, las reglas propias pueden personalizar componentes de Bootstrap cuando los selectores y la especificidad lo permiten.

### 4.2. Barra de navegación

La barra está dentro de `<header class="barra-navegacion">`. Contiene el nombre del sitio y enlaces:

- `href="#"`: apunta al inicio del documento (en este caso, al identificador vacío).
- `href="#eventos"`: lleva al elemento que tiene `id="eventos"`.
- `href="#contacto"`: lleva al elemento que tiene `id="contacto"`.
- `href="paginas/login.html"`: abre el archivo de login.

La clase `barra-navegacion` aplica el fondo azul y el espaciado. `nav-contenido` utiliza Flexbox para separar el logo y los enlaces.

### 4.3. Sección principal o hero

La sección `<section class="hero">` presenta el mensaje principal y un botón que lleva al login.

La imagen de fondo y una capa de color translúcida se definen en CSS mediante `background-image` y `linear-gradient()`. El objetivo de la capa es mantener legible el texto sobre la imagen.

### 4.4. Carrusel de eventos

El carrusel utiliza el componente Carousel de Bootstrap.

Estructura simplificada:

```html
<div id="carouselEventos" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <!-- Primera diapositiva -->
        </div>
        <div class="carousel-item">
            <!-- Segunda diapositiva -->
        </div>
    </div>
</div>
```

- `id="carouselEventos"`: identifica el carrusel.
- `carousel`: activa los estilos del componente.
- `slide`: agrega el comportamiento visual de transición.
- `data-bs-ride="carousel"`: indica a Bootstrap que el carrusel debe comenzar automáticamente.
- `carousel-inner`: contiene todas las diapositivas.
- `carousel-item`: representa una diapositiva.
- `active`: marca la diapositiva que aparece inicialmente. Debe existir una diapositiva inicial activa.
- `data-bs-target="#carouselEventos"`: indica a qué carrusel pertenece un botón de control.
- `data-bs-slide="prev"` y `data-bs-slide="next"`: indican si el control avanza o retrocede.

El archivo JavaScript de Bootstrap se carga al final del `body`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

El CSS de Bootstrap da apariencia al carrusel, pero el JavaScript de Bootstrap es el que proporciona su comportamiento interactivo.

### 4.5. Tarjetas del carrusel

Cada diapositiva contiene una imagen, una categoría, un título, una descripción, una ubicación y un enlace.

Las imágenes se cargan desde `img/`. El atributo `alt` describe su contenido. El icono de ubicación usa Font Awesome.

Los enlaces “Más información” tienen actualmente `href="#"`, por lo que no llevan a una ficha real del evento. Son enlaces de muestra pendientes de conectar a destinos concretos.

### 4.6. Formulario de contacto

El formulario contiene nombre, correo, asunto y mensaje. Cada campo tiene:

- Un `<label>` con `for` que coincide con el `id` del campo.
- Un campo `input` o `textarea`.
- El atributo `required`, que activa la validación básica del navegador.

El formulario usa:

```html
<form action="#exito" method="GET" class="formulario">
```

- `action="#exito"`: al enviar, el navegador navega al fragmento con `id="exito"`.
- `method="GET"`: los datos se envían como parámetros de la URL.
- `.mensaje-exito:target` en CSS: muestra el mensaje cuando el elemento `#exito` es el destino actual.

**Limitación importante:** este formulario no envía un correo ni guarda el mensaje en una base de datos. El comportamiento actual solo muestra un mensaje visual al navegar a `#exito`. Para recibir mensajes de verdad se necesita un backend o un servicio de formularios.

### 4.7. Botón flotante de WhatsApp

El enlace utiliza una dirección `https://wa.me/...` para abrir una conversación de WhatsApp. `target="_blank"` solicita abrirla en otra pestaña. La clase `whatsapp-flotante` lo fija en la esquina inferior derecha mediante CSS.

El número incluido en el proyecto debe revisarse y reemplazarse por el número oficial autorizado antes de publicar. No se debe asumir que un número de ejemplo es un contacto real.

### 4.8. Pie de página

`<footer class="pie-pagina">` presenta el aviso de derechos. `&copy;` es una entidad HTML que representa el símbolo ©.

---

## 5. Página de inicio de sesión: `paginas/login.html`

### 5.1. Rutas de recursos

Como el archivo está dentro de `paginas/`, usa rutas que suben a la carpeta raíz:

```html
<link rel="stylesheet" href="../css/styles.css">
<script src="../js/login.js"></script>
```

La primera ruta carga los estilos y la segunda carga el JavaScript del login.

### 5.2. Cuerpo de la página

`<body class="pagina-login">` recibe una clase que permite aplicar un diseño de altura mínima de pantalla y una distribución vertical con Flexbox.

El encabezado reutiliza clases generales (`barra-navegacion`, `contenedor`, `nav-contenido`, `logo`) y agrega `logo-icon` para el símbolo decorativo.

### 5.3. Tarjeta del formulario

La tarjeta combina clases de Bootstrap y clases propias:

- `container-fluid`: contenedor Bootstrap que ocupa todo el ancho disponible.
- `container`: contenedor Bootstrap con ancho máximo adaptable.
- `row`: fila del sistema de rejilla.
- `justify-content-center`: centra las columnas horizontalmente.
- `col-12`: ocupa las 12 columnas en pantallas muy pequeñas.
- `col-sm-10`: ocupa 10 de 12 columnas desde el breakpoint `sm`.
- `col-md-7`: ocupa 7 de 12 columnas desde `md`.
- `col-lg-5`: ocupa 5 de 12 columnas desde `lg`.
- `card`, `card-body`: estructura visual de tarjeta Bootstrap.
- `border-0`: elimina el borde.
- `shadow-sm`: agrega una sombra pequeña.
- `p-4`, `p-md-5`: aplican padding; el segundo cambia el espaciado desde el breakpoint `md`.
- `mb-3`, `mb-4`: agregan margen inferior.

Las clases propias (`tarjeta-login`, `etiqueta-login`, `descripcion-login`, `mensaje-login`, `nota-login`, `volver-login`) personalizan la apariencia de la tarjeta.

### 5.4. Campos del formulario

El campo de usuario es `type="text"` y el de contraseña es `type="password"`.

- `id` permite localizar el campo desde JavaScript.
- `name` identifica el dato si se envía el formulario.
- `form-control` aplica el estilo Bootstrap.
- `autocomplete="username"` y `autocomplete="current-password"` ayudan al navegador o al gestor de contraseñas a reconocer los campos.
- `required` declara que el campo es obligatorio.
- `novalidate` en el formulario desactiva la validación automática de envío del navegador para que el JavaScript del proyecto pueda mostrar su propio mensaje. No elimina los atributos `required`; simplemente evita que la validación nativa bloquee el evento `submit`.

El elemento:

```html
<div id="mensaje-login" class="mensaje-login" role="status" aria-live="polite"></div>
```

es el espacio donde JavaScript escribe el mensaje. Está vacío al inicio. CSS lo mantiene oculto mientras esté vacío y lo muestra cuando recibe texto.

### 5.5. Botón de envío

`type="submit"` hace que el botón intente enviar el formulario. El JavaScript escucha ese evento y decide qué hacer.

---

## 6. Lógica del inicio de sesión: `js/login.js`

Código actual:

```javascript
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
```

### 6.1. Credenciales de demostración

```javascript
const credencialesDemo = {
    usuario: "Pedrito",
    contrasena: "12345"
};
```

- `const`: declara una variable cuya referencia no se reasigna.
- `credencialesDemo`: nombre del objeto que agrupa las credenciales.
- `{ }`: delimitan un objeto.
- `usuario` y `contrasena`: propiedades del objeto.
- `:` separa el nombre de la propiedad de su valor.
- Las comas separan propiedades.
- Las cadenas de texto se escriben entre comillas.

Para esta versión académica, las credenciales válidas son `Pedrito` y `12345`. No deben utilizarse credenciales reales ni considerarse un mecanismo de seguridad.

### 6.2. Seleccionar elementos HTML

```javascript
const formularioLogin = document.querySelector("#formulario-login");
```

`document` representa el documento HTML cargado. `querySelector()` busca el primer elemento que coincide con el selector CSS indicado. El símbolo `#` significa que se busca un elemento por su `id`.

Las siguientes líneas guardan referencias a los campos de usuario, contraseña y mensaje. Así se pueden consultar o modificar sin volver a buscarlos cada vez.

### 6.3. Escuchar el envío del formulario

```javascript
formularioLogin.addEventListener("submit", (evento) => {
```

- `addEventListener()` registra una función que se ejecutará cuando ocurra un evento.
- `"submit"` es el evento de envío del formulario.
- `(evento) => { ... }` es una función flecha; recibe el objeto del evento.
- El bloque `{ }` contiene las instrucciones que se ejecutan al enviar.

### 6.4. Evitar el envío automático

```javascript
evento.preventDefault();
```

`preventDefault()` cancela el comportamiento predeterminado del evento. En un formulario, evita que el navegador lo envíe y recargue la página de la forma habitual. Así el código puede validar los datos primero.

### 6.5. Limpiar el mensaje anterior

```javascript
mensajeLogin.textContent = "";
```

`textContent` permite leer o cambiar el texto de un elemento HTML. Asignarle una cadena vacía elimina el mensaje anterior. Como CSS muestra el mensaje solo cuando el elemento no está vacío, también vuelve a ocultarlo.

### 6.6. Obtener los valores escritos

```javascript
const usuarioIngresado = campoUsuario.value.trim();
const contrasenaIngresada = campoContrasena.value;
```

- `.value` obtiene el valor escrito en un `input`.
- `.trim()` elimina espacios en blanco al principio y al final del nombre de usuario.
- La contraseña se obtiene sin aplicar `trim()`, por lo que los espacios forman parte de la comparación.

### 6.7. Primera condición: campos vacíos

```javascript
if (usuarioIngresado === "" || contrasenaIngresada === "") {
    mensajeLogin.textContent = "Por favor, completa todos los campos.";
    return;
}
```

- `if` ejecuta el bloque cuando su condición es verdadera.
- `===` compara valor y tipo sin conversión automática.
- `""` representa una cadena vacía.
- `||` significa **OR (O)**: basta con que una de las dos comparaciones sea verdadera.
- `return` termina la ejecución de la función actual. Evita que se continúe con la comparación de credenciales cuando falta un dato.

Por tanto, si el usuario está vacío **o** la contraseña está vacía, aparece el mensaje y la función termina.

### 6.8. Segunda condición: credenciales correctas

```javascript
if (
    usuarioIngresado === credencialesDemo.usuario &&
    contrasenaIngresada === credencialesDemo.contrasena
) {
```

- `credencialesDemo.usuario` accede a la propiedad `usuario` del objeto.
- `credencialesDemo.contrasena` accede a la propiedad `contrasena`.
- `&&` significa **AND (Y)**: ambas comparaciones deben ser verdaderas.

Si el usuario y la contraseña coinciden exactamente con los valores del objeto, se ejecuta el bloque.

### 6.9. Guardar la marca de sesión

```javascript
sessionStorage.setItem("sesionEventos", "activa");
```

`sessionStorage` es un almacenamiento del navegador asociado a la pestaña/sesión de navegación.

- `setItem(clave, valor)` guarda un dato.
- `"sesionEventos"` es la clave.
- `"activa"` es el valor.

Se guarda texto, no un booleano. La página de eventos consultará esa misma clave para decidir si permite mostrar el contenido.

### 6.10. Redirigir a eventos

```javascript
window.location.href = "eventos.html";
return;
```

- `window` representa la ventana o pestaña del navegador.
- `location.href` permite consultar o cambiar la dirección actual.
- `eventos.html` es una ruta relativa desde `paginas/login.html`; por eso abre `paginas/eventos.html`.
- `return` termina la función después de iniciar la navegación.

### 6.11. Credenciales incorrectas y foco

Si las condiciones anteriores no se cumplen, se escribe el mensaje de error:

```javascript
mensajeLogin.textContent = "El usuario o la contraseña son incorrectos. Inténtalo de nuevo.";
campoContrasena.focus();
```

`focus()` coloca el cursor en el campo de contraseña para facilitar que el usuario vuelva a intentarlo.

### Resumen del flujo del login

1. El usuario completa el formulario y presiona el botón.
2. JavaScript evita el envío tradicional.
3. Borra cualquier mensaje anterior.
4. Obtiene los valores de los campos.
5. Comprueba si falta alguno.
6. Si falta un dato, muestra el aviso y termina.
7. Si ambos datos coinciden, guarda la marca de sesión y redirige a eventos.
8. Si no coinciden, muestra el error y enfoca el campo de contraseña.

---

## 7. Página de eventos: `paginas/eventos.html`

La página presenta seis eventos como tarjetas HTML estáticas:

1. Campus Party — Tecnología.
2. Latinoware — Tecnología.
3. TEDx Conferences — Académico.
4. Congreso Internacional CIES — Académico.
5. Feria Internacional del Libro — Cultural.
6. Hay Festival — Cultural.

Cada tarjeta usa la estructura:

```html
<article class="tarjeta-evento">
    <img class="imagen-evento" src="../img/campus-party.avif" alt="Campus Party">
    <div class="contenido-evento">
        <span class="categoria-evento">Tecnología</span>
        <h2>Campus Party</h2>
        <p class="descripcion-evento">Descripción del evento.</p>
        <dl class="datos-evento">
            <div>
                <dt>Fecha</dt>
                <dd>Fecha por confirmar</dd>
            </div>
        </dl>
    </div>
</article>
```

- `<article>` representa una unidad de contenido independiente.
- `imagen-evento` controla tamaño y recorte de la imagen.
- `contenido-evento` agrega espacio interno.
- `categoria-evento` muestra una etiqueta de categoría.
- `descripcion-evento` contiene la descripción.
- `<dl>` agrupa datos descriptivos.
- `<dt>` identifica el dato (por ejemplo, “Fecha”).
- `<dd>` muestra su valor (por ejemplo, “Fecha por confirmar”).

Las tarjetas están escritas directamente en HTML. No se generan desde un arreglo de JavaScript ni desde una base de datos.

### Elemento `lista-eventos`

```html
<div id="lista-eventos" class="rejilla-eventos"></div>
```

Este contenedor está vacío en el código actual. Las seis tarjetas aparecen después como elementos estáticos. `eventos.js` no inserta tarjetas dentro de este contenedor; solamente controla la sesión. Por tanto, el nombre `lista-eventos` no significa que JavaScript esté construyendo la lista.

### Navegación y cierre de sesión

El botón tiene `id="cerrar-sesion"`. Ese identificador permite que `eventos.js` lo encuentre y escuche el clic.

El enlace `href="contacto.html"` apunta a un archivo que **no aparece en la estructura ZIP recibida**. En la versión actual, esa ruta no tiene un destino disponible. El formulario de contacto sí está en `index.html`, por lo que se puede valorar cambiar el enlace a `../index.html#contacto` o crear `paginas/contacto.html`.

### Recursos de la página

- CSS propio: `../css/styles.css`.
- Font Awesome: hoja de estilos externa.
- Bootstrap: hoja de estilos externa.
- JavaScript de eventos: `../js/eventos.js`.

**Observación de estructura HTML:** el archivo tiene un `<header>` externo y dentro otro `<header class="barra-navegacion">`. Los encabezados pueden existir en distintas secciones, pero en este caso el primero no aporta una función clara y convendría revisar la estructura para evitar anidamientos innecesarios. También es importante comprobar que los elementos principales queden correctamente anidados y cerrados.

---

## 8. Control de sesión y cierre de sesión: `js/eventos.js`

Código actual:

```javascript
const sesionActiva = sessionStorage.getItem("sesionEventos") === "activa";

if (!sesionActiva) {
    // La página de login está en la misma carpeta que eventos.html.
    window.location.replace("login.html");
} else {
    const botonCerrarSesion = document.querySelector("#cerrar-sesion");

    botonCerrarSesion.addEventListener("click", () => {
        sessionStorage.removeItem("sesionEventos");
        window.location.replace("../index.html");
    });
}
```

### 8.1. Consultar la sesión

```javascript
const sesionActiva = sessionStorage.getItem("sesionEventos") === "activa";
```

- `getItem("sesionEventos")` consulta el valor guardado con esa clave.
- `=== "activa"` compara el valor recuperado con el texto `"activa"`.
- El resultado de la comparación es un booleano: `true` o `false`.
- `sesionActiva` guarda ese resultado.

Si no existe la clave, `getItem()` devuelve `null`; `null === "activa"` es falso.

### 8.2. Condición de acceso

```javascript
if (!sesionActiva) {
    window.location.replace("login.html");
}
```

- `!` es el operador NOT (NO), invierte un booleano.
- `!sesionActiva` es verdadero cuando no hay una marca de sesión válida.
- `window.location.replace()` cambia la página actual y reemplaza la entrada actual del historial del navegador. En este caso envía al usuario al login.

La ruta `login.html` funciona porque ambos HTML están dentro de la carpeta `paginas/`.

### 8.3. Si la sesión está activa

```javascript
else {
    const botonCerrarSesion = document.querySelector("#cerrar-sesion");
    ...
}
```

`else` se ejecuta cuando la condición del `if` es falsa; es decir, cuando `sesionActiva` vale `true`.

Se busca el botón de cierre y se registra un evento `click`.

### 8.4. Cerrar sesión

```javascript
sessionStorage.removeItem("sesionEventos");
window.location.replace("../index.html");
```

- `removeItem()` elimina la clave indicada del almacenamiento de sesión.
- Después se redirige a `../index.html`, subiendo desde `paginas/` hasta la raíz.
- Al intentar entrar de nuevo a `eventos.html`, el control de sesión ya no encontrará el valor `"activa"` y redirigirá al login.

### Diferencia entre `href` y `replace()`

- `window.location.href = "ruta"` navega a otra dirección y normalmente agrega una entrada al historial.
- `window.location.replace("ruta")` navega reemplazando la entrada actual del historial.

Ninguno de estos mecanismos convierte el login de demostración en una protección segura del contenido: el control ocurre en el navegador.

---

## 9. Hoja de estilos: `css/styles.css`

CSS define cómo se presentan visualmente los elementos HTML. Una regla CSS tiene un selector y un bloque de declaraciones:

```css
.logo {
    color: white;
    font-weight: bold;
}
```

- `.logo` es el selector de clase. El punto `.` indica una clase.
- `{ }` delimitan las declaraciones.
- `color` es una propiedad.
- `white` es el valor.
- `;` termina una declaración.

### 9.1. Variables CSS

Al comienzo del archivo:

```css
:root {
    --color-azul: #1e3a8a;
    --color-celeste: #0ea5e9;
    --color-fondo: #f8fafc;
    --color-texto: #1e293b;
    --color-blanco: #ffffff;
    --color-whatsapp: #25D366;
    --color-whatsapp-hover: #1ebd56;
    --color-borde: #cbd5e1;
    --color-verde-exito: #16a34a;
    --color-fondo-exito: #dcfce7;
}
```

- `:root` selecciona el elemento raíz del documento.
- Una variable CSS comienza con dos guiones: `--`.
- `var(--color-azul)` permite reutilizar su valor en otras reglas.
- La ventaja es que un color se puede cambiar en un solo lugar y actualizará todas las reglas que lo utilicen.

| Variable | Uso |
|---|---|
| `--color-azul` | Color principal de navegación y botones. |
| `--color-celeste` | Acentos y estados de foco. |
| `--color-fondo` | Fondo general. |
| `--color-texto` | Texto principal. |
| `--color-blanco` | Texto o fondos blancos. |
| `--color-whatsapp` | Fondo normal del botón de WhatsApp. |
| `--color-whatsapp-hover` | Fondo del botón al pasar el cursor. |
| `--color-borde` | Bordes de campos. |
| `--color-verde-exito` | Color de mensajes de éxito. |
| `--color-fondo-exito` | Fondo de mensajes de éxito. |

### 9.2. Selectores CSS y símbolos

| Selector o símbolo | Significado |
|---|---|
| `body` | Selecciona la etiqueta `body`. |
| `.clase` | Selecciona elementos que tienen esa clase. |
| `#identificador` | Selecciona el elemento que tiene ese `id`. |
| `.padre .hijo` | Selecciona elementos `.hijo` que están dentro de `.padre`, a cualquier profundidad. |
| `.padre > .hijo` | Selecciona solamente hijos directos. |
| `:hover` | Estado cuando el puntero está sobre el elemento. |
| `:focus` | Estado cuando el elemento recibe el foco. |
| `:target` | Elemento cuyo `id` coincide con el fragmento actual de la URL. |
| `:not(:empty)` | Elemento que no coincide con `:empty`; en este caso, que no está vacío. |
| `*` | Selector universal: todos los elementos. |
| `::before`, `::after` | Pseudoelementos para contenido o formato antes/después del contenido del elemento. |
| `,` | Agrupa varios selectores para aplicarles las mismas reglas. |

### 9.3. Reglas generales y distribución

- `background-color`: color de fondo.
- `color`: color del texto.
- `font-family`: familia tipográfica.
- `font-size`: tamaño de letra.
- `font-weight`: grosor de letra.
- `margin`: espacio exterior.
- `padding`: espacio interior.
- `width` y `height`: ancho y alto.
- `max-width`: ancho máximo.
- `min-height`: alto mínimo.
- `border`: borde.
- `border-radius`: redondeo de esquinas.
- `box-shadow`: sombra.
- `text-align`: alineación del texto.
- `text-decoration`: decoración como subrayado.
- `display`: tipo de distribución del elemento.
- `gap`: espacio entre elementos de un contenedor Flexbox o Grid.
- `overflow: hidden`: recorta contenido que sobresale del contenedor.
- `cursor: pointer`: muestra el cursor de mano para indicar interacción.
- `transition`: suaviza el cambio de propiedades.
- `z-index`: orden de superposición de elementos posicionados.
- `box-sizing: border-box`: hace que el ancho y alto incluyan padding y borde.

### 9.4. Flexbox y Grid

El proyecto usa Flexbox en la navegación y formularios:

- `display: flex`: activa Flexbox.
- `flex-direction: column`: organiza los hijos en columna.
- `justify-content`: distribuye los hijos en el eje principal.
- `align-items`: alinea los hijos en el eje transversal.

También usa CSS Grid en los datos de eventos:

- `display: grid`: activa Grid.
- `grid-template-columns: 64px 1fr`: crea dos columnas; la primera mide 64 píxeles y la segunda ocupa el espacio restante.
- `1fr`: una fracción del espacio disponible.

### 9.5. Selectores y clases propias del proyecto

| Selector | Qué controla |
|---|---|
| `body` | Fondo, texto, tipografía y reinicio de márgenes. |
| `*`, `*:before`, `*:after` | Herencia del modelo `box-sizing`. |
| `.contenedor` | Ancho general del contenido, máximo 1100 px y centrado. |
| `.barra-navegacion` | Fondo azul y padding de la barra. |
| `.nav-contenido` | Distribución Flexbox del logo y navegación. |
| `.logo` | Color, peso, tamaño y decoración del nombre del sitio. |
| `.enlaces-nav` | Alineación horizontal y separación de enlaces. |
| `.enlaces-nav a` | Apariencia general de enlaces de navegación. |
| `.enlaces-nav a:hover` | Reduce opacidad al pasar el cursor. |
| `.enlaces-nav .btn-sesion` | Estilo especial del enlace de login de la página principal. |
| `.enlaces-nav .btn-sesion:hover` | Cambia fondo y mantiene el color del texto al pasar el cursor. |
| `.hero` | Imagen, capa de color, alineación y espaciado de la sección principal. |
| `.hero h1` | Tamaño y margen del título del hero. |
| `.hero p` | Tamaño, ancho máximo y centrado del párrafo. |
| `.btn-hero` | Apariencia del botón de acceso del hero. |
| `.btn-hero:hover` | Cambia el fondo del botón al pasar el cursor. |
| `.seccion-contacto` | Espaciado exterior vertical de la sección de contacto. |
| `.contenedor-contacto` | Fondo, ancho máximo, padding, esquinas y sombra del formulario. |
| `.contenedor-contacto h2` | Apariencia del título del formulario. |
| `.mensaje-exito` | Oculta y da estilo al mensaje de éxito. |
| `.mensaje-exito:target` | Muestra el mensaje cuando la URL apunta a `#exito`. |
| `.formulario` | Organiza los campos verticalmente con separación. |
| `.grupo-campo` | Agrupa etiqueta y campo en columna. |
| `.grupo-campo label` | Grosor y tamaño de las etiquetas. |
| `.grupo-campo input`, `.grupo-campo textarea` | Apariencia común de los campos de contacto. |
| `.grupo-campo input:focus`, `.grupo-campo textarea:focus` | Cambia el borde cuando el campo recibe foco. |
| `#carouselEventos` | Ancho máximo, centrado y espacio para las flechas del carrusel. |
| `.carousel-control-prev` | Posición horizontal del control anterior. |
| `.carousel-control-next` | Posición horizontal del control siguiente. |
| `.boton-enviar` | Apariencia del botón de envío de contacto. |
| `.boton-enviar:hover` | Cambia el fondo al pasar el cursor. |
| `.whatsapp-flotante` | Fija y da forma circular al botón flotante de WhatsApp. |
| `.whatsapp-flotante:hover` | Cambia el fondo y aumenta ligeramente el tamaño. |
| `.pie-pagina` | Fondo, color, alineación y espaciado del footer. |
| `.pagina-login` | Hace que la página de login ocupe al menos la altura de la pantalla y organiza su contenido en columna. |
| `.pagina-login .logo` | Alinea el logo y su icono en línea. |
| `.logo-icon` | Tamaño, fondo, alineación y forma del icono decorativo. |
| `.enlace-volver`, `.volver-login` | Reglas compartidas de enlaces para volver. |
| `.enlace-volver:hover` | Subraya el enlace al pasar el cursor. |
| `.zona-login` | Centra verticalmente la tarjeta y define el fondo de la zona central. |
| `.tarjeta-login` | Fondo, bordes redondeados y sombra de la tarjeta. |
| `.etiqueta-login` | Estilo del texto pequeño “ACCESO A EVENTOS”. |
| `.tarjeta-login h1` | Estilo del título de bienvenida. |
| `.descripcion-login` | Estilo del texto descriptivo. |
| `.tarjeta-login .form-label` | Estilo de las etiquetas de los campos Bootstrap dentro de la tarjeta. |
| `.tarjeta-login .form-control` | Altura, borde y color de los campos Bootstrap. |
| `.tarjeta-login .form-control:focus` | Borde y sombra del campo activo. |
| `.tarjeta-login .boton-login`, `.tarjeta-login .boton-login:focus` | Estilo del botón de login y su estado de foco. |
| `.tarjeta-login .boton-login:hover` | Color del botón al pasar el cursor. |
| `.mensaje-login` | Estilo del mensaje de error del login; inicia oculto. |
| `.mensaje-login:not(:empty)` | Muestra el mensaje cuando tiene contenido. |
| `.nota-login` | Estilo de la nota de acceso de demostración. |
| `.volver-login` | Convierte el enlace de regreso en un bloque centrado y le asigna color. |
| `.volver-login:hover` | Cambia el color y subraya el enlace. |
| `.pie-login` | Elimina el margen superior del footer de login. |
| `.event` | Centra texto; esta clase no aparece aplicada en el HTML actual. |
| `.btn-cerrar-sesion` | Apariencia del botón de cerrar sesión. |
| `.btn-cerrar-sesion:hover` | Invierte el fondo y el texto al pasar el cursor. |
| `.encabezado-eventos` | Fondo degradado, padding y color del encabezado de eventos. |
| `.etiqueta-eventos` | Estilo de la etiqueta “AGENDA”. |
| `.encabezado-eventos h1` | Tamaño adaptable del título principal de eventos. |
| `.encabezado-eventos .contenedor>p:last-child` | Estilo del último párrafo hijo directo del contenedor del encabezado. |
| `.tarjeta-evento` | Borde, fondo, esquinas, sombra y recorte de la tarjeta. |
| `.imagen-evento` | Tamaño y recorte de las imágenes de las tarjetas. |
| `.contenido-evento` | Espaciado interno del contenido de la tarjeta. |
| `.categoria-evento` | Apariencia de la etiqueta de categoría. |
| `.contenido-evento h2` | Estilo del título de cada evento. |
| `.descripcion-evento` | Altura mínima, margen y color de la descripción. |
| `.datos-evento` | Distribución Grid de los datos y borde superior. |
| `.datos-evento div` | Dos columnas para etiqueta y valor del dato. |
| `.datos-evento dt` | Estilo del nombre del dato. |
| `.datos-evento dd` | Estilo del valor del dato. |
| `.pie-eventos` | Elimina el margen superior del footer de eventos. |

### 9.6. Unidades y valores que aparecen

- `px`: píxeles; unidad fija de referencia para tamaños.
- `rem`: tamaño relativo al tamaño de fuente raíz del documento.
- `%`: porcentaje del tamaño del elemento contenedor o del contexto correspondiente.
- `vh`: porcentaje de la altura de la ventana del navegador; `100vh` equivale a la altura completa.
- `fr`: fracción del espacio disponible en CSS Grid.
- `rgba(r, g, b, a)`: color con canal alfa; `a` controla transparencia.
- `#ffffff`: color hexadecimal.
- `transparent`: ausencia de color de fondo.
- `auto`: permite que el navegador calcule el valor según el contexto.
- `inherit`: hereda el valor de la propiedad desde el elemento padre.
- `!important`: da prioridad a esa declaración frente a declaraciones normales en la cascada; conviene usarlo con moderación.

### 9.7. Diseño adaptable con `@media`

El archivo tiene reglas:

```css
@media (max-width: 575.98px) {
    /* ajustes para pantallas pequeñas */
}
```

`@media` aplica las reglas internas solo cuando se cumple la condición. En este caso, se aplican cuando el ancho de la ventana es de 575.98 píxeles o menos.

Se ajustan el espacio de la zona de login, la posición de los elementos de navegación, el tamaño del logo y la altura de los campos. Hay dos bloques `@media` con el mismo límite; podrían combinarse en una sola regla para mantener el CSS más organizado.

### 9.8. Particularidad de `:not(:empty)` en el mensaje de login

```css
.mensaje-login {
    display: none;
}

.mensaje-login:not(:empty) {
    display: block;
}
```

Primero el mensaje está oculto. Cuando JavaScript asigna texto con `mensajeLogin.textContent`, el elemento deja de estar vacío y coincide con `:not(:empty)`, por lo que se muestra.

### 9.9. Particularidad de `!important` en el carrusel

En `#carouselEventos` se usa:

```css
padding-left: 60px !important;
padding-right: 100px !important;
```

`!important` hace que esas declaraciones tengan prioridad frente a declaraciones normales que compitan por la misma propiedad. Se utilizó para reservar espacio interno para las flechas del carrusel. Antes de agregar `!important`, conviene comprobar si se puede resolver con especificidad o con el orden de las reglas.

---

## 10. Clases de Bootstrap utilizadas

Bootstrap es un framework CSS que ofrece clases listas para aplicar estilos y distribuciones sin escribir todas las reglas desde cero.

| Clase | Función |
|---|---|
| `container` | Contenedor centrado con ancho adaptable. |
| `container-fluid` | Contenedor que ocupa todo el ancho. |
| `row` | Fila del sistema de rejilla. |
| `col-12`, `col-sm-10`, `col-md-7`, `col-lg-5` | Anchos de columna según el tamaño de pantalla. |
| `justify-content-center` | Centra elementos en el eje principal de Flexbox. |
| `py-5` | Padding vertical nivel 5. |
| `text-center` | Centra el texto. |
| `fw-bold` | Texto en negrita. |
| `mb-2`, `mb-3`, `mb-4` | Margen inferior de distintos niveles. |
| `text-muted` | Texto con color atenuado. |
| `text-secondary` | Color secundario de texto. |
| `text-danger` | Color asociado a peligro/error. |
| `text-dark` | Color de texto oscuro. |
| `bg-primary` | Fondo de color principal. |
| `bg-success` | Fondo de color de éxito. |
| `bg-warning` | Fondo de advertencia. |
| `bg-white` | Fondo blanco. |
| `badge` | Etiqueta pequeña. |
| `btn` | Estilo base de botón. |
| `btn-primary` | Botón principal. |
| `btn-outline-primary` | Botón con borde del color principal. |
| `btn-outline-success` | Botón con borde verde. |
| `btn-outline-warning` | Botón con borde de advertencia. |
| `btn-sm` | Botón pequeño. |
| `rounded-3`, `rounded-4`, `rounded-pill` | Diferentes redondeos de esquinas. |
| `shadow-sm` | Sombra pequeña. |
| `overflow-hidden` | Oculta el contenido que sobresale. |
| `p-4`, `p-md-5` | Padding general y padding desde breakpoint `md`. |
| `w-100` | Ancho del 100%. |
| `d-block` | `display: block`. |
| `d-flex` | `display: flex`. |
| `small` | Presentación de texto pequeño. |
| `text-decoration-none` | Elimina la decoración del texto. |
| `carousel`, `slide`, `carousel-inner`, `carousel-item` | Clases estructurales del carrusel. |
| `carousel-control-prev`, `carousel-control-next` | Clases de los controles del carrusel. |
| `carousel-control-prev-icon`, `carousel-control-next-icon` | Iconos de los controles. |
| `visually-hidden` | Oculta visualmente el texto, pero lo conserva para lectores de pantalla. |
| `form-label` | Estilo Bootstrap para etiquetas de campos. |
| `form-control` | Estilo Bootstrap para campos de formulario. |
| `card`, `card-body` | Estructura de tarjeta. |
| `border-0` | Elimina el borde. |
| `shadow-sm` | Aplica una sombra pequeña. |

Los breakpoints de Bootstrap (`sm`, `md`, `lg`, etc.) permiten que una clase se aplique desde cierto ancho de pantalla. Por ejemplo, `col-md-7` se aplica desde el breakpoint mediano en adelante.

---

## 11. Font Awesome

Font Awesome es una biblioteca de iconos. El proyecto carga su CSS externo y utiliza clases en etiquetas `<i>`.

Ejemplos:

```html
<i class="fa-brands fa-whatsapp"></i>
<i class="fa-solid fa-location-dot"></i>
```

- `fa-brands`: selecciona iconos de marcas.
- `fa-solid`: selecciona iconos sólidos.
- `fa-whatsapp`: selecciona el icono de WhatsApp.
- `fa-location-dot`: selecciona el icono de ubicación.

El icono es decorativo cuando el enlace ya tiene un nombre accesible, por ejemplo `aria-label="Contactar por WhatsApp"`.

---

## 12. Flujo completo entre las páginas

### Iniciar sesión correctamente

```text
index.html
    |
    | El usuario selecciona "Iniciar sesión"
    v
paginas/login.html
    |
    | Escribe Pedrito / 12345 y envía
    v
js/login.js
    |
    | Comprueba los datos
    | Guarda sesionEventos = activa
    v
paginas/eventos.html
    |
    | js/eventos.js comprueba sessionStorage
    v
Se muestra la página de eventos
```

### Intentar entrar sin sesión

```text
paginas/eventos.html
    |
    | eventos.js consulta sessionStorage
    | No encuentra "sesionEventos" = "activa"
    v
Redirección a paginas/login.html
```

### Cerrar sesión

```text
paginas/eventos.html
    |
    | El usuario hace clic en "Cerrar sesión"
    v
eventos.js
    |
    | removeItem("sesionEventos")
    | Redirección a ../index.html
    v
index.html
```

---

## 13. Git y GitHub: trabajo en equipo

Git es un sistema de control de versiones. Permite registrar cambios en el código, comparar versiones y colaborar. GitHub aloja repositorios Git en la nube y facilita el trabajo grupal.

### Conceptos

- **Repositorio:** carpeta del proyecto cuyo historial controla Git.
- **Working tree:** archivos de trabajo actuales.
- **Commit:** fotografía o registro de un conjunto de cambios.
- **Branch:** línea de trabajo independiente; en este proyecto se observa la rama `main`.
- **Remote:** repositorio remoto, por ejemplo `origin`.
- **Push:** enviar commits locales al repositorio remoto.
- **Pull:** traer e integrar cambios del repositorio remoto.
- **Merge:** integrar cambios de una rama en otra.
- **Historial:** lista de commits realizados.

### Comandos habituales

```bash
git status
```
Muestra la rama actual y los archivos modificados, preparados o sin seguimiento.

```bash
git add archivo
```
Prepara un archivo para incluirlo en el próximo commit.

```bash
git add .
```
Prepara todos los cambios del directorio actual y sus subdirectorios. Antes de usarlo, conviene revisar `git status`.

```bash
git commit -m "mensaje claro del cambio"
```
Crea un commit con los cambios preparados.

```bash
git pull origin main
```
Trae e integra los cambios de la rama `main` del remoto `origin`.

```bash
git push origin main
```
Envía los commits locales de `main` al remoto.

```bash
git log --oneline
```
Muestra el historial de commits de forma resumida.

### Buenas prácticas para el equipo

1. Antes de empezar a trabajar, ejecutar `git pull origin main`.
2. Revisar `git status` para conocer el estado del proyecto.
3. Hacer cambios relacionados y pequeños.
4. Probar la página antes de confirmar los cambios.
5. Preparar solo los archivos que corresponden al cambio.
6. Crear commits con mensajes descriptivos.
7. Antes de hacer push, revisar si otros compañeros subieron cambios.
8. Coordinar los cambios en archivos compartidos como `styles.css`.

El archivo `.git/` incluido en el ZIP contiene información interna del repositorio y su historial. No hace falta incluirlo dentro de la documentación ni modificarlo manualmente.

---

## 14. Observaciones y mejoras identificadas al revisar esta versión

Estas observaciones no impiden entender el proyecto; sirven para distinguir lo que ya funciona de lo que podría mejorarse.

1. **Login de demostración:** las credenciales están en JavaScript y la marca de sesión está en `sessionStorage`. No es seguridad real. No debe proteger información sensible.
2. **Enlace de contacto en eventos:** `paginas/eventos.html` apunta a `contacto.html`, pero ese archivo no está en la estructura recibida. Se puede crear esa página o enlazar al formulario de `../index.html#contacto`.
3. **Contenedor `#lista-eventos`:** está vacío y las tarjetas están escritas directamente en HTML. No hay código que genere las tarjetas dinámicamente.
4. **Formulario de contacto:** el formulario no envía datos a un servidor ni a un correo; solo activa el mensaje visual `#exito`.
5. **Enlaces “Más información”:** los enlaces usan `href="#"`; todavía no llevan a información individual de cada evento.
6. **Encabezados anidados:** `eventos.html` tiene un `<header>` que contiene otro `<header>`. Conviene simplificar la estructura.
7. **Accesibilidad de WhatsApp:** en `eventos.html` el enlace tiene `aria-label`, pero sería conveniente agregar `rel="noopener noreferrer"` cuando se usa `target="_blank"`, como ya está en el login.
8. **CSS responsive repetido:** existen dos bloques `@media (max-width: 575.98px)` que pueden combinarse para facilitar el mantenimiento.
9. **Clase `.event`:** está definida en CSS, pero no se observa aplicada en el HTML actual.
10. **Bootstrap JavaScript:** `index.html` carga el bundle necesario para el carrusel. Las páginas de login y eventos no utilizan componentes interactivos de Bootstrap que requieran ese JavaScript en el código actual.

---

## 15. Preguntas para practicar y comprobar el aprendizaje

Intenta responderlas con tus propias palabras antes de consultar el código.

1. ¿Cuál es la diferencia entre `class` e `id` en HTML?
2. ¿Por qué `login.html` usa `../css/styles.css` en vez de `css/styles.css`?
3. ¿Qué hace `document.querySelector()`?
4. ¿Qué diferencia hay entre `=` y `===` en JavaScript?
5. ¿Qué diferencia hay entre `||` y `&&`?
6. ¿Por qué se utiliza `preventDefault()` al enviar el formulario?
7. ¿Qué hace `return` dentro de una función?
8. ¿Qué diferencia hay entre `sessionStorage.setItem()`, `getItem()` y `removeItem()`?
9. ¿Por qué `eventos.js` redirige al login si no encuentra una sesión activa?
10. ¿Qué hace `:hover` en CSS?
11. ¿Qué significa `display: flex`?
12. ¿Para qué sirve `@media`?
13. ¿Qué aporta Bootstrap y qué aporta el CSS propio?
14. ¿Por qué el formulario de contacto no envía realmente un correo?
15. ¿Cuál es la diferencia entre `git commit` y `git push`?

---

## 16. Glosario rápido

| Término | Explicación sencilla |
|---|---|
| HTML | Lenguaje que estructura el contenido de la página. |
| CSS | Lenguaje que define la apariencia visual. |
| JavaScript | Lenguaje que agrega lógica e interacción. |
| Etiqueta | Elemento HTML, por ejemplo `<p>` o `<button>`. |
| Atributo | Información adicional de una etiqueta, por ejemplo `id` o `href`. |
| Clase | Nombre reutilizable para aplicar estilos o seleccionar elementos. |
| Selector | Patrón CSS usado para encontrar elementos. |
| Propiedad CSS | Característica que se quiere modificar, por ejemplo `color`. |
| Valor CSS | Configuración asignada a una propiedad, por ejemplo `blue`. |
| Variable | Espacio con nombre donde se guarda un valor. |
| Objeto | Estructura JavaScript que agrupa propiedades y valores. |
| Función | Bloque de instrucciones que puede ejecutarse. |
| Evento | Acción detectada por el navegador, como `click` o `submit`. |
| Condición | Expresión que se evalúa como verdadera o falsa. |
| Booleano | Tipo de dato con dos valores: `true` o `false`. |
| DOM | Representación de la estructura HTML que JavaScript puede consultar y modificar. |
| Responsive | Diseño que se adapta a diferentes tamaños de pantalla. |
| Framework | Conjunto de herramientas y estilos reutilizables, como Bootstrap. |
| CDN | Red de distribución desde la que se cargan recursos externos. |
| Sesión | Estado temporal asociado a la navegación del usuario. |
| Repositorio | Proyecto cuyo historial está gestionado por Git. |
| Commit | Registro de cambios en Git. |
| Push | Envío de commits al repositorio remoto. |
| Pull | Descarga e integración de cambios remotos. |

---

## 17. Recomendación para estudiar este proyecto

No intentes memorizar todas las líneas de una sola vez. Estudia por capas:

1. Primero identifica qué muestra cada página.
2. Después relaciona las etiquetas HTML con las clases CSS.
3. Luego comprende las variables y los selectores de JavaScript.
4. Sigue el recorrido completo del login y el cierre de sesión.
5. Finalmente practica explicando una funcionalidad sin leer el código.

Una buena explicación técnica siempre responde tres preguntas:

- **Qué hace:** cuál es el resultado visible o funcional.
- **Cómo lo hace:** qué etiquetas, clases, variables, métodos o condiciones intervienen.
- **Por qué se hace así:** qué necesidad resuelve esa parte del código.

