function main() {
    document.querySelector('button')
        .addEventListener('click', responder, true)

    document.querySelector('form')
        .addEventListener('click', responder, true)
    
    document.querySelector('div')
        .addEventListener('click', responder, true)    

    document.querySelector('section')
        .addEventListener('click', responder, true)
    
    document.querySelector('main')
        .addEventListener('click', responder, true)
    
    document.querySelector('body')
        .addEventListener('click', responder)


    function responder (ev) {
        console.dir(ev);
        console.log ('Has pulsado en el', ev.target.type )
    }
}



document.addEventListener('DOMContentLoaded',main)