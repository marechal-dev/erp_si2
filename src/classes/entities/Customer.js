'use strict';

export class Customer {
  id;
  name;
  createdAt;

  /**
   * @param {string} name 
   */
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.createdAt = new Date();
    this.modifiedAt = null;
  }
}