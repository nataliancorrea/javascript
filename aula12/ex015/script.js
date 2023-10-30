function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] VERIFIQUE OS DADOS DIGITADOS')
    } else {
        var fsex = document.getElementById('radsex')
        var gênero_mas = document.getElementById('mas')
        var gênero_fem = document.getElementById('fem')
        var gênero_nb = document.getElementById('nb')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (gênero_mas.checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança 
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (gênero_fem.checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //crinaça
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher adulta-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        } else if (gênero_nb.checked) {
            gênero = 'Não binário'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher adulta-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}