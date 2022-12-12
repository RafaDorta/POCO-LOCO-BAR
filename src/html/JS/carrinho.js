import { backHome, goCarrinho, goPagamento } from "./changePages.js";

document.getElementById("exitCarrinho").addEventListener("click", backHome);
document.getElementById("Carrinho").addEventListener("click", goCarrinho);
document.getElementById("PagarCarrinho").addEventListener("click", goPagamento);
