'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { populateCustomersTable } from './populateCustomersTable.js';
import { handleAddCustomer } from './handleAddCustomer.js';
import { handleEditCustomer } from './handleEditCustomer.js';
import { handleDeleteCustomer } from './handleDeleteCustomer.js';

import { setDisplayedUserName } from '../setDisplayedUserName.js';
import { handleLogout } from '../handleLogout.js';

window.addEventListener('load', () => {
  setDisplayedUserName();
  
  const customerTableDontExist = !LocalStorageManager.tableExists('customers');
  if (customerTableDontExist) {
    LocalStorageManager.createTable('customers');
    return;
  }

  const customersData = LocalStorageManager.getAll('customers');
  if (customersData.length > 0) {
    const customersDataTable = document.querySelector('table');

    populateCustomersTable(customersDataTable, customersData);
  }

  const logoutButton = document.querySelector('#logoutButton');
  const addCustomerButton = document.querySelector('[data-js-identifier="addButton"]');
  const editButtonsList = document.querySelectorAll('[data-js-identifier="editButton"]');
  const removeButtonsList = document.querySelectorAll('[data-js-identifier="removeButton"]');

  logoutButton.addEventListener('click', () => handleLogout());

  addCustomerButton.addEventListener('click', () => handleAddCustomer());

  editButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => handleEditCustomer(event.target.id));
  });

  removeButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => handleDeleteCustomer(event.target.id));
  });
});
