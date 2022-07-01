"use strict";

import { LocalStorageManager } from "../classes/utils/LocalStorageManager.js";

const loginForm = document.forms.loginForm;

window.addEventListener('load', () => {
  const usersTableDoesNotExist = !LocalStorageManager.tableExists('users');
  const loggedInUserTableDoesNotExist = !LocalStorageManager.tableExists('loggedInUser');

  if (usersTableDoesNotExist) {
    LocalStorageManager.createTable('users');
  }

  if (loggedInUserTableDoesNotExist) {
    LocalStorageManager.createTable('loggedInUser');
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
      LocalStorageManager.insert('loggedInUser', userData);
      window.location.href = '../pages/dashboard.html';
    } else {
      alert('Senha incorreta, tente novamente!');
    }
  } else {
    alert("Usuário não encontrado! Crie um novo usuário!");
  }
});