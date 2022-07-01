'use strict';

import { Product } from '../../classes/entities/Product.js';

import { generateButton } from '../utils/generateButton.js';

/**
 * @param {HTMLTableElement} tableElement
 * @param {Array<Product>} productsData
 */
function appendToProductsTableBody(tableElement, productsData) {
  productsData.forEach((product) => {
    const newRow = tableElement.insertRow(-1); // Insert a new row
    
    // Create the cells to hold data
    const idCell = newRow.insertCell(0); 
    const titleCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);
    const quantityCell = newRow.insertCell(3);
    const descriptionCell = newRow.insertCell(4);
    const createdAtCell = newRow.insertCell(5);
    const modifiedAtCell = newRow.insertCell(6);
    const editButtonCell = newRow.insertCell(7);
    const deleteButtonCell = newRow.insertCell(8);

    // Set the data for each cell
    idCell.textContent = product.id;
    titleCell.textContent = product.title;
    quantityCell.textContent = product.quantity;
    priceCell.textContent = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(product.price)); // Format the price using the Intl currency formatter
    descriptionCell.textContent = product.description;
    createdAtCell.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(product.createdAt)); // Format the date value using Intl formatter
    modifiedAtCell.textContent = product.modifiedAt ? Intl.DateTimeFormat('pt-BR').format(new Date(product.modifiedAt)) : '---'; // Format the date value using Intl formatter
    editButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(product.id), 'editButton', 'Editar')}</td>`); // Insert a new button to edit product data by id
    deleteButtonCell.insertAdjacentHTML('afterbegin', `<td>${generateButton(String(product.id), 'removeButton', 'Remover')}</td>`); // Insert a new button to remove a product by id
  });
}

export { appendToProductsTableBody };
