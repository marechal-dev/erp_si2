'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

/**
 * 
 * @param {string} customerId 
 */
export function handleEditCustomer(customerId) {
  const customerData = LocalStorageManager.getAll('customers').find((customer) => customer.id === customerId);

  let payload = {
    name: '',
  };
  
  alert('ATENÇÃO: Deixe o campo em branco caso não deseje alterar.');
  
  while (true) {
    const namePromptValue = prompt('Por favor, insira o novo nome do cliente:');

    if (namePromptValue) {
      if (namePromptValue.length < 5) {
        alert('Por favor, insira um nome válido (mais que 5 caracteres).');
        continue;
      }

      payload.name = namePromptValue;

      alert(`Cliente ${customerData.name} alterado com sucesso!`);

      LocalStorageManager.edit('customers', 'id', customerId, payload);

      break;
    } else {
      payload.name = customerData.name;

      alert(`Cliente ${customerData.name} alterado com sucesso!`);

      LocalStorageManager.edit('customers', 'id', customerId, payload);

      break;
    }
  }

  window.location.reload();
}
