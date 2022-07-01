'use strict';

export class Product {
  id;
  title;
  price;
  quantity;
  description;
  createdAt;
  modifiedAt;

  /**
   * @param {string} title
   * @param {number} price
   * @param {number} quantity
   */
  constructor(title, price, quantity) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.description = "";

    this.createdAt = new Date();
    this.modifiedAt = null;
  }

  /**
   * @param {string} title 
   * @param {number} price 
   * @param {number} quantity 
   * @param {string} description 
   */
  constructor(title, price, quantity, description) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.description = description;

    this.createdAt = new Date();
    this.modifiedAt = null;
  }
}
