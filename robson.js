



function escolhaRobson(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 1) {
        return window.location.assign('./robson2.html')
    } else if (escolha == 2) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function escolhaRobson2(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 1) {
        return window.location.assign('./robson3.html')
    } else if (escolha == 2) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}


function escolhaRobson3(escolha) {
    
    var escolha = prompt('1 ou 2')
    
    if (escolha == 2) {
        return window.location.assign('./robsonVitoria.html')
    } else if (escolha == 1) {
        return window.location.assign('./derrota.html')
    } else {
        alert('Escolha uma opção !!!')
    }
}

function voltarParaInicio(inicio) {
    return window.location.assign('./index.html ')
}



