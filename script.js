function pronto(){
    let nome = document.getElementById('nome').value
    let resultado = document.getElementById('res')
    let definicao = document.getElementById('definicaodedata')
    let dia = document.getElementById('dia').value
    let mes = document.getElementById('mes').value
    let ano = document.getElementById('ano').value
    resultado.innerHTML = `Bem vindo <strong>${nome}</strong> <br/> Nascido em: <strong>${dia}/${mes}/${ano}</strong>`
    if (ano <= 1964) {
        definicao.innerHTML = 'Você é: <strong>Baby Boomer</strong><hr>'
    } else if (ano <= 1984) {
        definicao.innerHTML = 'Você é: <strong>Geração X</strong><hr>'
    } else if (ano <= 1999) {
        definicao.innerHTML = 'Você é: <strong>Geração Y</strong><hr>'
    } else if (ano <= 2000) { 
        definicao.innerHTML = 'Você é: <strong>Geração Z</strong><hr>' 
    }
}
function tabuada(){
    let numerotabuada = document.getElementById('tabuada').value
    let respostatabuada = document.getElementById('respostatabuada')
    let contador = 1
    respostatabuada.innerHTML = ''
    while (contador <= 10){
        respostatabuada.innerHTML += `${numerotabuada} X ${contador} = ${contador*numerotabuada} <br/>`
        contador++
    }
}
function avaliar() {
    avaliacao = document.getElementById('avaliacao')
    avaliacao.innerHTML = 'Obrigado!'
}