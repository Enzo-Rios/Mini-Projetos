function iniciar(){
  let nome = document.getElementById('txtnome')//pega o nome do personagem
  if (nome.value.length == 0){
    alert('Por favor, insira um nome para o personagem.')
    return
  }
  let fclass =  document.getElementsByName('radclass')//pega a classe do personagem
  let classe = ''//variável para armazenar a classe do personagem
  let res = document.getElementById('res')//pega a div de resultado
  if (fclass[0].checked){
    classe = 'Guerreiro'
}else if (fclass[1].checked){
    classe = 'Mago'
}else if (fclass [2].checked){
    classe = 'Arqueiro'
}
let txtnvl = document.getElementById('txtnvl')//pega o nível de dificuldade
let nvl = txtnvl.value
let sala = ''
let img = document.createElement('img')
img.setAttribute('id', 'foto')
if( nvl == 'facil'){
    sala = 'Vale Perdido'
    img.setAttribute('src', 'img/vale-perdido.png')
} else if (nvl == 'medio'){
    sala = 'Floresta Encantada'
    img.setAttribute('src', 'img/floresta-encantada.png')
}else if (nvl == 'dificil'){
    sala = 'Caverna Sombria'
    img.setAttribute('src', 'img/caverna-sombria.png')
}
let item = document.getElementsByName('chkitem')//pega os itens selecionados
let selecionados = []

if (item[0].checked){
    selecionados.push('Espada')
}if (item[1].checked){
    selecionados.push('Poção')
}if (item[2].checked){
    selecionados.push('Escudo')
}if (item[3].checked){
    selecionados.push('Arco')
}if (selecionados.length == 0){
    alert('Por favor, selecione pelo menos um item para a missão.')
    return
}


let chance = Math.random()
let resultado = ''
let resFinal = document.getElementById('resultado-final')
if (chance < 0.5){
    resultado =  'Enfrentou um monstro e perdeu a missão.'
    resFinal.style.background = 'darkred'
    resFinal.innerHTML = 'Derrota!!!'
    resFinal.style.color = 'white'
} else {
    resultado = 'Enfrentou um monstro e venceu a missão.'
    resFinal.style.background = 'green'
    resFinal.innerHTML = 'Vitória!!!'
    resFinal.style.color = 'white'
}
  res.innerHTML = `${nome.value}, o ${classe}, iniciou a missão ${sala}, com ${selecionados.join(', ')}. ${resultado}`
  res.appendChild(img)
}