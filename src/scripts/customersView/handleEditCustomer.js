'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

/**
 * 
 * @param {string} customerId 
 */
export function handleEditCustomer(customerId) {
  const customerNewName = prompt('Por favor, insira o novo nome do cliente:');

  if (customerNewName) {
    const payload = {
      name: customerNewName,
    };

    LocalStorageManager.edit('customers', 'id', customerId, payload);
  }
}
