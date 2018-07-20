class Persona {
    constructor (nombre, edad, pais = 'España') {
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }
    mostrar() {
        console.log(this);
    }
    saludar() {
        let msg = `Hola soy ${this.nombre}, de ${this.pais}, y tengo ${this.edad} años`
        console.log( msg )
        return msg
    }

}

p1 = new Persona('Pepe', 34)
p1.mostrar()
p2 = new Persona('Rosa', 25)
p2.mostrar()
p3 = new Persona('Francisco', 25, 'Rep. Dominicana' )
p3.mostrar()


class Estudiante extends Persona {
    constructor (numMaricula, curso, nombre, edad, pais) {
        super(nombre, edad, pais)
        this.numMaricula = numMaricula
        this.curso = curso
    }
    saludar() {
        let msg = super.saludar()
        msg += ` y estudio ${this.curso}`
        console.clear()
        console.log(msg)
    }
}

e1 = new Estudiante('0034', 'Web', 'Juan', 21)
e1.saludar()
