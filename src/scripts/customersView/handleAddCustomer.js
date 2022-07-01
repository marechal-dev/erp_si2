'use strict';

import { Customer } from '../../classes/entities/Customer.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

export function handleAddCustomer() {
  const newCustomerName = prompt('Por favor, digite o nome do novo cliente:');

  if (newCustomerName) {
    const newCustomer = new Customer(newCustomerName);

    LocalStorageManager.insert('customers', newCustomer);

    return;
  }
}
