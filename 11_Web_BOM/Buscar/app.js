class App {
    constructor() {
        this.inClave = document.querySelector('#inClave')
        this.btnBuscar = document.querySelector('#btnBuscar')
    
        this.btnBuscar.addEventListener('click', () => {
            let clave = this.inClave.value
            const url = 'https://www.google.es/search?q='
            if (clave) {
                //location.href = url + clave 
                location.assign(url + clave)
            }
        } )
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})