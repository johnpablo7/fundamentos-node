function otraFuncion() {
  return serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.log("Error en mi función asícrona");
      cb(err);
    }
  }, 1000);
}

try {
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
  // serompe();
} catch (err) {
  console.log("Vaya, algo se ha roto");
  console.log(err.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui esta al final");
