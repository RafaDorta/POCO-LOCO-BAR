export {
  backHome,
  goLanches,
  goDrinks,
  goTabacaria,
  goPorcoes,
  exitAccount,
  goCarrinho,
  goPagamento,
};

const express = require('express')
const app = express()
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'/html/index.html'))
// })

function backHome() {
  window.location = "../home.html";
}
function goLanches() {
  window.location = "../lanches.html";
}
function goDrinks() {
  window.location = "../drinks.html";
}
function goTabacaria() {
  window.location = "../tabacaria.html";
}
function goPorcoes() {
  window.location = "../porcoes.html";
}
function exitAccount() {
  window.location = "../index.html";
}
function goCarrinho() {
  window.location = "../carrinho.html";
}
function goPagamento() {
  window.location = "../pagamento.html";
}
