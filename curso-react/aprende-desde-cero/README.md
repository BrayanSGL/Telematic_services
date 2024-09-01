# Aprende React desde Cero

React es una biblioteca de JavaScript de código abierto creada por Facebook, diseñada para construir interfaces de usuario interactivas y dinámicas. Es una de las herramientas más populares para el desarrollo de aplicaciones web modernas.

## ¿Por qué aprender React?

- **Alta demanda laboral:** React es una tecnología muy demandada en el mercado actual, lo que la convierte en una habilidad valiosa.
- **Uso en grandes aplicaciones:** React es utilizado por grandes empresas como Facebook, Instagram, WhatsApp, Netflix, Airbnb, Uber y Twitter.
- **Desarrollo rápido y económico:** También se usa para crear aplicaciones móviles con React Native. Aunque las aplicaciones nativas con Swift o Kotlin pueden ser más optimizadas, React Native permite un desarrollo más rápido y económico.
- **Comunidad activa:** React tiene una comunidad muy grande y activa, con abundantes tutoriales, cursos y documentación disponibles.
- **API estable:** La API de React ha permanecido estable a lo largo de los años, facilitando el aprendizaje y la adaptación a nuevas versiones.
- **Versatilidad:** Aprender React te prepara para dominar otros frameworks de JavaScript como Angular, Vue, o Svelte.

## ¿Qué es Vanilla JS?

Vanilla JS es el uso de JavaScript puro, sin ningún framework o biblioteca adicional. A continuación, se muestra un ejemplo de código imperativo con Vanilla JS:

```html
<button data-id="123">Me gusta</button>

<style>
  button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<script>
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      button.textContent = 'Me gusta';
    } else {
      button.classList.add('liked');
      button.textContent = 'Ya no me gusta';
    }
  });
</script>
```

Este código es imperativo, ya que le dice al navegador exactamente qué hacer paso a paso. Sin embargo, React adopta un enfoque declarativo, donde describes lo que quieres lograr y React se encarga del resto.

## Ejemplo en React

En React, puedes crear componentes reutilizables y manejables. Aquí hay un ejemplo simple de cómo crear y renderizar un botón en React:

```jsx
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button', { id: '123', className: 'button' }, 'Me gusta');

root.render(button);
```

React permite manejar múltiples elementos mediante contenedores o fragmentos:

```jsx
const button1 = React.createElement('button', { id: '123', className: 'button' }, 'Me gusta');
const button2 = React.createElement('button', { id: '124', className: 'button' }, 'Me gusta');
const button3 = React.createElement('button', { id: '125', className: 'button' }, 'Me gusta');

const container = React.createElement(React.Fragment, null, button1, button2, button3);

root.render(container);
```

Para escribir código de forma más declarativa, puedes usar JSX, que permite escribir HTML dentro de JavaScript:

```jsx
<React.Fragment>
  <button id="123" className="button">Me gusta</button>
  <button id="124" className="button">Me gusta</button>
  <button id="125" className="button">Me gusta</button>
</React.Fragment>
```

## ¿Qué es JSX?

JSX es una extensión de JavaScript que permite escribir HTML dentro de JavaScript. Aunque parece HTML, en realidad es JavaScript que se convierte en elementos HTML.

### Cosas importantes sobre JSX:

1. **Expresiones en JSX:**

```jsx
const element = <strong>Número aleatorio: {Math.random()}</strong>;
```

Dentro de las llaves `{}` puedes escribir cualquier expresión de JavaScript.

2. **Atributos en JSX:**

```jsx
const element = <button dataId="123">Me gusta</button>;
```

En JSX, los atributos siguen la convención camelCase.

3. **Seguridad en JSX:**

React no ejecuta código arbitrario, lo que evita la inyección de scripts maliciosos:

```jsx
const response = '<script>alert("hola")</script>';
const element = <p>{response}</p>;
```

Este código es seguro ya que el script no se ejecutará.

## Configuración del Proyecto con Vite

Vite es un bundler que facilita la configuración de un proyecto React con soporte para JSX:

1. Inicializa un nuevo proyecto con npm:
    ```bash
    npm init -y
    ```
2. Crea un proyecto React con Vite:
    ```bash
    npm create vite@latest
    ```
3. Sigue las instrucciones para nombrar el proyecto y seleccionar React con JavaScript + SWC.
4. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```
5. Instala las dependencias:
    ```bash
    npm install
    ```
6. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
