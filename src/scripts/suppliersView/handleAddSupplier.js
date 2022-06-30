'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { Supplier } from '../../classes/entities/Supplier.js';

const addSupplierButton = document.querySelector('[data-js-identifier=addSupplierButton]');

addSupplierButton.addEventListener('click', () => {
  const supplierName = prompt('Digite a razão social do novo Fornecedor');

  if (supplierName) {
    const newSupplier = new Supplier(supplierName);

    LocalStorageManager.insert('suppliers', newSupplier);

    window.location.reload();
  } 
});
