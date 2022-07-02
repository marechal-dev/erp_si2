'use strict';

import { Customer } from '../../classes/entities/Customer.js';
import { generateButton } from '../utils/generateButton.js';

/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {Array<Customer>} customersData 
 */
export function populateCustomersTable(tableElement, customersData) {
  customersData.forEach((customer) => {
    const newRow = tableElement.insertRow(-1);
    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const createdAtCell = newRow.insertCell(2);
    const editButtonCell = newRow.insertCell(3);
    const removeButtonCell = newRow.insertCell(4);

    idCell.textContent = customer.id;
    nameCell.textContent = customer.name;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(customer.createdAt));
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(customer.id), 'editButton', 'Editar', 'btn-edit')}</td>`);
    removeButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(customer.id), 'removeButton', 'Remover', 'btn-remove')}</td>`);
  });
}
