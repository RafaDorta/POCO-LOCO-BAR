import { backHome, goCarrinho } from "./changePages.js";

document.getElementById("exitLanches").addEventListener("click", backHome);

document
  .getElementById("carrinhoLanches")
  .addEventListener("click", goCarrinho);
