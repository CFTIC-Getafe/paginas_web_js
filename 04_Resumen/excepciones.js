try {
    let x = 0
    throw('Este es mi error')
} catch(err) {
    console.log(err)
    alert("Lo sentimos, se ha producido un error: " + err)
}

