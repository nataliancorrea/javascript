function contar(){
    var ini = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('pass')
    var res = document.getElementById('')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else{
        alert('Tudo ok')
    }

}

