function main1 () {

    /* document.body.addEventListener('mousemove', (ev) => {
        console.log(ev.clientX, ev.clientY)
    }) */

    let aDivs = document.querySelectorAll('section div')
    // aDivs.addEventListener()
    aDivs.forEach((div) => {
        div.addEventListener('mouseover',
            () => {div.style.backgroundColor = "pink"})
        div.addEventListener('mouseout',
            () => {div.style.backgroundColor= "brown"}) 
    })

}

function main() {
    let aDivs = document.querySelectorAll('section div')
    // aDivs.addEventListener()
    aDivs.forEach((div) => {
        // div.addEventListener('mouseover', hover)
        div.onmouseover = hover
        // div.addEventListener('mouseout', hover)
        div.onmouseout = hover 
    })

    document.querySelector('footer a')
        .addEventListener('click', navegar)

    function hover(oE) {
        // En este caso, al no ser un metodo
        // this === oE.target
        if(oE.type == 'mouseover') {
            this.style.backgroundColor = "pink"
        } else {
            oE.target.style.backgroundColor= "brown"
        }
    }

    function navegar (oEv) {
        oEv.preventDefault()
        console.log('Navegando');
        let res = confirm("Estas seguro")
        if (res) {
          location.assign('https://www.google.com')
        }
    }

}

document.addEventListener('DOMContentLoaded', main)
// window.addEventListener('load', main)