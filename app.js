function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)

    if (ate - de + 1 < quantidade) {
        alert(
            'A quantidade de números a serem sorteados é maior que o intervalo de números disponíveis'
        )
        reiniciar()
        return
    }

    let sorteados = []
    for (let i = 0; i < quantidade; i++) {
        let numero = obterRandom(de, ate)

        while (sorteados.includes(numero)) {
            numero = obterRandom(de, ate)
        }

        sorteados.push(numero)
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarBotao()
}

function obterRandom(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de
}

function alterarBotao() {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
    alterarBotao()
}
