// init.js

import esperarSegundos from "../Tarea-3/async.js";


// Llamada a la función esperarSegundos con diferentes valores
esperarSegundos(3).then(() => {
  console.log("Fin de la espera de 3 segundos");
});

esperarSegundos(5).then(() => {
  console.log("Fin de la espera de 5 segundos");
});

esperarSegundos(10).then(() => {
  console.log("Fin de la espera de 10 segundos");
});
