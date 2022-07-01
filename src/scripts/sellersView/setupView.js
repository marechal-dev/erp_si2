'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { populateSalesPersonTable } from './populateSalesPersonTable.js';
import { handleOpenSellerActionModal } from './handleOpenSellerActionModal.js';
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

  addSellerButton.addEventListener('click', () => handleOpenSellerActionModal(false, ''));

  editSellerButtonList.forEach((button) => {
    button.addEventListener('click', (event) => handleOpenSellerActionModal(true, event.target.id));
  });

  removeSellerButtonList.forEach((button) => {
    button.addEventListener('click', (event) => handleDeleteSeller(event));
  });
});

