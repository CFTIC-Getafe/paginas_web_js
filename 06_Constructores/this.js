// THIS -> objeto global

/* console.log(this)

function prueba() {
    console.log(this)
}

prueba() */

// THIS -> objeto

/* let o = {
    nonbre: 'Pepe',
    mostrar: function () {
        console.log(this)
    }
}

o.mostrar() */

// THIS -> el objeto creado

function cosaRara() {
    console.log(this)
}

//cosaRara()

new cosaRara()

// THIS -> quien yo decida
// call() / apply()