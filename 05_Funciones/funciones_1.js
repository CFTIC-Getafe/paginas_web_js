function basica(x) {}
let y = 12
basica(y)

function miFuncion(...z) {
    console.log('Hola ' + z[0])
    console.log('Hola ' + arguments[0])
}

let x = 21
miFuncion(x)
// miFuncion(x, 56)
// miFuncion(x, 56, 89, 90, 76)

/* EN OTROS LENGUAJES existe la 
  Sobrecarga de funciones (métodos)
function miFuncion(z) {
    // un codigo
}
function miFuncion(z,x) {
    // otro codigo
}
miFuncion(x)
miFuncion(x,w)
EN OTROS LENGUAJES */
