async function load() {
  var url = "https://randomuser.me/api/?results=100"

  var response = await fetch(url)

  if (response.status == 200) {
    var dados = await response.json()
    showContacts(dados)
  }
  else {
    alert("Erro ao Carregar")
  }
}

var ul = document.getElementById("contatos")

function showContacts(dados) {
  var contatos = dados.results
  var tam = contatos.length //nº de contatos

  var i = 0
  while (i < tam) {
    var li = document.createElement("li")
    var img = document.createElement("img")
    img.src = contatos[i].picture.medium
    li.innerHTML = contatos[i].name.first
    li.appendChild(img)
    ul.appendChild(li)
    i++
  }
  
}