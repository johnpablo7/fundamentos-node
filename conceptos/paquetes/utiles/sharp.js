const sharp = require("sharp");

sharp(
  "D:/John/Escuelas Dev/Platzi/Node-js/fundamentos-node/conceptos/paquetes/utiles/original.png"
)
  .resize(80)
  .toFile(
    "D:/John/Escuelas Dev/Platzi/Node-js/fundamentos-node/conceptos/paquetes/utiles/resized.png"
  );

{
  /* <script src="../utiles/original.png"></script>; */
}
