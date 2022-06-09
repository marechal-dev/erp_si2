'use strict';

import { TransactionItem } from './TransactionItem.js';

export class Transaction {
  id;
  transactionDate;
  transactionFinalValue;
  saller;
  itemsIds;

  /**
   * 
   * @param {Array<TransactionItem>} items
   * @param {string} sallerId
   * @param {string} customerId
   */
  constructor(items, sallerId, customerId) {
    this.id = crypto.randomUUID();
    this.transactionDate = new Date();
    this.saller = sallerId;
    this.customer = customerId;
    
    let finalValue = 0;


    items.forEach((item) => {
      finalValue += item.finalValue;
    })
    

    this.transactionFinalValue = finalValue;
  }
}