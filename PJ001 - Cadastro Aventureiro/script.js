function cadastrar(){
    let nom = document.getElementById('txtnome')
    let data = new Date()
    let ano = data.getFullYear()
    let Fano = document.getElementById('txtano')
    let res = document.getElementById('res')
   // res.innerHTML = `Olá ${nom.value}, você tem ${ano - Number(Fano.value)} anos`
   if (nom.value.length == 0 || Fano.value.length == 0 || Fano.value > ano){
    window.alert('[ERRO!!!] verifique os dados e tente novamente!')
   } else{
    let fclass = document.getElementsByName('radclass')
    let idade = ano - Number(Fano.value)
    let classe = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
     let nvl = ''
        if (fclass[0].checked){
            classe = 'Guerreiro'
            img.setAttribute('src', 'img/Guerreiro.png')
            document.body.style.background = '#7f231d'
            if (idade < 18){
                nvl = 'Iniciante'
            } else if (idade < 30){
                nvl = 'Intermediário'
            } else {
                nvl = 'Avançado'
            }
        } else if (fclass[1].checked){
            classe = 'Mago'
            img.setAttribute('src', 'img/Mago.png')
            document.body.style.background = '#623985'
            if (idade < 18){
                nvl = 'Iniciante'
            } else if (idade < 30){
                nvl = 'Intermediário'
            } else {
                nvl = 'Avançado'
            }
        } else if (fclass[2].checked){
            classe = 'Arqueiro'
            img.setAttribute('src', 'img/Arqueiro.png')
            document.body.style.background = '#4b6e48'
            if (idade < 18){
                nvl = 'Iniciante'
            } else if (idade < 30){
                nvl = 'Intermediário'
            } else {
                nvl = 'Avançado'
            }
        }       
        res.style.textAlign = 'center'
        res.innerHTML = `Olá ${nom.value}, você tem ${idade} anos e é um ${classe} e é ${nvl}.`
        res.appendChild(img)
       }
    }
