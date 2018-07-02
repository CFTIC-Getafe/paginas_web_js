/**
 * 
 * @param 'Dia de la semana'
 * @return 'Hora de la alarma' -> 7:00 // 12:00
 *          y "comenza el <Día>" 
 *  
 */


function despertador(dia) {
    let hora = '12:00'
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
        case 'D':
            hora = '12:00'
            dia = 'Fin de Semana'  
            break;
        default:
            hora = '0:00'
            dia = "Error de día"
    }
    return `${hora}, comenza el ${dia}`
}

function despertadorSinDia(dia) {
    let hora = '12:00'
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
            hora = '12:00'
            dia = 'Sábado'
            break;
        case 'D':
            hora = '12:00'
            dia = 'Domingo'  
            break;
        default:
            hora = '0:00'
            dia = "Error de día"
    }
    return `${hora}, comenza el ${dia}`
}


function probar () {
    let dia = 'L'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'M'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'S'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'D'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'Z'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
}


// Ejemplo de if

if (a == 26 || a == 27  || a == 65  ) {
    // ...
} else if (a == 45) { 
    // ...
}
else if ( a == 134) {
    // ....
} else {
    // ...
}

// El mismo ejemplo mediante switch

switch (a) {
    case 26:
    case 27:
    case 65:
        // algo
        break;
    case 45:
        // ...
        break;
    case 134:
        // ...
        break;
    default:
        // ...
        break;
}
// más código


let a = 'Pepe'
let saludoOld = 'Hola ' + a
let saludo = `Hola ${a}`
