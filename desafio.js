function lerEntrada(mensagem) {
    process.stdout.write(mensagem)
    let buffer = ""
    const stdin = process.stdin
    stdin.resume()
    stdin.setEncoding('utf8')
    
    return new Promise((resolve) => {
        stdin.on('data', function(data) {
            buffer += data
            stdin.pause()
            resolve(buffer.trim())
        })

  })
}

console.log("\n=======================================");
console.log("     GERADOR DE MATRIZ DE MATRIZES     ");
console.log("=======================================");
const QUANTIDADE = parseInt(await lerEntrada(`Informe a quantidade de matrizes: `)) // z
const LINHAS = parseInt(await lerEntrada(`Informe a quantidade de linhas para cada matriz: `)) // x
const COLUNAS = parseInt(await lerEntrada(`Informe a quantidade de colunas: `)) // y

const matriz = []

for (let z = 0; z < QUANTIDADE; z++){
    let novaMatriz = []
    for (let x = 0; x < LINHAS; x++){
        let arrayLinha = []
        for (let y = 0; y < COLUNAS; y++){
            arrayLinha.push(Math.floor(Math.random() * 100))
        }
        novaMatriz.push(arrayLinha)
    }
    matriz.push(novaMatriz)
}

console.log(matriz)

