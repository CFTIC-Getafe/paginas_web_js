class App {
    constructor() {
        this.aNodosMenu = document.querySelectorAll('nav a')
        this.aNodosSection = document.querySelectorAll('main>section')
        //console.log(this.aNodosMenu)
        //console.log(this.aNodosSection)
        this.aOffset = []
        this.calcularOffsets()
        this.seccionActiva = 0 

        document.addEventListener('scroll', 
            this.scrollDetect.bind(this) 
        )

        window.addEventListener('resize', () =>{
           this.calcularOffsets()
        })
        
        this.aNodosMenu.forEach(
            (nodoMenu) => {nodoMenu.addEventListener('click',
            this.navegar.bind(this))}
        )
    }

    scrollDetect (oE) {
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffset.every(
            (offset, i) => { 
                if( position >= offset) {
                    index = i
                    return true}
                else { return false}
            })
        
/*         this.aOffset.forEach(
            (offset, i) => { 
                if( position >= offset) {index = i}
                else { return i}
            }) */ 
        console.log(index)
        if (this.seccionActiva != index) {
            console.log('Reescribiendo')
            this.aNodosMenu.forEach(
                (nodoMenu) => {nodoMenu.classList.remove('active')}
            )
            this.aNodosMenu[index].classList.add('active')   
            this.seccionActiva = index
        }

   }

    // offset -> 0, 811, 1556, 2318, 3063
    // position 100

    navegar(oE) {
        let i = oE.target.dataset.index
        oE.preventDefault()
        window.scroll({
            top: this.aOffset[i], 
            left: 0, 
            behavior: 'smooth'
        })

    }

    calcularOffsets() {
        this.aOffset = []
        this.aNodosSection.forEach(
            (section) => {
                this.aOffset.push(section.offsetTop-60)
            }
        )
        this.aOffset[0] = 0
        console.log(this.aOffset)
    }
}

document.addEventListener('DOMContentLoaded', ()=> new App())