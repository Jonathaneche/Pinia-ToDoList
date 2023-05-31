# Pinia-ToDoList

Aprendiendo a usar Pinia siguiendo el curso de "The Net Ninja" - Pinia Crash Course

https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD

## Iniciar el proyecto

npm init vue@latest

Luego decir no a todas las opciones para tener un proyecto basico

## Project Setup

```sh

npm install  (instalar las dependencias)

```

## Pinia installation and setup

npm install pinia (Instala Pinia en el proyecto)

```
Importar Pinia en el archivo main.js

import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");

```

### Compile and Hot-Reload for Development

```sh

npm run dev  (Inicia el servidor)

```

### Compile and Minify for Production

```sh
npm run build    (Crea el archivo dist cuando se va a realizar el deployment)
```

## Recommended IDE Setup

This template should help get you started developing with Vue 3 in Vite.

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
