"use strict";

import { LocalStorageManager } from "../classes/utils/LocalStorageManager.js";

const loginForm = document.forms.loginForm;

window.addEventListener('load', () => {
  if (!LocalStorageManager.tableExists('users')) {
    LocalStorageManager.createTable('users');
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { emailInput, passwordInput } = loginForm;

  const usersTableData = LocalStorageManager.getAll("users");
  const userData = usersTableData.find((user) => user.email === emailInput.value);

  if (userData) {
    const isPassowrdCorret = userData.password === passwordInput.value;

    if (isPassowrdCorret) {
      window.location.href = '../pages/dashboard.html';
    } else {
      alert('Senha incorreta, tente novamente!');
    }
  } else {
    alert("Usuário não encontrado! Crie um novo usuário!");
  }
});