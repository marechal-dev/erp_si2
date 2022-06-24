'use strict';

import { LocalStorageManager } from '../utils/LocalStorageManager.js';

export class TransactionItem {
  storageItemId;
  quantity;
  finalValue;

  /**
   * @param {string} itemId
   * @param {number} quantity
   */
  constructor(itemId, quantity) {
    this.storageItemId = itemId;
    this.quantity = quantity;

    const allProductsData = LocalStorageManager.getAll("products");

    const itemData = allProductsData.find((product) => product.id === itemId);

    this.finalValue = itemData.price * quantity;
  }
}