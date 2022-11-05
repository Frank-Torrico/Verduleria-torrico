let nombre = prompt("Ingresa tu nombre");
if (nombre !== "") {
  alert("Mucho gusto " + nombre + "! Bienvenido a Verduleria Torrico");
} else {
  alert("Ingrese un nombre válido");
}

let producto = "";
let cantidad = 0;
let precio = 0;
let precioTotal = 0;
let seguirComprando = false;

do { 
  producto = prompt(
    `¿Qué desea comprar?
  1. Manzana
  2. Banana
  3. Mandarina`,
    "Ej: 1"
  );
  cantidad = Number(prompt("¿Cuantos kg quería? ", "Ej: 2"));

  while (Number.isNaN(cantidad)|| cantidad === 0) {
    if (cantidad !==0) {
      alert('Debe ingresar un numero válido');
    } else {
      alert('Debe ingresar un numero distinto a 0');
    }
    cantidad = Number(prompt("¿Cuantos kg quería ", "Ej: 2"));
  }

  switch (producto) {
    case "1":
      precio = 300;
      break;
    case "2":
      precio = 400;
      break;
    case "3":
      precio = 250;
      break;
    default:
      alert("Ingrese un pedido valido");
      precio = 0;
      cantidad = 0;
      break;
    }
    precioTotal += precio * cantidad;
  
    seguirComprando = confirm('¿Quiere agregar algun otro producto?')

} while (seguirComprando);
  alert( 'El total de la compra es: $'+precioTotal)