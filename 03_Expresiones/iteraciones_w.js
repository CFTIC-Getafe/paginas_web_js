// Iteraciones
// for 
// while 
// do


function iterar () {
    for (let i = 0; i < 10; i++) {
        console.log(`Soy la vuelta ${i+1}`)
    }
}

function iterar_while () {
    let i = 0
    while ( i < 3) {
        i++
        console.log(`Soy la vuelta ${i}`)
    }
}

function iterar_do () {
    let i = 0
    do {
        i++
        console.log(`Soy la vuelta ${i}`)
    } while ( i < 3)
}



iterar_while()
iterar_do()

