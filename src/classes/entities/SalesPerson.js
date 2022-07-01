'use strict';

import { User } from "./User.js";
import { Transaction } from "./Transaction.js";

export class SalesPerson extends User {
  /**@type {Array<Transaction>} */
  transactions;

  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   */
  constructor(name, email, password) {
    super(name, email, password);
    this.transactions = [];
  }
}