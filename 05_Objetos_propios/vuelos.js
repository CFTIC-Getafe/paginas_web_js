let oVuelo = {
    airline:'',
    number:'',
    departure : {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    arival: {
        clave_IATA : '',
        time: '',
        ciudad: ''
    },
    mostrarEnBruto: function() {
        console.log(this)
    }
}

oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}

let oVuelo1 = Object.create(oVuelo)
console.log(oVuelo1)
console.log(typeof oVuelo1)
console.log(oVuelo instanceof Object);
