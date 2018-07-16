let oPersona = {
    name: 'Pepe',
    edad: 33,
    saludar: function() {
        console.log(`Hola, me llamo ${this.name}`)
    }
}
// oPersona.name *= 2
oPersona.saludar()

let aDatos = [2,3,4,5]

console.log(typeof JSON.stringify(oPersona));
console.log('Tengo un string '+ JSON.stringify(oPersona));

console.log(typeof JSON.stringify(aDatos));
console.log('Tengo un string '+ JSON.stringify(aDatos));

let datosString = JSON.stringify(oPersona)
let oDatos = JSON.parse(datosString)
console.log(typeof oDatos);
console.log(oDatos);

datosString = '{ "name": "Pepe", "edad": 33 }'
oDatos = JSON.parse(datosString)
console.log(typeof oDatos);
console.log(oDatos);
