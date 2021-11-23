
function escolhaPaulinho(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 2) {
        return window.location.assign('./paulinho2.html')
    } else if (escolha == 1) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function escolhaPaulinho2(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 1) {
        return window.location.assign('./paulinho3.html')
    } else if (escolha == 2) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function escolhaPaulinho3(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 2) {
        return window.location.assign('./paulinhoVitoria.html')
    } else if (escolha == 1) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function voltarParaInicio(inicio) {
    return window.location.assign('./index.html ')
}