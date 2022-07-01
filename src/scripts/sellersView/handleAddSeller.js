'use strict';

import { SalesPerson } from '../../classes/entities/SalesPerson.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

const sellerNameInput = document.querySelector('#seller-name-input');
const sellerLastNameInput = document.querySelector('#seller-last-name-input');
const sellerEmailInput = document.querySelector('#seller-email-input');
const sellerPasswordInput = document.querySelector('#seller-password-input');

/**
 * Handles the logic to add a new seller
 * @param {Event} event 
 * @returns 
 */
export function handleAddSeller(event) {
  event.preventDefault();

  if (!sellerNameInput.value || !sellerLastNameInput.value || !sellerEmailInput.value || !sellerPasswordInput.value) {
    alert('Por favor, revise os campos');
    return;
  }

  const newSeller = new SalesPerson(sellerNameInput.value, sellerLastNameInput.value, sellerEmailInput.value, sellerPasswordInput.value);
  LocalStorageManager.insert('sellers', newSeller);

  alert(`Vendedor ${newSeller.name} adicionado com sucesso!`);

  window.location.reload();
}