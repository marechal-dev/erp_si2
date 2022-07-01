'use strict';

import { SalesPerson } from '../../classes/entities/SalesPerson.js';
import { LocalStorageManager } from '../../classes/utils/LocalStorageManager';

import { handleCloseSellerActionModal } from './handleCloseSellerActionModal.js';

/**
 * 
 * @param {string} sellerId
 * @param {SalesPerson} sellerNewData 
 */
export function handleEditSeller(sellerId, sellerNewData) {
  LocalStorageManager.edit('sellers', 'id', sellerId, sellerNewData);
  handleCloseSellerActionModal();
  window.location.reload();
}
