function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Certifique-se de ter preenchido todos os datos corretamente')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        /* let c = i
        while (c <= f) {
            res.innerHTML += `${c}`
            c += p
        }
        */
       
        if (p <= 0) {
            alert('Passo inválido')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
    }
}