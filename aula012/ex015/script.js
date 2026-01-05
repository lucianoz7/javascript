function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var num = document.getElementById('num')
    var fano = Number(num.value)
    var res = document.getElementById('res')
    if (fano < 1850 || fano > ano) {
        window.alert('ERRO, verifique se os dados estão preenchidos corretamente.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano
        var genero = ''
        var pro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            pro = 'um'
            if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'Imagens/pexels-moh-adbelghaffar-807900.jpg')
            genero = 'menino'
            } else if (idade < 21) { 
            // Jovem
            } else if (idade < 65) { 
            // Adulto
            } else { 
            // Idoso
            img.setAttribute('src', 'Imagens/pexels-thgusstavo-2774292.jpg')
            } 
        } else {
            if (fsex[1].checked) {
                genero = 'mulher'
                pro = 'uma'
                if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'menina'
                img.setAttribute('src', 'Imagens/pexels-seljansalim-33769368.jpg')
                } else if (idade < 21) { 
                // Jovem
                } else if (idade < 65) { 
                // Adulto
                } else { 
                // Idoso
                img.setAttribute('src', 'Imagens/pexels-daliladalprat-2035502.jpg')
                } 
            } 
        }
    } 
    res.style.textAlign = 'center'
    ima.style.textAlign = 'center'
    res.innerHTML = (`Identificamos ${pro} ${genero} de ${idade} anos`)
    ima.appendChild(img)
}