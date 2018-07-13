// process.stdin.setEncoding('utf8');
// process.stdout.write('¿Qué sugerencias puedes dar? ');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num
rl.question('Numero: ', function(res) {
    console.log('El numero es', res)
    rl.question('Numero: ', () => {
        console.log('El numero es', res)
        rl.close()
    })
})


/* let num = []
for (let i = 0; i < 2; i++) {
    console.log('ITEM', i)
    rl.question('Numero: ', function(res) {
        num[i] = res
    })
}
rl.close() */

