"use strict";

import { LocalStorageManager } from "../classes/utils/LocalStorageManager.js";

import { User } from "../classes/entities/User.js";

import { emailIsValid } from './validateEmail.js';

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

  const someFieldsAreEmpty = !firstNameInput.value || !lastNameInput.value || !emailInput.value || !confirmEmailInput.value || !passwordInput.value;
  if (someFieldsAreEmpty) {
    alert('Revise os campos do formulário de cadastro.');
    return;
  }

  const emailIsInvalid = !emailIsValid(emailInput.value);
  if (emailIsInvalid) {
    alert('Email inválido, tente novamente!');
    return;
  }
  
  const emailAndConfirmEmailDontMatch = emailInput.value !== confirmEmailInput.value
  if (emailAndConfirmEmailDontMatch) {
    alert('Emails não conferem, tente novamente!');
    return;
  }

  const usersTableData = LocalStorageManager.getAll('users');

  const userAlreadyExists = usersTableData.find((user) => user.email === emailInput);
  if (userAlreadyExists) {
    alert('Usuário já existente!');
    return;
  }

  const newUser = new User(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value);

  LocalStorageManager.insert('users', newUser);

  alert('Cadastro realizado com sucesso!');

  window.location.href = '/index.html';
});
