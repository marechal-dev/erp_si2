'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager';

/**
 * 
 * @param {Event} event
 */
export function handleEditSeller(event) {
  const sellerId = event.target.id;

  const sellerData = LocalStorageManager.getAll('sellers').find((seller) => seller.id === sellerId);

  const sellerNewData = getNewSellerInfo(sellerData);

  LocalStorageManager.edit('sellers', 'id', event.target.id, sellerNewData);

  alert(`Vendedor ${sellerId} editado com sucesso!`);

  window.location.reload();
}

/**
 * @param {object} originalSellerData
 * @returns 
 */
function getNewSellerInfo(originalSellerData) {
  let newSellerName;
  let newSellerEmail;
  let newSellerPassword;

  alert('ATENÇÃO: Deixe os campos que não quiser alterar em branco.');
  while (true) {
    const namePromptValue = prompt('Insira o novo nome do vendedor (maior que 5 caracteres):');

    if (!namePromptValue) {
      newSellerName = originalSellerData.name;
      break;
    }

    if (namePromptValue) {
      if (namePromptValue.length < 5) {
        alert('Por favor, insira um nome válido!');
        continue;
      }

      newSellerName = namePromptValue;
      break;
    }
  }

  while (true) {
    const emailPromptValue = prompt('Insira o novo email do vendedor (maior que 5 caracteres):');

    if (!emailPromptValue) {
      newSellerEmail = originalSellerData.email;
      break;
    }

    if (emailPromptValue) {
      if (emailPromptValue.length < 5) {
        alert('Por favor, insira um email válido!');
        continue;
      }
  
      const emailIsNotValid = !emailIsValid(emailPromptValue);
      if (emailIsNotValid) {
        alert('Por favor, insira um email válido!');
        continue;
      }

      newSellerEmail = emailPromptValue;
      break;
    }
  }

  while (true) {
    const passwordPromptValue = prompt('Insira a senha do novo vendedor (maior que 5 caracteres):');

    if (!passwordPromptValue) {
      newSellerPassword = originalSellerData.password;
      break;
    }
    

    if (passwordPromptValue) {
      if (passwordPromptValue.length < 5) {
        alert('Por favor, insira uma senha válida!');
        continue;
      }

      newSellerPassword = passwordPromptValue;
      break;
    }
  }

  return {
    name: newSellerName,
    email: newSellerEmail,
    password: newSellerPassword,
  };
}

  
