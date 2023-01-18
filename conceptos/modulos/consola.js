console.log("====================================");
console.log("Algo");
console.log("====================================");

console.info("Algo");
console.error("Algo");
console.warn("Algo");
console.table("Algo");

var tabla = [
  {
    a: 1,
    b: "A",
  },
  {
    a: 2,
    b: "B",
  },
];

console.table(tabla);

console.group("Conversación");
console.log("Hola");
console.log("Bla bla bla");
console.log("Adios");
console.groupEnd("Conversacion");

console.log("otra cosa de otra funcion");

function funcion1() {
  console.group("funcion 1");
  console.log("Estoy es de la funcion 1");
  console.log("Estoy tambien");
  console.log("Estoy tambien");
  funcion2();
  console.log("Hemos vuelto a la 1");
  console.groupEnd("funcion 1");
}

function funcion2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la funcion 1");
  console.groupEnd("funcion 2");
}

console.log("empezamos");
funcion1();

console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
console.count("Veces");
