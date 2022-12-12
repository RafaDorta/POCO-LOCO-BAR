import { backHome, goCarrinho } from "./changePages.js";

document.getElementById("exitPagamento").addEventListener("click", backHome);

document
  .getElementById("carrinhoPagamento")
  .addEventListener("click", goCarrinho);

document.getElementById("finalizarPedido").addEventListener("click", () => {
  const nomeTitular = document.getElementById("pagamentoNomeTitular").value;
  const nmrCartao = document.getElementById("pagamentoNumeroCartao").value;
  const dataVencimento = document.getElementById(
    "pagamentoDataVencimento"
  ).value;
  const CVV = document.getElementById("pagamentoCVV").value;
  const salvarCartao = document.getElementById("salvarCartao");

  if (
    nomeTitular === "" ||
    nmrCartao === "" ||
    dataVencimento === "" ||
    CVV === ""
  ) {
    alert("Preencha todos os campos");
  } else {
    alert("Pagamento Efetuado!!");
  }
});
