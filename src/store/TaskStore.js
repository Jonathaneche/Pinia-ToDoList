import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    //1.favCount se explica en un comentario abajo, mirar.
    favCount() {
      return this.tasks.reduce((previewsValue, currentValue) => {
        return currentValue.isFav ? previewsValue + 1 : previewsValue;
      }, 0);
    },
    //Definiendo totalCount usando arrow function para apreder ambas sintaxis, se debe pasar el state como argumento dentro de la funcion flecha para poder acceder a esos datos, (se realiza de esta manera cuando se usa esta sintaxis)
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    // Realizaremos las acciones para borrar, agregar a favoritos, y agregar una nueva tarea (Task)
    //2. addTask se explica en un comentario abajo, mirar.
    addTask(task) {
      this.tasks.push(task);
    },
    //3. deleteTask(id) se explica en un comentario abajo, mirar.
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },

    //4. toggleFav(id) se explica en un comentario abajo, mirar.
    toggleFav(id) {
      const task = this.tasks.find((task) => task.d === id);
      task.isFav = !task.isFav;
    },
  },
});

/*1.

La función favCount() utiliza el método reduce() en la matriz tasks para iterar sobre cada tarea y acumular el número de tareas favoritas.

El método reduce() toma una función de devolución de llamada y un valor inicial. En este caso, la función de devolución de llamada se define como una función de flecha con dos parámetros: previousValue (valor anterior) y currentValue (valor actual). La función de devolución de llamada comprueba si currentValue.isFav es verdadero. Si es verdadero, se incrementa el contador previousValue en 1 y se devuelve como el nuevo valor anterior. Si currentValue.isFav es falso, simplemente se devuelve el valor anterior sin cambios.

La función reduce() se ejecuta una vez para cada elemento en la matriz tasks y acumula el número total de tareas favoritas. Al final, el resultado final se devuelve como el recuento total de tareas favoritas.

El segundo argumento de reduce() es el valor inicial, que en este caso se establece en 0. Esto significa que previousValue se inicializa en 0 antes de comenzar a iterar sobre las tareas.

En resumen, la función favCount() recorre la matriz tasks y cuenta el número de tareas que tienen la propiedad isFav establecida en true, devolviendo ese recuento total.
*/

/*2.

addTask(task) se utiliza para agregar una nueva tarea al arreglo tasks utilizando la función push(). Después de llamar a este método, la nueva tarea estará presente al final del arreglo tasks.
*/

/*
3.

deleteTask(id) se utiliza para eliminar una tarea del arreglo tasks basándose en su identificador (id). Utiliza el método filter() para crear un nuevo arreglo filtrado que excluye la tarea con el id especificado, y luego actualiza la propiedad tasks con el nuevo arreglo filtrado. Después de llamar a este método, la tarea correspondiente al id ya no estará presente en el arreglo tasks.

*/

/*4.
toggleFav(id) se utiliza para cambiar el estado de favorito de una tarea en el arreglo tasks basándose en su identificador (id). Busca la tarea correspondiente al id utilizando el método find(), y luego cambia el estado de favorito de la tarea invirtiendo su valor actual utilizando !task.isFav.

*/
