'use strict';

import { Customer } from '../../classes/entities/Customer.js';
import { generateButton } from '../utils/generateButton';

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
    const emailCell = newRow.insertCell(2);
    const createdAtCell = newRow.insertCell(3);
    const modifiedAtCell = newRow.insertCell(4);
    const editButtonCell = newRow.insertCell(5);
    const removeButtonCell = newRow.insertCell(6);

    idCell.textContent = customer.id;
    nameCell.textContent = customer.name;
    emailCell.textContent = customer.email;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(customer.createdAt));
    modifiedAtCell.textContent = customer.modifiedAt ? Intl.DateTimeFormat('pt-BR').format(new Date(customer.modifiedAt)) : '---';
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(customer.id, 'editButton', 'Editar'))}</td>`);
    removeButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(customer.id, 'removeButton', 'Remover'))}</td>`);
  });
}
