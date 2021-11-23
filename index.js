function escolherPersonagem(numeroDoPersonagem) {
    
    var escolhaDePersonagem = prompt('Digite 1 para escolher Robson \n 2 para Paulinho \n 3 para Jamil')
    if (escolhaDePersonagem == 1) {
        return window.location.assign('./robson.html')
    } else if (escolhaDePersonagem == 2) {
        return window.location.assign('./paulinho.html')
    } else if (escolhaDePersonagem == 3) {
        return window.location.assign('./jamil.html')
    } else {
        alert('Escolha o personagem !!!')
    }
}

escolherPersonagem();