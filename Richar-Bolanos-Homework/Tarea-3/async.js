// async.js


async function esperarSegundos(segundos) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Han pasado ${segundos} segundos`);
      resolve();
    }, segundos * 1000);
  });
}
export default esperarSegundos;

/* Ejemplo de uso
esperarSegundos(5).then(() => {
  console.log("Fin de la espera");
});*/
