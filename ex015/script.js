function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'bbh.png')
            } else if (idade <=20){
                img.setAttribute('src', 'adolh.png')
            } else if (idade >= 21 && idade < 30){
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultohomem.png')
            } else{
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bbm.png')
            } else if (idade <=20){
                img.setAttribute('src', 'adolm.png')
            } else if (idade >= 21 && idade < 30){
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultamulher.png')
            } else{
                img.setAttribute('src', 'idosamulher.png')
            }
            
        }
        
        res.innerHTML = `${genero} com ${idade} anos!`
        res.appendChild(img)
    }
        
}