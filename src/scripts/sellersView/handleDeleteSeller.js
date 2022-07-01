'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

/**
 * 
 * @param {Event} event 
 */
export function handleDeleteSeller(event) {
  const itemId = event.target.id;
  const sellersData = LocalStorageManager.getAll('seller');
  const toRemoveItem = sellersData.find((seller) => seller.id === itemId);

  LocalStorageManager.remove('seller', toRemoveItem);

  window.location.reload();
}