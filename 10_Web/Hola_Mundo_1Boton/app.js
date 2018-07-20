class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.isSaludar = true
        this.oBtn = document.querySelector('#btnDual')
        this.oOutput = document.querySelector('#saludo')
        this.asignarHandlers()
    }

    asignarHandlers() {
        // console.log(this)
        //this.oBtn.addEventListener('click', this.saludarOld.bind(this)) 
        this.oBtn.addEventListener('click', this.saludar.bind(this)) 
    }

    saludarOld(oE) {
        console.log(oE.target);
        console.log(this)

        if (this.isSaludar) {
            console.log(`Hola ${this.amigo}`)
            //oE.target.innerHTML = 'Adios'
            //this.isSaludar = false
        } else {
            console.log(`Adios ${this.amigo}`)
            //this.isSaludar = true
            //oE.target.innerHTML = 'Hola'
        }
        this.isSaludar = !this.isSaludar 
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios' 
        
    }

    saludar(oE) {
        // console.log(oE.target);
        // console.log(this)
        let msg = `Adios ${this.amigo}`
        if (this.isSaludar) {
            msg = `Hola ${this.amigo}`
        } 
        this.isSaludar = !this.isSaludar 
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios' 
        this.oOutput.innerHTML = msg
    }
}


document.addEventListener('DOMContentLoaded', 
        () =>  new Apps() )

// Seria lo mismo que 
// document.addEventListener('DOMContentLoaded', 
//        function () {new Apps()})


// Seia lo mismo que 
//function main() {
//    new Apps()
//}
// document.addEventListener('DOMContentLoaded', main)

