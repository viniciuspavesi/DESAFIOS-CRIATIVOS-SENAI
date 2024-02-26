const contadores = document.querySelectorAll('.contador')

contadores.forEach(contador => {
    contador.innerText = '0'

    const atualizarContador = () => {
        const alvo = +contador.getAttribute('data-target')
        const c = +contador.innerText

        const incremento = alvo / 200

        if(c < alvo) {
            contador.innerText = `${Math.ceil(c + incremento)}`
            setTimeout(atualizarContador, 1)
        } else {
            contador.innerText = alvo
        }
    }

    atualizarContador()
})