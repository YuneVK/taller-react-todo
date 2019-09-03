# Taller React: aplicación To-do

Este repo lo vamos a utilizar como segunda parte de la charla [<devs> Taller de React: de 0 a ninja </devs>](https://www.meetup.com/es-ES/WordPress-Madrid/events/263751142/), haciendo ahora un ejercicio práctico.

> Los slides de la primera parte [los puedes ver aquí](#).

En la primera parte hemos visto qué es React, hemos echado un vistazo a su ecosistema y repasado cuáles son los elementos más importantes: componentes, estado y props. Si has aguantado hasta aquí, ¡ahora viene lo mejor! Vamos a poner todo esto en práctica para que empieces tu camino a ser ninja.

![Ninja](https://media.giphy.com/media/ErdfMetILIMko/source.gif)

## ¿Qué vamos a hacer?



> 💡 Si en algún momento te atascas y no sabes cómo continuar, ¡no dudes en preguntarnos! Aunque te vamos a dejar una pista 😏, en la rama `solucion` podrás ver el código del ejercicio (recuerda que puedes cambiar de rama con el comando `git checkout <nombre>`). Puedes tenerlo como referencia, ¡pero recuerda que como se aprende de verdad es peleándote con el código!

## Creando nuestra aplicación

### 1. Setup inicial

El primer paso es sencillo: ¡hay que configurar nuestro entorno de trabajo!

1. Instalar `create-react-app` de forma global: `npm install -g create-react-app`. Con `-g` indicamos que es un paquete que vamos a instalar a nivel global.
2. Clonar este repositorio: `git clone https://github.com/YuneVK/taller-react-todo`
3. Entrar en el directorio del repo: `cd taller-react-todo`
4. Inicializar el proyecto de React: `create-react-app .`. Con el `.` indicamos que se instale en el directorio actual. Si quisiéramos que se creara una carpeta tendríamos que indicar su nombre así: `create-react-app nombre-de-la-carpeta`.
5. Arrancar el proyecto: `npm start`.
6. Abrir el navegador y entrar a la dirección `localhost:3000` para comprobar que está funcionando.

[AÑADIR CAPTURA]

It works! 😁 ¡Seguimos!

> ⚠️ **¿Tienes algún problema con Git/Node y no puedes seguir estos pasos?** ¡No te preocupes! Hemos creado este repo de Codesandbox para que no te pierdas nada del taller. Así puedes seguirlo, y cuando termine vemos cómo podemos arreglar esos problemas. 😉

### 2. Destripando la estructura del proyecto

En este paso vamos a ver mientras la estructura del proyecto generado:

```javascript
MyWebApp/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Tenemos tres carpetas: `node_modules`, `src` y `public`.

- `node_modules`: es donde de almacenan las dependencias del proyecto.
- `public`: la raíz del servidor, donde está el `index.html` y donde añadiremos los archivos estáticos que queramos utilizar (por ejemplo las imágenes).
- `src`: el directorio `source`, donde estará todo el código relativo a compoentes

Además, en la raíz también tenemos los siguientes archivos:

- `README.md`: archivo markdown con la información del proyecto.
- `package.json`: donde está la información de nuestro proyecto (dependencias, scripts, etc).
- `.gitignore`: donde se configuran los archivos que `git` va a ignorar, es decir, los que no se van a subir. ¡CUIDADO CON SUBIR NODE_MODULES! Esta carpeta suele ser muy pesada e innecesaria la subida, por lo que se suele añadir aquí.

Otro archivo clave en este proyecto es el `index.js` que está dentro de la carpeta `src`, ya que es el punto de entrada de la aplicación. Si lo abrimos veremos que tiene muy pocas líneas:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Pero son claves para su funcionamiento. Como hablamos antes, lo primero es importar `React` y todos sus paquetes necesarios (`react-dom`), además del componente principal que vamos a utilizar, `App`.

A través del método `ReactDOM.render` renderizamos el compoente `App` dentro del elemento del DOM que tiene como ID `root` (una pista, si vamos a `public/index.html` veremos ese elemento).

Si vamos al componente App (`src/App.js`) veremos el siguiente contenido:

```react
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
        </div>
          <p className="App-intro">
            Lista de usuarios
          </p>
      </div>
    );
  }
}

export default App;
```

Esto ya te va resultando familiar, ¿verdad? 😄

> ⚠️ **¡Recuerda!** `class` es una palabra reservada de JavaScript, por lo que, cuando queramos establecer este atributo, tendremos que hacerlo con `className`.

> ⚠️ **¡Otra cosa que debes tener en cuenta!** En React es necesario que todo lo que retornemos esté contenido en un único elemento. Por ejemplo, esto nos daría error:
>
> ```react
> return (
>   <h1>Elemento</h1>
>   <h2>Elemento</h2>
> );
> ```
>
> Mientras que esto sí sería correcto:
>
> ```react
> return (
> 	<div>
>   	<h1>Elemento</h1>
>   	<h2>Elemento</h2>
>   </div>
> );
> ```
>
> 💡 **Una pista**: para estos casos, si no quieres añadir elementos innecesarios, puedes utilizar [fragments](https://es.reactjs.org/docs/fragments.html).

## ¡Bonus! Vamos a hacer un deploy



## ¡Ya está! ¿Y ahora qué?

¡Enhorabuena! ¡Has completado el taller! 🎉

Esperamos que hayas aprendido mucho y te hayas quedado con ganas de seguir trasteando. 😉 ¡Eso es lo importante!

Ahora tienes un mundo abierto de posibilidades: puedes tratar de mejorar tu aplicación, añadir nuevas funcionalidades, incorporar un backend, seguir estudiando, practicando, ¡lo que tú quieras!

Si quieres seguir ampliando información, en el siguiente apartado te hemos dejado algunos enlaces útiles. ¡Pero tómatelo con calma!

#### Recursos útiles para ampliar información