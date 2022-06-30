'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

window.addEventListener('load', () => {
  const suppliersTableDontExist = !LocalStorageManager.tableExists('suppliers');

  if (suppliersTableDontExist) {
    LocalStorageManager.createTable('suppliers');
    return;
  }

  const suppliersData = LocalStorageManager.getAll('suppliers');
  if (suppliersData.length > 0) {
    const suppliersTable = document.querySelector('table');

    suppliersData.forEach((supplier) => {
      const newRow = suppliersTable.insertRow(-1);
      const idCell = newRow.insertCell(0);
      const socialReasonCell = newRow.insertCell(1);
      const createdAtCell = newRow.insertCell(2);
      const editButtonCell = newRow.insertCell(3);
      const deleteButtonCell = newRow.insertCell(4);

      idCell.textContent = supplier.id;
      socialReasonCell.textContent = supplier.socialReason;
      createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(supplier.createdAt));
      editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(supplier.id), 'editButton', 'Editar')}</td>`);
      deleteButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(supplier.id), 'removeButton', 'Remover')}</td>`);
    });
  }

  const editButtonsList = document.querySelectorAll('[data-js-identifier="editButton"]');
  const removeButtonsList = document.querySelectorAll('[data-js-identifier="removeButton"]');

  editButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemId = event.target.id;
      const newSupplierSocialReason = prompt(`Insira o novo nome da razão social do item ${itemId}`);
      const newSupplierData = {
        socialReason: newSupplierSocialReason
      };

      LocalStorageManager.edit('suppliers', 'id', itemId, newSupplierData);

      window.location.reload();
    });
  });

  removeButtonsList.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemId = event.target.id;
      const suppliersData = LocalStorageManager.getAll('suppliers');
      const itemIndex = suppliersData.findIndex((supplier) => supplier.id === itemId);

      suppliersData.slice(itemIndex, 1);

      LocalStorageManager.remove('suppliers', suppliersData);

      window.location.reload();
    });
  });
});

/**
 * 
 * @param {string} id 
 * @param {string} jsIdentifier
 * @param {string} textContent
 */
function generateButton(id, jsIdentifier, textContent) {
  return `<button data-js-identifier="${jsIdentifier}" id="${id}" type="button">${textContent}</button>`;
}
