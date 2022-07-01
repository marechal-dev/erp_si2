'use strict';

import { LocalStorageManager } from "../../classes/utils/LocalStorageManager";

/**
 * @param {string} customerId
 */
export function handleDeleteCustomer(customerId) {
  const toRemoveCustomer = LocalStorageManager.getAll('customers').find((customer) => customer.id === customerId);

  const wantsToRemoveCustomer = confirm(`Deseja remover o cliente ${toRemoveCustomer.name}`);
  
  if (wantsToRemoveCustomer) {
    alert(`Cliente ${toRemoveCustomer.name} removido com sucesso!`);

    LocalStorageManager.remove('customers', toRemoveCustomer);
    
    window.location.reload();
  } else {
    return;
  }
}
