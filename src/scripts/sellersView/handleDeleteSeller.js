'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

/**
 * Deletes a Sales Person by ID
 * @param {Event} event 
 */
export function handleDeleteSeller(event) {
  const sellerId = event.target.id;
  const toRemoveSeller = LocalStorageManager.getAll('seller').find((seller) => seller.id === sellerId);

  const wantToRemoveSeller = confirm(`Deseja remover o vendedor ${toRemoveSeller.name}`);

  if (wantToRemoveSeller) {
    alert(`Vendedor ${toRemoveSeller.name} removido com sucesso`);

    LocalStorageManager.remove('seller', toRemoveSeller);
  
    window.location.reload();
  } else {
    return;
  }
}