'use strict';

const actionSellerModal = document.querySelector('#action-seller-modal');

/**
 * A simple function used to toggle the state of the modal, from disabled to enabled
 * and vice-versa
 */
export function handleChangeSellerActionModalState() {
  actionSellerModal.toggleAttribute('.disabled');
}