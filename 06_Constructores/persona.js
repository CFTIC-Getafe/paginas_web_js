// Objeto Literal
let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion : 'Informático',
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}
// Por debaja se ejecuta new Object()

// persona1.saludar()
// console.log(persona1.nombre, persona1.edad)
console.log(persona1)
// console.log(persona1.constructor)

function Persona (nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function() {
        console.log(`
        Hola, soy ${this.nombre} y tengo ${this.edad} años
        y soy ${this.profesion}`)
    }
}
let persona2 = new Persona('Pepe',23,'Informático')
//console.log(persona2)
//console.log(persona2.constructor)
persona2.saludar()

let persona3 = new Persona('Luis',33,'Bombero')
//console.log(persona3)
persona3.saludar()
