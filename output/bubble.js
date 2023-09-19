
lista = [1,4,1,9,3,8,6]

function bubble(lista) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] < lista[j++]) {
                console.log(lista[j])   
            }      
        }      
    }
}

bubble(lista)