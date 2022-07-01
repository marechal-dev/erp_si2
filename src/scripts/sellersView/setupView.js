'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { populateSalesPersonTable } from './populateSalesPersonTable.js';
import { handleAddSeller } from './handleAddSeller.js';
import { handleEditSeller } from './handleEditSeller.js';
import { handleDeleteSeller } from './handleDeleteSeller.js';

window.addEventListener('load', () => {
  const sellersTableDontExist = !LocalStorageManager.tableExists('sellers');
  if (sellersTableDontExist) {
    LocalStorageManager.createTable('sellers');
    return;
  }

  const sellersData = LocalStorageManager.getAll('sellers');
  if (sellersData.length > 0) {
    const sellersDataTable = document.querySelector('table');
    populateSalesPersonTable(sellersDataTable, sellersData);
  }

  const addSellerButton = document.querySelector('[data-js-identifier="addButton"]');
  const editSellerButtonList = document.querySelectorAll('[data-js-identifier="editButton"]');
  const removeSellerButtonList = document.querySelectorAll('[data-js-identifier="removeButton"]');

  addSellerButton.addEventListener('click', (event) => handleAddSeller(event));

  editSellerButtonList.forEach((button) => {
    button.addEventListener('click', (event) => handleEditSeller(event));
  });

  removeSellerButtonList.forEach((button) => {
    button.addEventListener('click', (event) => handleDeleteSeller(event));
  });
});

