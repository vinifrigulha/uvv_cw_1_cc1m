function imc() {
  var peso = document.getElementById("p").value
  var altura = document.getElementById("a").value
  var imc = peso/altura**2
  
  var div = document.getElementById("out")
  div.innerHTML = "Seu IMC é: "+imc.toFixed(2)
  div.style.display = "block"
}

function fat(n) {
  var i = n
  var f = 1
  while (i > 1) {
    f *= i
    i -= 1
  }
return f
}

function arranjo(n,p) {
  return fat(n)/fat(n-p)
}

function combinacao(n,p) {
  return fat(n)/(fat(p)*fat(n-p))
}

//MAIN
var n = Number(prompt('Digite N:'))
var p = Number(prompt('Digite P:'))

var ar = arranjo(n,p)
var cb = combinacao(n,p)
console.log(`Arranjo de (${n}, ${p}) é ${ar}`)
console.log(`Combinação de (${n}, ${p}) é ${cb}`)

alert(`O Arranjo é ${ar}`)
alert(`A combinação é ${cb}`)