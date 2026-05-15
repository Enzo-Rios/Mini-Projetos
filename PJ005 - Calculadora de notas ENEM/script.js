function calcular(){
    let nome = document.getElementById('txtnome').value
    let res = document.getElementById('res')
    if(nome.length == 0){
        alert('[ERRO] Digite seu nome antes de calcular!')
        return
    }
    let txtpor = document.getElementById('txtpor')
    let por = Number(document.getElementById('txtpor').value)
    if(txtpor.value.length == 0||por < 0 || por > 850){
        alert('[ERRO] Nota  de Portugês inválida!')
        return
    }
    let txtmat = document.getElementById('txtmat')
    let mat = Number(document.getElementById('txtmat').value)
    if(txtmat.value.length == 0||mat < 0 || mat > 980){
        alert('[ERRO] Nota de Matemática inválida!')
        return
    }
    let txtnat = document.getElementById('txtnat')
    let nat = Number(document.getElementById('txtnat').value)
    if(txtnat.value.length == 0||nat < 0 || nat > 900){
        alert('[ERRO] Nota de Naturezas inválida!')
        return
    }
    let txthum = document.getElementById('txthum')
    let hum = Number(document.getElementById('txthum').value)
    if(txthum.value.length == 0||hum < 0 || hum > 900){
        alert('[ERRO] Nota de Humanas inválida!')
        return
    }
    let txtred = document.getElementById('txtred')
    let red = Number(document.getElementById('txtred').value)
    if(txtred.value.length == 0||red < 0 || red > 1000){
        alert('[ERRO] Nota de Redação inválida!')
        return
    }
    let notas = [por, mat, nat, hum, red]
    let maior = notas[0]
    let menor = notas [0]
    let soma = 0
    for(let pos = 0; pos < notas.length; pos++){
        soma += notas[pos]
        if(notas[pos] > maior){
            maior = notas[pos]
        }
        if(notas[pos] < menor){
            menor = notas[pos]
        }
    
    }
    let media = soma / notas.length
    let curso = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(media >= 900){
        curso = ('Medicina')
        img.setAttribute('src', 'img/medicina.png')
    }else if(media < 900 && media >=800){
        curso = ('Ciência da Computação')
        img.setAttribute('src', 'img/ciencia-computacao.png')
    }else if (media < 800 && media >=700){
        curso = ('Engenharia')
        img.setAttribute('src', 'img/engenharia.png')
    }else if(media < 700 && media >= 600){
        curso = ('Direito')
        img.setAttribute('src', 'img/direito.png')
    }else if (media < 600 && media >= 450 ){
        curso = ('Pedagogia, Design Gráfico, ADS e etc...')
        img.setAttribute('src', 'img/diversos.png')
    }
    if(media < 450){
        res.innerHTML = `Olá ${nome}, sua média foi ${media}.<br>
        Você não está apto para nenhum curso!`
        img.setAttribute('src', 'img/nao-apto.png')
    }else{
        res.innerHTML = `Olá ${nome}, você obteve média ${media.toFixed(1)}.<br>
        Sua maior nota foi: ${maior}.<br>
        Sua menor nota foi: ${menor}.<br>
        Está apto para o curso de ${curso}!`
    }
        
    res.appendChild(img)
    }  