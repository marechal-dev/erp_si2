'use strict';

export class Product {
  id;
  title;
  price;
  quantity;
  description;
  createdAt;

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
  }
}
