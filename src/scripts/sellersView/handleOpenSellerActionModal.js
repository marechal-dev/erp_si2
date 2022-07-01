'use strict';

import { SalesPerson } from '../../classes/entities/SalesPerson.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';
import { handleAddSeller } from './handleAddSeller.js';
import { handleChangeSellerActionModalState } from './handleCloseSellerActionModal.js';
import { handleEditSeller } from './handleEditSeller.js';

const sellerNameInput = document.querySelector('#seller-name-input');
const sellerLastNameInput = document.querySelector('#seller-last-name-input');
const sellerEmailInput = document.querySelector('#seller-email-input');
const sellerPasswordInput = document.querySelector('#seller-password-input');
const submitFormButton = document.querySelector('#action-seller-submit-button');

/**
 * 
 * @param {boolean} isEditing
 * @param {string} [sellerId]
 */
export function handleOpenSellerActionModal(isEditing, sellerId) {
  if (isEditing && sellerId) {
    const sellerData = LocalStorageManager.getAll('sellers').find((seller) => seller.id === sellerId);
    populateSellerDataForm(sellerData);
    
    submitFormButton.addEventListener('click', (event) => handleEditSeller(event));
  }

  if (!isEditing && !sellerId) {
    submitFormButton.addEventListener('click', (event) => handleAddSeller(event))
  }

  handleChangeSellerActionModalState();
}

/**
 * Function used to populate the inputs values with data from Local Storage
 * 
 * @param {SalesPerson} salesPersonData 
 */
function populateSellerDataForm(salesPersonData) {
  sellerNameInput.value = salesPersonData.name;
  sellerLastNameInput.value = salesPersonData.lastName;
  sellerEmailInput.value = salesPersonData.email;
  sellerPasswordInput.value = salesPersonData.password;
}

