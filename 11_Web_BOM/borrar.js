oPersona = {
    nombre: 'Pepe',
    edad: '23',
    profesion: 'Informatico',
    empresa: 'IBM'
}
oPersona2 = {
    nombre: 'Juan',
    edad: '23',
    profesion: 'Informatico',
    empresa: 'IBM'
}

console.log(oPersona)
oPersona.apellido = 'Perez'
delete(oPersona.empresa)
console.log(oPersona)
console.log(oPersona2)
oPersona = null

if (oPersona === null) {
    console.log('oPersona ha sido eliminada' )
}