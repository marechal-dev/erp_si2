'use strict';

import { generateButton } from '../utils/generateButton.js';

/**
 * Populates the table of Sales Person View with data from LocalStorage
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {Array<SalesPerson>} salesPersonData
 */
export function populateSalesPersonTable(tableElement, salesPersonData) {
  salesPersonData.forEach((salesPerson) => {
    const newRow = tableElement.insertRow(-1); // Insert a new row at the end of the table (-1)
    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1); // Create the cells to hold data
    const emailCell = newRow.insertCell(2);
    const createdAtCell = newRow.insertCell(3);
    const editButtonCell = newRow.insertCell(4);
    const deleteButtonCell = newRow.insertCell(5);

    // Set the data for each cell
    idCell.textContent = salesPerson.id;
    nameCell.textContent = salesPerson.name;
    emailCell.textContent = salesPerson.email;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(salesPerson.createdAt)); // Format the date value using Intl formatter
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(salesPerson.id), 'editButton', 'Editar', 'btn-edit')}</td>`); // Insert a new button to edit supplier data by id
    deleteButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(salesPerson.id), 'removeButton', 'Remover', 'btn-remove')}</td>`); // Insert a new button to remove a supplier by id
  });
}
