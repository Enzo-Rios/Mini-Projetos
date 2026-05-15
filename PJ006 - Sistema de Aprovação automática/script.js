let lista = []

function adicionar(){
    let nome = document.getElementById('txtnome').value 
    
    let res = document.getElementById('res')
    if (nome.length == 0){
        alert('[ERRO] Coloque o nome do Aluno(a) antes de adicionar!')
        return
    }
    
    let por =  document.getElementById('txtpor').value
    let mat =  document.getElementById('txtmat').value
    let his =  document.getElementById('txthis').value
    let geo =  document.getElementById('txtgeo').value
    let bio =  document.getElementById('txtbio').value
    let qui =  document.getElementById('txtqui').value
    let fis =  document.getElementById('txtfis').value
    if(por.length == 0 || mat.length == 0 ||his.length == 0 || geo.length == 0 ||bio.length == 0 || qui.length == 0 || fis.length == 0){
        alert('[ERRO] Coloque todas as notas!')
        return
    }

    let nPor = Number(por)
    let nMat = Number(mat)
    let nHis = Number(his)
    let nGeo = Number(geo)
    let nBio = Number(bio)
    let nQui = Number(qui)
    let nFis = Number(fis)
    if(
        nPor < 0 || nPor > 10||
        nMat < 0 || nMat > 10||
        nHis < 0 || nHis > 10||
        nGeo < 0 || nGeo > 10||
        nBio < 0 || nBio > 10||
        nQui < 0 || nQui > 10||
        nFis < 0 || nFis > 10
    ){
        alert('[ERRO] Valor de nota inválido!')
        return
    }


    let media = (nPor + nMat + nHis + nGeo + nBio + nQui + nFis) / 7
    let sit = ''
    if( media < 6){
        sit = ('Reprovado!')
    }else{
       sit = ('Aprovado!')
    }

    let aluno = {
        nome: nome,
        media: media,
        situacao: sit
    }
    
    document.getElementById('txtnome').value = '' 
    document.getElementById('txtpor').value = ''
    document.getElementById('txtmat').value = ''
    document.getElementById('txthis').value = ''
    document.getElementById('txtgeo').value = ''
    document.getElementById('txtbio').value = ''
    document.getElementById('txtqui').value = ''
    document.getElementById('txtfis').value = ''
    document.getElementById('txtnome').focus()

    lista.push(aluno)
    res.innerHTML = ''
    for(let pos = 0; pos < lista.length; pos++){
        res.innerHTML += `
        Nome: ${lista[pos].nome}<br>
        Média: ${lista[pos].media.toFixed(1)}<br>
        Situação: ${lista[pos].situacao}<br><br>`
    }
}   