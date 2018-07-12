let oDatos = {}
// oDatos = new Object()

let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])
aDatos[7] = 'Pepe'
aDatos[5] = {} */

console.log(aDatos + [3,4])
console.log(aDatos.concat([3,4]))

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres
aNombresOriginal = aNombres.join('|').split('|')
aNombres.sort().reverse()
console.log(aNombres)
console.log(aNombresOriginal)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(aNombres.slice(1,4))
console.log(aNombres)

aClon = aNombres.slice(0,aNombres.length)
// aClon.push('Juan')
aClon.push('Juan', 'Rosa')
console.log(aClon);

//let aElegidos = aNombres.splice(1,2)
//let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')
// let aElegidos = aNombres.splice(1)
// let aElegidos = aNombres.splice(0)
// let aElegidos = aNombres.splice(2,0,'Antonio')

/* console.log("Elegidos: ")
console.log(aElegidos)
console.log("Original: ")
console.log(aNombres)  */
