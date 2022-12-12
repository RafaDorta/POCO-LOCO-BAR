import {
  goLanches,
  goDrinks,
  goTabacaria,
  goPorcoes,
  exitAccount,
  goCarrinho,
} from "./changePages.js";

document.getElementById("exitAccount").addEventListener("click", exitAccount);
document.getElementById("Drinks").addEventListener("click", res.status(200).redirect('/drinks'));
document.getElementById("Lanches").addEventListener("click", goLanches);
document.getElementById("Porcoes").addEventListener("click", goPorcoes);
document.getElementById("Tabacaria").addEventListener("click", goTabacaria);
document.getElementById("carrinho").addEventListener("click", goCarrinho);
