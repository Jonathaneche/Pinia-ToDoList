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
    //FavCount se explica en un comentario abajo, mirar.
    FavCount() {
      return this.tasks.reduce((previewsValue, currentValue) => {
        return currentValue.isFav ? previewsValue + 1 : previewsValue;
      }, 0);
    },
  },
});

/*
La función FavCount() utiliza el método reduce() en la matriz tasks para iterar sobre cada tarea y acumular el número de tareas favoritas.

El método reduce() toma una función de devolución de llamada y un valor inicial. En este caso, la función de devolución de llamada se define como una función de flecha con dos parámetros: previousValue (valor anterior) y currentValue (valor actual). La función de devolución de llamada comprueba si currentValue.isFav es verdadero. Si es verdadero, se incrementa el contador previousValue en 1 y se devuelve como el nuevo valor anterior. Si currentValue.isFav es falso, simplemente se devuelve el valor anterior sin cambios.

La función reduce() se ejecuta una vez para cada elemento en la matriz tasks y acumula el número total de tareas favoritas. Al final, el resultado final se devuelve como el recuento total de tareas favoritas.

El segundo argumento de reduce() es el valor inicial, que en este caso se establece en 0. Esto significa que previousValue se inicializa en 0 antes de comenzar a iterar sobre las tareas.

En resumen, la función FavCount() recorre la matriz tasks y cuenta el número de tareas que tienen la propiedad isFav establecida en true, devolviendo ese recuento total.
*/
