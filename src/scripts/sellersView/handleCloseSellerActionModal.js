'use strict';

const actionSellerModal = document.querySelector('#action-seller-modal');

export function handleCloseSellerActionModal() {
  actionSellerModal.toggleAttribute('.disabled');
}