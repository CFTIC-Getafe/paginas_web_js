/* let num
console.log('Numero: ')
var stdin = process.openStdin();
process.stdin.once('data', function(res) {
    num = res   
    process.stdin.pause();
    console.log('El numero es', num.toString())
}); */

function pedirDato() {
    return new Promise (
        (resolve, reject) => {
            let num
            console.log('Numero: ')
            var stdin = process.openStdin();
            process.stdin.once('data', function(res) {
                num = res   
                process.stdin.pause();
                resolve(num.toString())
            });
        }
    )
} 

let num = []
for (let i = 0; i < 2; i++) {
    pedirDato().then(
        (data) => console.log('El numero es',data)
    )
}
