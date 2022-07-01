'use strict';

import { SalesPerson } from '../../classes/entities/SalesPerson.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';
import { handleEditSeller } from './handleEditSeller.js';

const actionSellerModal = document.querySelector('#action-seller-modal');
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
    submitFormButton.addEventListener('click', () => handleEditSeller(sellerId));
    populateSellerDataForm(sellerData);
  }

  actionSellerModal.toggleAttribute('.disabled');
}

/**
 * 
 * @param {SalesPerson} salesPersonData 
 */
function populateSellerDataForm(salesPersonData) {
  sellerNameInput.value = salesPersonData.name;
  sellerLastNameInput.value = salesPersonData.lastName;
  sellerEmailInput.value = salesPersonData.email;
  sellerPasswordInput.value = salesPersonData.password;
}

