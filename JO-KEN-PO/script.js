var scorePlayer = 0
var scoreIa = 0
function play(playerChoice) {
  var iaChoice = Math.floor(Math.random()*3) +1
  var winner
  //IA ganha
  if ((iaChoice == 1 && playerChoice == 3) || 
    (iaChoice == 2 && playerChoice == 1) ||
    (iaChoice == 3 && playerChoice == 2)) {
    winner = "IA"
    scoreIa++
  }
  //IA perde
  else if ((iaChoice == 1 && playerChoice == 2) || 
    (iaChoice == 2 && playerChoice == 3) ||
    (iaChoice == 3 && playerChoice == 1)) {
    winner = "JOGADOR"
    scorePlayer++
  }
  //Empate
  else {
    winner = "NINGUÉM GANHOU"
  }
  var w = document.getElementById("winner")
  w.innerHTML = `VENCEDOR: ${winner}`
  var r = document.getElementById("resultado")
  resultado.innerHTML = `Eu joguei ${iaChoice} e você jogou ${playerChoice}`
  var s = document.getElementById("score")
  w.innerHTML = `JOGADOR: ${scorePlayer} X IA: ${scoreIa}`
}
