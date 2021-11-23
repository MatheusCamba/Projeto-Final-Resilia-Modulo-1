function escolhaJamil(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 2) {
        return window.location.assign('./jamil2.html')
    } else if (escolha == 1) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function escolhaJamil2(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 1) {
        return window.location.assign('./jamil3.html')
    } else if (escolha == 2) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function escolhaJamil3(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 1) {
        return window.location.assign('./jamilVitoria.html')
    } else if (escolha == 2) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function voltarParaInicio(inicio) {
    return window.location.assign('./index.html ')
}