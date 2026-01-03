function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var tit = document.getElementById('titulo')
    // var date = new Date()
    var hora = 8
    // var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora <= 12) {
        img.src = 'media/pexels-gareth-davies-230510-910411.jpg'
        tit.innerHTML = 'Bom dia'
        document.body.style.background = '#F2D852'
        imagem.style.borderColor = '#9e8505ff'
    } else {
        if (hora > 12 && hora <= 18) {
            img.src = 'media/pexels-anderson-martinsz-2386144.jpg'
            tit.innerHTML = 'Boa tarde'
            document.body.style.background = '#F25C05'
            imagem.style.borderColor = '#F25C05'
            titulo.style.color = '#ffffffff'
            } else {
                if (hora > 18 && hora <= 23)
                img.src = 'media/pexels-souvenirpixels-414612(1).jpg'
                tit.innerHTML = 'Boa noite'
                document.body.style.background = '#0367A6'
                imagem.style.borderColor = '#000057ff'
                titulo.style.color = '#ffffffff'
            }
    }
}
