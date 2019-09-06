# ⚛︎ Taller React: aplicación To-do

Este repo lo vamos a utilizar como segunda parte de la charla [<devs> Taller de React: de 0 a ninja </devs>](https://www.meetup.com/es-ES/WordPress-Madrid/events/263751142/), haciendo ahora un ejercicio práctico.

> 👉 Los slides de la primera parte [los puedes ver aquí](#).

En la primera parte hemos visto qué es React, hemos echado un vistazo a su ecosistema y repasado cuáles son los elementos más importantes: componentes, estado y props. Si has aguantado hasta aquí, ¡ahora viene lo mejor! Vamos a poner todo esto en práctica para que empieces tu camino a ser ninja. 😎

![Ninja](https://media.giphy.com/media/ErdfMetILIMko/source.gif)

## ¿Qué vamos a hacer?



> 💡 Si en algún momento te atascas y no sabes cómo continuar, ¡no dudes en preguntarnos! Aunque te vamos a dejar una pista 😏, en la rama `solucion` podrás ver el código del ejercicio (recuerda que puedes cambiar de rama con el comando `git checkout <nombre>`). Puedes tenerlo como referencia, ¡pero recuerda que como se aprende de verdad es peleándote con el código!

## Creando nuestra aplicación

### 1. Setup inicial

El primer paso es sencillo: ¡hay que configurar nuestro entorno de trabajo!

1. Instala `create-react-app` de forma global: `npm install -g create-react-app`. Con `-g` indicamos que es un paquete que vamos a instalar a nivel global.
2. Clona este repositorio: `git clone https://github.com/YuneVK/taller-react-todo`
3. Entra en el directorio del repo: `cd taller-react-todo`
4. Inicializa el proyecto de React: `create-react-app .`. Con el `.` indicamos que se instale en el directorio actual. Si quisiéramos que se creara una carpeta tendríamos que indicar su nombre así: `create-react-app nombre-de-la-carpeta`.
5. Arranca el proyecto: `npm start`.
6. Abre el navegador y entra a la dirección `localhost:3000` para comprobar que está funcionando.

[AÑADIR CAPTURA]

_It works!_ 😁 ¡Seguimos!

> ⚠️ **¿Tienes algún problema con Git/Node y no puedes seguir estos pasos?** ¡No te preocupes! Hemos creado este repo de Codesandbox [❗️AÑADIR ENLACE] para que no te pierdas nada del taller. Así puedes seguirlo, y cuando termine vemos cómo podemos arreglar esos problemas. 😉

### 2. Destripando la estructura del proyecto

En este paso vamos a ver mientras la estructura del proyecto generado (los archivos que no hemos incluido los vamos a ignorar hoy 🤫):

```
taller-react-todo/
  node_modules/
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
  package.json
  README.md
```

Tenemos tres carpetas: `node_modules`, `src` y `public`.

- `node_modules`: es donde de almacenan las dependencias del proyecto.
- `public`: la raíz del servidor, donde está el `index.html` y donde añadiremos los archivos estáticos que queramos utilizar (por ejemplo las imágenes).
- `src`: el directorio `source`, donde estará todo el código relativo a compoentes

Además, en la raíz también tenemos los siguientes archivos:

- `README.md`: archivo markdown con la información del proyecto.

- `package.json`: donde está la información de nuestro proyecto (dependencias, scripts, etc).

- `.gitignore`: donde se configuran los archivos que `git` va a ignorar, es decir, los que no se van a subir. Un ejemplo de archivos que se deben subir es aquel donde tengas _API keys_.

  > ⚠️ **¡CUIDADO CON SUBIR `NODE_MODULES!`** Esta carpeta suele ser muy pesada e innecesaria la subida, por lo que se suele añadir al `.gitignore` para que no se suba. Por defecto `create-react-app`ya lo añade, pero debes tenerlo en cuenta para otros proyectos en los que utilices NPM.

Otro archivo clave en este proyecto es el `index.js` que está dentro de la carpeta `src`, ya que es el punto de entrada de la aplicación. Si lo abrimos veremos que tiene muy pocas líneas:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
```

Pero son claves para su funcionamiento. Como hablamos antes, lo primero es importar `React` y todos sus paquetes necesarios (`react-dom`), además del componente principal que vamos a utilizar, `App`.

A través del método `ReactDOM.render` renderizamos el componente `App` dentro del elemento del DOM que tiene como ID `root` (una pista, si vamos a `public/index.html` veremos ese elemento).

Si vamos al componente App (`src/App.js`) veremos el siguiente contenido:

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Esto ya te va resultando familiar, ¿verdad? 😄

> ⚠️ **¡Recuerda!** `class` es una palabra reservada de JavaScript, por lo que, cuando queramos establecer este atributo, tendremos que hacerlo con `className`.

> ⚠️ **¡Otra cosa que debes tener en cuenta!** En React es necesario que todo lo que retornemos esté contenido en un único elemento. Por ejemplo, esto nos daría error:
>
> ```js
> return (
> <h1>Elemento</h1>
> <h2>Elemento</h2>
> );
> ```
>
> Mientras que esto sí sería correcto:
>
> ```js
> return (
> 	<div>
>     <h1>Elemento</h1>
>     <h2>Elemento</h2>
> 	</div>
> );
> ```
>
> 💡 **Una pista**: para estos casos, si no quieres añadir elementos innecesarios, puedes utilizar [fragments](https://es.reactjs.org/docs/fragments.html).

### 3. Limpiando el código

Antes de añadir nada, vamos a hacer un poco de limpieza 🧹 al código que viene por defecto, básicamente al componente App (recuerda, `src/App.js`).

Vamos a quitar todo lo que devuelva el método `render()` para dejar solo el `div` padre, además de borrar la importación del logo que no vamos a utilizar (`import logo from './logo.svg';`), quedando así:

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* El código de la app irá aquí */}
      </div>
    );
  }
}

export default App;
```

También vamos a hacer una limpieza de su archivo de estilos, `App.css`, borrando todo su contenido.

🧹 Ahora que hemos dejado el código algo más limpio, ¡vamos a empezar a añadir el nuestro para darle forma a la aplicación!

### 4. Añadiendo estilos

Sí, estamos en _front_, así que, aunque no nos centraremos en los estilos de la aplicación, sí vamos a intentar hacer las cosas con una estética mínimamente decente. 😜

Hemos preparado este CSS para que lo añadas a `App.css`, con las clases que utilizaremos a continuación:

```css
// ADD CSS
```

Ya tenemos nuestro `setup`, así que vamos con los componentes lógicos.

### 5. Establecer y leer elementos con el state

Comenzamos estableciendo los elementos es nuestro `to-do` que estarán disponibles al iniciar la aplicación.

¿Recuerdas cuando hablamos antes del `state`? Comentamos que el `state` (o estado) de un componente permite manejar datos propios a lo largo de su ciclo de vida. Es decir, es una información, un dato local de ese componente.

Nuestra aplicación va a tener una lista de tareas, por lo que, si lo piensas, ese listado debería formar parte del estado de un componente, en este caso App.

Recuerda que, mediantes los Hooks, podemos definir el estado de un componente con la siguiente sintaxis:

```js
function Componente() {
  const [fooBar, setFooBar] = useState("Este sería el valor inicial");

  // ...
}
```

Vamos a seguir esta sintaxis para establecer el estado `items` a nuestro componente `App`:

```js
function App() {
  const [items, setItems] = useState([
    {
      content: "Tarea 1"
    }, 
    {
      content: "Tarea 2"
    }, 
    {
      content: "Tarea 3"
    }
  ]);

  // ...
}
```

> ⚠️ Como estás usando la función `useState`, vas a tener que importarla, así que cambia la línea 1 por lo siguiente:
>
> ```js
> import React, { useState } from "react";
> ```

Ya los tenemos establecidos en el componente, ¡así que toca mostrar el listado! Como `todos` es un array, tendremos que recorrerlo para renderizar un elemento por cada uno. Para ello, establece el método `reader()` de tu componente `App` así:

```js
 return (
    <div className="App">
      <div className="todo-list">
        {items.map((item, index) => (
          <div className="App">
      			<ul className="TodoList">
        			{items.map((item, index) => (
          			<li key={index} className="TodoItem">
            			{item.content}
          			</li>
        			))}
      			</ul>
    			</div>
        ))}
      </div>
    </div>
  );
```

> 💡 **¡Recuerda!** El método [`map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) recorre un array y devuelve un nuevo array con los resultados de la función que recibe por parámetro, que es aplicada a cada elemento del array. Es muy común su uso en React para renderizar componentes en función de un listado.

Ahora vuelve al navegador y comprueba que todo funciona correctamente. :crossed_fingers:

[AÑADIR IMAGEN]

Ya vemos el listado, pero es el momento de hacer un pequeño `refactor`, ya que tenemos que pensar en componentes. Por eso, vamos a crear uno que sea el encargado de mostrar un elemento de la lista.

Para ello, crea una carpeta llama `components` dentro de `src` y, dentro de esta carpeta, un archivo `Item.js`, quedando la estructura así:

```
MyWebApp/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
  	components/
  		Item.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

> 💡 Crear una carpeta `components` no es obligatorio, puedes tener todos tus componentes sueltos en `src`, aunque se suelen poner en una carpeta por convenio, para organizar el código. ¡Sigue unas buenas prácticas y tu yo el futuró te lo agradecerá! 🤗

`Item.js` corresponde al compontente `Item`, que se utiliará para representar a cada elemento, por lo que recibirá por `props` el contenido.

```js
import React from "react";

const Item = props => {
  return <li className="Item">{props.content}</li>;
};

export default Item;
```

Ahora tenemos que utilizar este componente en el principal, `App`. Para ello, el primer paso es importarlo:

```js
import Item from './components/Item'
```

Una vez importado, podremos utilizarlo, por lo que volvemos a cambiar el método `render()`:

```js
 return (
    <div className="App">
      <div className="todo-list">
        {todos.map((content, index) => (
          <Todo
            key={index}
            index={index}
            content={content}
          />
        ))}
      </div>
    </div>
  );
```

Con todos estos cambios, el componente `App` quedaría así:

```js
import React from 'react';
import Todo from './componentes/Todo';

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Tarea 1"
    }, 
    {
      content: "Tarea 2"
    }, 
    {
      content: "Tarea 3"
    }
  ]);

   return (
    <div className="App">
      <ul className="ListItems">
        {items.map((item, index) => (
          <Item key={index} index={index} content={item.content} />
        ))}
      </ul>
    </div>
  );
}

export default App;
```

Ahora volvemos al navegador y vemos que sigue funcionando correctamente:

[CAPTURA]

### 6. Añadir elementos

Vale, ya podemos ver los elementos, pero, ¿y si queremos añadir uno nuevo? En este paso vamos a añadir esa funcionalidad.

Y para ello, primero creamos un método en nuestro componente `App` que, dado un valor recibido por parámetro, lo añada al `state` de `todos`.

```js
const addItem = content => {
  const newItems = [...items, { content: content } ];
  setItems(newItems);
};
```

> 💡 ¿Te ha confundido la parte de `[...todos, text ]`? Es el [`spread operator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (u operador de propagación), una característica de ES6 que, en este caso, lo estamos utilizando para hacer una copia del array `todos` y añadiendo al final el valor de `text`. ¿Por qué tenemos que hacer una copia? En JavaScript, los tipos de datos complejos (arrays y objetos) se pasan por referencia, y no por valor, por lo tenemos que hacerlo para tener una copia de `todos` y asegurarnos de que no modificamos el original. [En este artículo tienes más información sobre las diferencias de valor y referencia](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0).

Esta función que hemos creado la utilizará el componente del formulario, así que ahora creamos dicho componente, que será `ItemForm` (`src/components/ItemForm.js`).

Básicamente va a ser un formulario con un único `input`, cuyo valor se guardará en su `state`. Además, para su funcionamiento necesitaremos un método que gestione el envío de dicho formulario (lo llamaremos `handleSubmit()`), y que llame a su vez al método `addItem()`, que recibirá del componente `App` para añadir este elemento a su `state`. ¿Te has quedado así 🤯? ¡No te preocupes! Puede ser muy confuso de explicar, pero cuando lo veas en práctica seguro que lo entiendes mejor. 😉

> 💡 **Recuerda** que puedes pasar todo tipo de dato mediante `props`. Puedes compararlo a los argumentos de una función, a la que le puedes pasar incluso otra función que quieres que se ejecute en ella.

Siguiendo lo que hemos comentado, cuando ya tengas creado el archivo del componente, primero establece su estado. Recuerda, será el valor del campo del formulario.

```js
const [value, setValue] = useState("");
```

A continuación, añade el contenido que renderizará el componente:

```js
return (
    <form action="javascript:;" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
```

Vamos a destacar varias cosas del código que acabas de añadir:

1. Con `onSubmit={handleSubmit}`, establecemos que, cuando se envíe el formulario, se ejecute la función `handleSubmit`. Esta función todavía no la hemos creado, lo haremos en el siguiente paso.
2. El `value` del `input` está asociado a su estado, con el mismo nombre.
3. Cada vez que cambie el valor del formulario (`onChange`), se llamará al método `setValue` para actualizar el `state` con el nuevo valor. Si no pusiéramos esta línea, el `input` no cambiaría cuando escribamos en él. ¡Pruébalo!

Y ahora sí, por último, vamos a establecer el `handleSubmit`:

```js
const handleSubmit = () => {
  if (!value) return;
  
  props.addItem(value);
  setValue("");
};

```

Con este código, primero comprobamos si el `state` tiene contenido, es decir, si se ha introducido algo. Si es así, lo añadimos al listado mediante la función `addTodo` que recibe por `props`.

Ahora te falta importar dicho componente a `App`:

```js
import ItemForm from "./components/ItemForm";
```

Y renderizarlo, pasándole la función `addItem`:

```js
<ItemForm addItem={addItem} />
```

¡Y ya estaría! Ahora solo te queda comprobar que funciona. 😬

### 7. Marcar elementos como completados

Otra de las características esenciales de una aplicación to-do es poder marcar los elementos como completados, y eso es lo que vamos a hacer ahora.

Piensa, ¿cómo podrías establecer si el elemento ha sido completado o no a través de su componente?  👉 ¡Con su estado!

Si revisas de nuevo la estructura del `state` del componente `App`, verás que cada ítem tiene solo un dato: `content`. Ahora necesitamos que contenga otra propiedad más, `isCompleted`, que será la que indique si la tarea está o no completada. Por eso, vamos a añadirla, con el valor `false` por defecto:

```js
const [items, setItems] = useState([
    {
      content: "Tarea 1",
      isCompleted: false
    }, 
    {
      content: "Tarea 2",
      isCompleted: false
    }, 
    {
      content: "Tarea 3",
      isCompleted: false
    }
  ]);

```

A continuación tendremos que escribir la función que se encargará de cambiar ese estado (a `true`si está en `false`, y viceversa), teniendo en cuenta que para ello deberá recibir la posición del array a la que se le quiere cambiar este valor.

```js
const completeItem = index => {
     const newItems = [...items];
     newItems[index].isCompleted = !newItems[index].isCompleted;
     setItems(newItems);
   };

```

El funcionamiento de la función es sencillo: clonamos el array, accedemos a la posición en función del índice que recibimos por parámetro y cambiamos su propiedad `isCompleted` por su opuesto (con el símbolo `!` devolvemos el valor contrario).

> ⚠️ Recuerda que tienes que hacer una copia del array para no modificar el original, como en el paso anterior.

Esta función que hemos creado se la vamos a sar al componente `Item` para que pueda utilizarla, además de la propiedad `isComplete`que luego vamos a utilizar:

```js
<Item
  key={index}
  index={index}
  content={item.content}
  completeItem={completeItem}
	isComplete={item.isComplete}
/>

```

Ahora vamos al componente `Item` para establecer que, cada vez que se pulse sobre él, se ejecute dicha función, pasando el `index` por parámetro:

```js
const Item = props => {
  return (
    <li className="Item" onClick={() => props.completeItem(props.index)}>
      {props.content}
    </li>
  );
};s
```

Vale, ya tenemos configurado el `state` y vinculada la función que se encarga de modificarlo. Pero, ¿cómo vamos a saber si está completada o no? Para ello, tenemos definida en CSS la clase `is-completes`, que define esos estilos, por lo que, cuando `isCompleted` sea `true`, ese componente deberá llevar esa clase:

// TODO: comprobar que esto no añade la clase false

```js
className={`Todo ${props.isCompleted && 'is-completed'}`}

```

> 💡 Hemos usado otra funcionalidad de ES6, los `backticks`. Son `template strings`, es decir, plantillas de cadenas de texto a través de las cuales podemos concatenar texto con variables o expresiones con una sintaxis más fácil de leer. Aquí tienes un ejemplo
>
> ```js
> // Forma clásica
> const foo = "Hola " + name + "!";
> 
> // Con backticks
> const bar = `Hola ${name}!`
> 
> ```
>
> Mucho mejor la segunda forma, ¿verdad? 😜 [Aquí tienes más información](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).



## ¡Enhorabuena! ¡Has completado el taller! 🎉

Esperamos que hayas aprendido mucho y te hayas quedado con ganas de seguir trasteando. 😉 ¡Eso es lo importante!

Ahora tienes un mundo abierto de posibilidades: puedes tratar de mejorar tu aplicación, añadir nuevas funcionalidades, incorporar un backend, seguir estudiando, practicando, ¡lo que tú quieras!

Si quieres seguir ampliando información, en los siguientes apartados te hemos dejado algunas ideas y recursos para que puedas seguir practicando. ¡Pero tómatelo con calma! ¡Ahora toca celebrarlo! 🍻

![Cerveza](https://media.giphy.com/media/h8NdYZJGH1ZRe/giphy.gif)

### ✳️ ¡Bonus! ✳️

#### 1. Eliminar elementos

Esto ya son deberes para casa. 😉

Otra funcionalidad que debería tener la aplicación es la que permita eliminar una tarea. ¿Cómo lo harías? ¡Esto te lo dejamos para que lo pienses!

> 💡 Eliminar un elemento de la lista no es muy diferente a añadir uno. Primero, podrías añadir un botón al lado de cada `Item` para que, al pulsarlo, se ejecuta una función que modifique el `state` de `App` para eliminar ese elemento del array.

#### 2. Preparando tu aplicación para subir al servidor

Ahora que ya tienes la aplicación lista, llega el momento de prepararla para subirla al servidor.

Para ello, tienes que crear un `build` de producción, que contendrá los archivos estáticos de tu aplicación, optimizados y compatibles para que puedas subirlos a tu servidor. 😄

Tan solo tienes que ejecutar el comando `npm run build` y, una vez terminado, tendrás los archivos listos en la carpeta `dist` de tu respositorio. ¡Estos serán los que subirás a tu servidor!

> 💡 Si no tienes un servidor para probarlo, puedes usar [GitHub Pages](https://pages.github.com/), pero recuerda que los archivos estarán en la carpeta `dist`. También puedes usar [Heroku](https://www.heroku.com/) siguiendo [este tutorial](https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08), aunque el proceso es un poco más complejo.

> 💡 Si quieres más información sobre el proceso de `build` puedes visitar [este enlace de la documentación](https://create-react-app.dev/docs/production-build).



#### Cosas que puedes añadir/mejorar de la aplicación

Te dejamos algunas ideas para que sigas practicando:

- [ ] En nuestra aplicación, podemos crear y eliminar elementos. Pero, ¿qué pasa si queremos editarlos? Puedes empezar añadiendo esa funcionalidad. 😬
- [ ] Puedes encapsular más los componentes, teniendo una hoja de estilos asociada a cada uno (que el componente `Todo` tenga su propio `Todo.css`).
- [ ] ¡Adapta los estilos! Nosotros solo te hemos puesto unos de ejemplo, pero puedes adaptarlo a tu gusto.
- [ ] ...¡Y lo que se te ocurra! 😉 Hay muchas posibilidades, piensa en qué te gustaría añadir y hazlo.

#### Enlaces útiles para ampliar información y seguir aprendiendo



#### Recursos

// Añadir react DevTools, plugin de snippets para visual studio, newsletter semanal...





// TODO: añadir placeholder al form, info que diga "pulsa sobre cada tarea para marcarla como completada!" con un emoji