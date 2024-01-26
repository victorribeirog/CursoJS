function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 15){
                img.setAttribute('src', './imagens/crianca-m.png')
            }else if(idade < 21){
                img.setAttribute('src', './imagens/jovem-m.png')
            }else if(idade < 60){
                img.setAttribute('src', './imagens/adulto.png')
            }else{
                img.setAttribute('src', './imagens/idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade < 15){
                img.setAttribute('src', './imagens/crianca-f.png')
            }else if(idade < 21){
                img.setAttribute('src', './imagens/jovem-f.png')
            }else if(idade < 60){
                img.setAttribute('src', './imagens/adulta.png')
            }else{
                img.setAttribute('src', './imagens/idosa.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}