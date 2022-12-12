import { backHome, goCarrinho } from "./changePages.js";

document.getElementById("exitTabacaria").addEventListener("click", backHome);

document
  .getElementById("carrinhoTabacaria")
  .addEventListener("click", goCarrinho);
