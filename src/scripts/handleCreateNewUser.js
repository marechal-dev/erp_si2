"use strict";

import { LocalStorageManager } from "../classes/utils/LocalStorageManager.js";

import { User } from "../classes/entities/User.js";

const createUserForm = document.forms.namedItem('createUserForm');

window.addEventListener('load', () => {
  if (!LocalStorageManager.tableExists('users')) {
    LocalStorageManager.createTable('users');
  }
});

createUserForm.addEventListener('submit', () => {
  const {
    firstNameInput,
    lastNameInput,
    emailInput,
    confirmEmailInput,
    passwordInput
  } = createUserForm;

  if (firstNameInput.value && lastNameInput.value && emailInput.value && confirmEmailInput.value && passwordInput.value) {
    const usersTableData = LocalStorageManager.getAll('users');

    const userExists = usersTableData.find((user) => user.email === emailInput);
    if (userExists) {
      alert('Usuário já existente!');
    } else {
      if (emailInput.value === confirmEmailInput.value) {
        const newUser = new User(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value);

        LocalStorageManager.insert('users', newUser);

        alert('Cadastro realizado com sucesso!');
  
        window.location.href = '../../index.html';
      } else {
        alert('Emails não conferem, tente novamente!');
      }
    }
  } else {
    alert('Revise os campos do formulário de cadastro.');
  }
});
