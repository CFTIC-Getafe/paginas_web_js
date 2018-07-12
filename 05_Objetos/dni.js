function letraDNI(num) {
   if (isNaN(num *1) || num < 1 || num > 99999999 ) {
        return 'Error'
   }
    const aLETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
    'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    // return aLETRAS[num%23]    
    
    const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
    return LETRAS[num%23]    
}

function probar () {
    console.log(letraDNI('05017822'))
    console.log(letraDNI(50178228))
    console.log(letraDNI(50821728))
    console.log(letraDNI('Pepe'))
}

probar()