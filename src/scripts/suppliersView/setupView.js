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
    const suppliersTableBody = suppliersTable.querySelector('[data-js-identifier=suppliers-table-body]');

    suppliersData.forEach((supplier) => {
      const newRow = `
      <tr>
        <td>${supplier.id}</td>
        <td>${supplier.socialReason}</td>
        <td>${Intl.DateTimeFormat('pt-BR').format(new Date(supplier.createdAt))}</td>
        <td><button id="${supplier.id}" type="button">Editar</button></td>
        <td><button id="${supplier.id}" type="button">Remover</button></td>
      </tr>
      `;
      const newRowa = document.createElement('tr');
      

      suppliersTableBody.appendChild(newRow);
    });
  }
});
