// Declarar
function miFuncion(x) {
    console.log(x)
}
function calcular(x) {
    return 2*x
}

// Declarar & Asignar
let x = 23

// Invocar, llamar, ejecutar
miFuncion(23)

// Asignando el resultado de invocar ...
let z = calcular(12)

// OTRA FORMA DE CREAR FUNCIONES EN JS:
// por asignacion
// equivale a function otraFuncion() {}

let otraFuncion = function (x,y) {
    return x*y
} 

// Ejempla de CALLBACK

function verCalculos(x,y, operacion) {
    console.log("El resultado es " + operacion(x,y))
}

// Callback anonimo
verCalculos(3,5, function(a,b) { return a*b})

// Callback con nombre

function sumaCuadrados(x,y) {
    return x*x + y*y
} 

verCalculos(3,5, sumaCuadrados)
