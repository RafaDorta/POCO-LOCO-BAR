import { backHome } from "./changePages.js";

document.getElementById("btnLogin").addEventListener("click", () => {
  const login = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (login == "" || senha == "") {
    alert("Preencha todos os campos");
  } else {
    backHome();
  }
});
