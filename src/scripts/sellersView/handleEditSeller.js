'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager';

import { handleChangeSellerActionModalState } from './handleCloseSellerActionModal.js';

const sellerNameInput = document.querySelector('#seller-name-input');
const sellerLastNameInput = document.querySelector('#seller-last-name-input');
const sellerEmailInput = document.querySelector('#seller-email-input');
const sellerPasswordInput = document.querySelector('#seller-password-input');

/**
 * 
 * @param {Event} event
 */
export function handleEditSeller(event) {
  const sellerNewData = {
    name: sellerNameInput.value,
    lastName: sellerLastNameInput.value,
    email: sellerEmailInput.value,
    password: sellerPasswordInput.value,
  };

  LocalStorageManager.edit('sellers', 'id', event.target.id, sellerNewData);
  handleChangeSellerActionModalState();
  window.location.reload();
}
