'use strict';

import { appendToProductsTableBody } from './utils.js';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

window.addEventListener('load', () => {
  if (!LocalStorageManager.tableExists('products')) {
    LocalStorageManager.createTable('products');
  }

  const productTableData = LocalStorageManager.getAll('products');
  if (productTableData.length > 0) {
    appendToProductsTableBody(productTableData);
  }

  return;
});