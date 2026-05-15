function contar(){
    let inicio = document.getElementById('txtini').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpas').value

    if(inicio.length == 0 || fim.length == 0){
        window.alert('[ERRO] Preencha os dados acima para obter um resultado!')
        return
    }
     
    

    let res = document.getElementById('res')
    res.innerHTML = ""

    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)

    if(p <= 0){
        alert('Passo invalido! Considerando PASSO 1')
        p = 1
    }

    if(i < f){
        for(let c = i; c<= f; c+=p){
            res.innerHTML += `👉 ${c} `
        }
    } else{
        for(let c = i; c >= f; c-=p){
            res.innerHTML += `👉 ${c} `
        }
    }
    res.innerHTML += `🏁`
}
           