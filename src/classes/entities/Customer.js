'use strict';

export class Customer {
  id;
  name;
  email;
  createdAt;
  modifiedAt;

  /**
   * @param {string} name 
   * @param {string} email 
   */
  constructor(name, email) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
    this.modifiedAt = null;
  }
}