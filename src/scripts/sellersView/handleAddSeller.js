'use strict';

import { SalesPerson } from '../../classes/entities/SalesPerson.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { emailIsValid } from '../utils/validateEmail.js';

/**
 * Handles the logic to add a new seller
 * @returns {void}
 */
export function handleAddSeller() {
  let newSellerName;
  let newSellerEmail;
  let newSellerPassword;

  while (true) {
    const namePromptValue = prompt('Insira o nome do novo vendedor (maior que 5 caracteres):');

    if (!namePromptValue || namePromptValue.length < 5) {
      alert('Por favor, insira um nome válido!');
      continue;
    }

    if (namePromptValue) {
      newSellerName = namePromptValue;
      break;
    }
  }

  while (true) {
    const emailPromptValue = prompt('Insira o email do novo vendedor (maior que 5 caracteres):');

    if (!emailPromptValue || emailPromptValue.length < 5) {
      alert('Por favor, insira um email válido!');
      continue;
    }

    const emailIsNotValid = !emailIsValid(emailPromptValue);
    if (emailIsNotValid) {
      alert('Por favor, insira um email válido!');
      continue;
    }

    if (emailPromptValue) {
      newSellerEmail = emailPromptValue;
      break;
    }
  }

  while (true) {
    const passwordPromptValue = prompt('Insira a senha do novo vendedor (maior que 5 caracteres):');

    if (!passwordPromptValue || passwordPromptValue.length < 5) {
      alert('Por favor, insira uma senha válida!');
      continue;
    }

    if (passwordPromptValue) {
      newSellerPassword = passwordPromptValue;
      break;
    }
  }
  

  const newSeller = new SalesPerson(newSellerName, newSellerEmail, newSellerPassword);
  LocalStorageManager.insert('sellers', newSeller);

  alert(`Vendedor ${newSeller.name} adicionado com sucesso!`);

  window.location.reload();
}
