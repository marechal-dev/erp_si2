'use strict';

import { LocalStorageManager } from "../../classes/utils/LocalStorageManager";

/**
 * @param {string} customerId
 */
export function handleDeleteCustomer(customerId) {
  const toRemoveCustomer = LocalStorageManager.getAll('customers').find((customer) => customer.id === customerId);
  
  if (toRemoveCustomer) {
    alert(`Cliente ${toRemoveCustomer.name} removido com sucesso!`);
    LocalStorageManager.remove('customers', toRemoveCustomer);
    window.location.reload();
  }
}
