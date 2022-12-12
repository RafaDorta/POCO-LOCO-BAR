import { backHome, exitAccount } from "./changePages.js";

document.getElementById("exitCadastrar").addEventListener("click", exitAccount);

document.getElementById("CadastrarUser").addEventListener("click", () => {
  const nome = document.getElementById("cadastraNome").value;
  const dataAniversario = document.getElementById("cadastraData").value;
  const email = document.getElementById("cadastraEmail").value;
  const senha = document.getElementById("cadastraSenha").value;
  const termo = document.getElementById("termoUso");

  if (nome === "" || dataAniversario === "" || email === "" || senha === "") {
    alert("Preencha todos os campos");
  } else {
    if (termo.checked) {
      backHome();
    } else {
      alert("marcar termo de uso");
    }
  }
});
