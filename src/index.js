const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')


require('dotenv').config()


const routes = require('./routes')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, console.log('Connected to db'))

app.use(cors())
app.use(express.json())

app.use(routes)


app.get('/jsLogin',function (req,res) {
  res.sendFile(__dirname + '/html/JS/login.js')
})
app.get('/jsBebidas',function (req,res) {
  res.sendFile(__dirname + '/html/JS/bebidas.js')
})
app.get('/jsCadastro',function (req,res) {
  res.sendFile(__dirname + '/html/JS/cadastro.js')
})
app.get('/jsCarrinho',function (req,res) {
  res.sendFile(__dirname + '/html/JS/carrinho.js')
})
app.get('/jsChangePages',function (req,res) {
  res.sendFile(__dirname + '/html/JS/changePages.js')
})
app.get('/jsEsqueceuSenha',function (req,res) {
  res.sendFile(__dirname + '/html/JS/esqueceuSenha.js')
})
app.get('/jsHome',function (req,res) {
  res.sendFile(__dirname + '/html/JS/home.js')
})
app.get('/jsIndex',function (req,res) {
  res.sendFile(__dirname + '/html/JS/index.js')
})
app.get('/jsLanches',function (req,res) {
  res.sendFile(__dirname + '/html/JS/lanches.js')
})
app.get('/jsPagamento',function (req,res) {
  res.sendFile(__dirname + '/html/JS/pagamento.js')
})
app.get('/jsPorcoes',function (req,res) {
  res.sendFile(__dirname + '/html/JS/porcoes.js')
})
app.get('/jsTabacaria',function (req,res) {
  res.sendFile(__dirname + '/html/JS/tabacaria.js')
})

app.get('/cssGeral',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/geral.css')
})
app.get('/cssLogin',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/login.css')
})
app.get('/cssCadastro',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/cadastro.css')
})
app.get('/cssCardapio',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/cardapio.css')
})
app.get('/cssCarrinho',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/carrinho.css')
})
app.get('/cssEsqueceuSenha',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/esqueceuSenha.css')
})
app.get('/cssHome',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/home.css')
})
app.get('/cssPagamento',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/pagamento.css')
})
app.get('/cssPorcoes',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/porcoes.css')
})
app.get('/cssRealizado',function (req,res) {
  res.sendFile(__dirname + '/html/CSS/pagamentoRealizado.css')
})

app.get('/logo',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/LOGO.png')
})
app.get('/AGUA',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/AGUA.png')
})
app.get('/batata-cheddar-e-bacon',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/batata-cheddar-e-bacon.jpg')
})
app.get('/batata',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/batata.png')
})
app.get('/caipirinha',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/caipirinha.png')
})
app.get('/cerveja',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/cerveja.png')
})
app.get('/cigarro',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/cigarro.png')
})
app.get('/COCA',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/COCA.png')
})
app.get('/croquete',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/croquete.jpg')
})
app.get('/drinksBG',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/drinksBG.png')
})
app.get('/espanhola',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/espanhola.png')
})
app.get('/Hamburguer-icone-Png-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/Hamburguer-icone-Png-removebg-preview (1).png')
})
app.get('/iconeBebidas-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/iconeBebidas-removebg-preview.png')
})
app.get('/iconPedidos-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/iconPedidos-removebg-preview.png')
})
app.get('/onionRings',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/onionRings.png')
})
app.get('/paiero-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/paiero-removebg-preview (1).png')
})
app.get('/porcaoCoxinha',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/porcaoCoxinha.png')
})
app.get('/porcoesIcone-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/porcoesIcone-removebg-preview.png')
})
app.get('/seda',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/seda.png')
})
app.get('/TabacariaIcone',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/TabacariaIcone.png')
})
app.get('/xbacon',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/xbacon.png')
})
app.get('/xburguer-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/xburguer-removebg-preview.png')
})
app.get('/xegg',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/xegg.png')
})
app.get('/xsalada-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/xsalada-removebg-preview.png')
})
app.get('/xtudo-removebg-preview',function (req,res) {
  res.sendFile(__dirname + '/html/IMGS/xtudo-removebg-preview.png')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/index.html'))
})
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/home.html'))
})
app.get('/esqueceuSenha', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/esqueceuSenha.html'))
})
app.get('/drinks', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/drinks.html'))
})
app.get('/carrinho', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/carrinho.html'))
})
app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/cadastro.html'))
})
app.get('/pagamento', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/pagamento.html'))
})
app.get('/porcoes', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/porcoes.html'))
})
app.get('/lanches', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/lanches.html'))
})
app.get('/tabacaria', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/tabacaria.html'))
})
app.get('/realizado', (req, res) => {
  res.sendFile(path.join(__dirname,'/html/pagamentoRealizado.html'))
})

app.post('/users', (req,res) => {
  return res.redirect('/')
})

app.post('/login', (req,res) => {
  return res.redirect('/home')
})

app.listen(3333, () => console.log(`server running on port 3333`))


