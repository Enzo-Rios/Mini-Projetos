 let vet = []

function adicionar(){
    let txt = document.getElementById('txtnum').value
    if(txt.length == 0){
        alert(`[ERRO] Digite um número antes de adiconar!`)
        return
    }

    let num  = Number(txt)
    if(vet.includes(num)){
            alert(`Número já cadastrado!`)
            return
    }
    let lista = document.getElementById('txtlista')
    vet.push(num)
    document.getElementById('txtnum').value = ''
    document.getElementById('txtnum').focus() 
    lista.innerHTML = vet
}
    
function finalizar(){
    let res = document.getElementById('res')
    if(vet.length == 0){
        alert('Adicione números antes de finalizar!')
        return
    }
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0
    for(let pos = 0; pos < vet.length; pos++){
        
        soma += vet[pos]
        
        if(vet[pos] > maior){
            maior = vet[pos]
        }

        if(vet[pos] < menor){
            menor = vet[pos]
        }
        
    }

    let media = soma/ vet.length

    res.innerHTML = `
    Maior: ${maior} <br>
    Menor: ${menor}<br>
    Soma: ${soma}<br>
    Média: ${media.toFixed(2)}`
     
}    