'use strict';

import { appendToProductsTableBody } from './utils.js';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { handleCreateNewProduct } from './handleCreateNewProduct.js';
import { handleEditProduct } from './handleEditProduct.js';
import { handleRemoveProduct } from './handleRemoveProduct.js';

import { setDisplayedUserName } from '../setDisplayedUserName.js';
import { handleLogout } from '../handleLogout.js';

window.addEventListener('load', () => {
  setDisplayedUserName();

  const logoutButton = document.querySelector('#logoutButton');
  logoutButton.addEventListener('click', () => handleLogout());

  if (!LocalStorageManager.tableExists('products')) {
    LocalStorageManager.createTable('products');
    return;
  }

  const productsTable = document.querySelector('table');
  const productTableData = LocalStorageManager.getAll('products');
  if (productTableData.length > 0) {
    appendToProductsTableBody(productsTable, productTableData);
  }

  const insertProductButton = document.querySelector('[data-js-identifier="addButton"]');
  const editProductButtonsList = document.querySelectorAll('[data-js-identifier="editButton"]');
  const removeProductButtonsList = document.querySelectorAll('[data-js-identifier="removeButton"]');
  
  insertProductButton.addEventListener('click', () => handleCreateNewProduct());
  
  if (editProductButtonsList.length > 0) {
    editProductButtonsList.forEach((button) => {
      button.addEventListener('click', (event) => handleEditProduct(event));
    });
  }

  if (removeProductButtonsList.length > 0) {
    removeProductButtonsList.forEach((button) => {
      button.addEventListener('click', (event) => handleRemoveProduct(event));
    })
  }

  return;
});