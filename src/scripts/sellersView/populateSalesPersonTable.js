'use strict';

import { generateButton } from '../utils/generateButton.js';

/**
 * 
 * @param {HTMLTableElement} tableElement 
 * @param {Array<SalesPerson>} salesPersonData
 */
export function populateSalesPersonTable(tableElement, salesPersonData) {
  salesPersonData.forEach((salesPerson) => {
    const newRow = tableElement.insertRow(-1); // Insert a new row
    const nameCell = newRow.insertCell(0); // Create the cells to hold data
    const lastName = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);
    const createdAtCell = newRow.insertCell(3);
    const modifiedAtCell = newRow.insertCell(4);
    const editButtonCell = newRow.insertCell(5);
    const deleteButtonCell = newRow.insertCell(6);

    // Set the data for each cell
    nameCell.textContent = salesPerson.name;
    lastName.textContent = salesPerson.lastName;
    emailCell.textContent = salesPerson.email;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(salesPerson.createdAt)); // Format the date value using Intl formatter
    modifiedAtCell.textContent = salesPerson.modifiedAt ? Intl.DateTimeFormat('pt-BR').format(new Date(salesPerson.modifiedAt)) : '---';
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(salesPerson.id), 'editButton', 'Editar')}</td>`); // Insert a new button to edit supplier data by id
    deleteButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(salesPerson.id), 'removeButton', 'Remover')}</td>`); // Insert a new button to remove a supplier by id
  });
}
