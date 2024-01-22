function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'IMAGENS/manha.png'
        document.body.style.background = '#FABC89'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'IMAGENS/tarde.png'
        document.body.style.background = '#B36C37'
    }else{
        img.src = 'IMAGENS/noite.png'
        document.body.style.background = '#00113F'
    }
}