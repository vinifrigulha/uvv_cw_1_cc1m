var buttonStart
var buttonStop
var buttonReset
var divTempo
var tempo = 0
var timerId

//Inicia a aplicação
init()

function init() {
  buttonStart = document.getElementById("start")
  buttonStart.onclick = start
  //Quando clicar no botão START, vai chamar a função start.
  
  buttonStop = document.getElementById("stop")
  buttonStop.onclick = stop
  //Quando clicar no botão STOP, vai chamar a função stop.
  
  buttonReset = document.getElementById("reset")
  buttonReset.onclick = reset
  //Quando clicar no botão RESET, vai chamar a função reset.
  
  divTempo = document.getElementById("tempo")
}

function update() {
  tempo += 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start() {
  timerId = setInterval(update, 100)
  buttonStart.disabled = true
  buttonStop.disabled = false
  buttonReset.disabled = false
}
function stop() {
  clearInterval(timerId)
  buttonStart.disabled = false
  buttonStop.disabled = true
  buttonReset.disabled = false
}
function reset() {
  clearInterval(timerId)
  tempo = 0
  divTempo.innerHTML = tempo.toFixed(1) + "s"
  buttonStart.disabled = false
  buttonStop.disabled = true
  buttonReset.disabled = true
}
