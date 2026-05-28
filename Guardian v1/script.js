let listaCadastro = []

let resLista = document.getElementById('lista')

function adicionar(){
    let alunoEn = document.getElementById('txtalunoEn')
    let alunoEntrada = alunoEn.value.trim() 
    let turmaEn = document.getElementById('txtturmaEntrada')
    let turmaSelecionadaEntrada = turmaEn.value
    let entrada = document.getElementById('txtdth')
    let horarioEntrada = entrada.value
    let quemtrouxe = document.getElementById('txtrespEn')
    let responsavel = quemtrouxe.value.trim()
    if(alunoEntrada.length === 0 || horarioEntrada.length === 0 || responsavel.length === 0){
        alert('[ERRO] Preencha todos os campos de entrada!')
        return
    }
    let registro = {
        aluno: alunoEntrada,
        turma: turmaSelecionadaEntrada,
        entrada: horarioEntrada,
        quemtrouxe: responsavel
    }

    
    listaCadastro.push(registro)

    resLista.innerHTML = ''

    for(let pos in listaCadastro){
        resLista.innerHTML += `
        Aluno: ${listaCadastro[pos].aluno} <br>
        Turma: ${listaCadastro[pos].turma} <br> 
        Entrada: ${listaCadastro[pos].entrada}Hrs <br>
        Quem trouxe: ${listaCadastro[pos].quemtrouxe}<br><br>`
    }

    alunoEn.value = ''
    turmaEn.selectedIndex = 0
    quemtrouxe.value = ''
    entrada.value = ''
    alunoEn.focus()
    
}

function saida(){
    let alunoSai = document.getElementById('txtalunoSai')
    let alunoSaida = alunoSai.value.trim()
    let turmaSai = document.getElementById('txtturmaSai')
    let turmaSaida = turmaSai.value
    let saida = document.getElementById('txtdts')
    let horarioSaida = saida.value
    let quempegou = document.getElementById('txtrespSai')
    let responsavelSaida = quempegou.value.trim()

    if(alunoSaida.length === 0 || horarioSaida.length === 0 || responsavelSaida.length === 0){
        alert('[ERRO] Preencha todos os campos de saída!')
        return
    }

    let alunoEncontrado = listaCadastro.find(function(registro){
        return registro.aluno.toLowerCase() === alunoSaida.toLowerCase() && registro.turma === turmaSaida
    })

    if(alunoEncontrado){
        alunoEncontrado.saida = horarioSaida
        alunoEncontrado.quempegou = responsavelSaida

        resLista.innerHTML = ''

        for(let pos in listaCadastro){
            resLista.innerHTML += `
            Aluno: ${listaCadastro[pos].aluno}<br>
            Turma: ${listaCadastro[pos].turma}<br>
            Entrada: ${listaCadastro[pos].entrada}hrs<br>
            Quem trouxe: ${listaCadastro[pos].quemtrouxe}<br>
            Saída: ${listaCadastro[pos].saida || 'Ainda está na escola'}<br>
            Quem pegou: ${listaCadastro[pos].quempegou || '-'}<br><br>
            `
        }
         alunoSai.value = ''
         turmaSai.selectedIndex = 0
         saida.value = ''
         quempegou.value = ''
         alunoSai.focus()

         
        alert(`Saída registrada com sucesso!`)


    }else {
        alert(`Aluno não encontrado na lista! `)
    }
}