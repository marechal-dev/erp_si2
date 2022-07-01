'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';
import { Supplier } from '../../classes/entities/Supplier.js';

import { generateButton } from '../utils/generateButton.js';

window.addEventListener('load', () => {
  const suppliersTableDontExist = !LocalStorageManager.tableExists('suppliers');

  // Check if there is no data table for suppliers
  if (suppliersTableDontExist) {
    // If not, create and return.
    LocalStorageManager.createTable('suppliers');
    return;
  }

  const suppliersData = LocalStorageManager.getAll('suppliers'); // Get data
  // If it exists and it's length is greater than 0
  if (suppliersData.length > 0) {
    const suppliersTable = document.querySelector('table'); // Get the table from view

    populateSuppliersTable(suppliersTable, suppliersData); // Populate with data got from LocalStorage
  }

  /**
   * After loading and generating the table
   * get a list of edit button and remove buttons
   */
  const editButtonsList = document.querySelectorAll('[data-js-identifier="editButton"]');
  const removeButtonsList = document.querySelectorAll('[data-js-identifier="removeButton"]');

  // Loop in each list

  editButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemId = event.target.id; // Get supplier id
      const newSupplierSocialReason = prompt(`Insira o novo nome da razão social do item ${itemId}`); // Ask the new social reason value for the supplier
      const newSupplierData = {
        socialReason: newSupplierSocialReason
      }; // Create an data object with the new data

      LocalStorageManager.edit('suppliers', 'id', itemId, newSupplierData); // Change the data

      window.location.reload(); // Reload
    });
  });

  removeButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemId = event.target.id;
      const suppliersData = LocalStorageManager.getAll('suppliers');
      const toRemoveItem = suppliersData.find((supplier) => supplier.id === itemId);

      LocalStorageManager.remove('suppliers', toRemoveItem);

      window.location.reload();
    });
  });
});

/**
   * 
   * @param {HTMLTableElement} tableElement 
   * @param {Array<Supplier>} suppliersData
   */
 function populateSuppliersTable(tableElement, suppliersData) {
  suppliersData.forEach((supplier) => {
    const newRow = tableElement.insertRow(-1); // Insert a new row
    const idCell = newRow.insertCell(0); // Create the cells to hold data
    const socialReasonCell = newRow.insertCell(1);
    const createdAtCell = newRow.insertCell(2);
    const editButtonCell = newRow.insertCell(3);
    const deleteButtonCell = newRow.insertCell(4);

    // Set the data for each cell
    idCell.textContent = supplier.id;
    socialReasonCell.textContent = supplier.socialReason;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(supplier.createdAt)); // Format the date value using Intl formatter
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(supplier.id), 'editButton', 'Editar')}</td>`); // Insert a new button to edit supplier data by id
    deleteButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(supplier.id), 'removeButton', 'Remover')}</td>`); // Insert a new button to remove a supplier by id
  });
}


