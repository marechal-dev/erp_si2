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

  /**
   * @param {string} newTitle 
   */
  setTitle(newTitle) {
    if (newTitle) {
      this.title = newTitle;

      this.modifiedAt = new Date();
    }

    return this;
  }

  /**
   * @param {number} newPrice 
   */
  setPrice(newPrice) {
    if (newPrice) {
      this.price = newPrice;

      this.modifiedAt = new Date();
    }

    return this;
  }

  /**
   * @param {number} numberOfItens 
   */
  addQuantity(numberOfItens) {
    this.quantity += numberOfItens;
    
    this.modifiedAt = new Date();

    return this;
  }

  /**
   * @param {number} numberOfItens 
   */
  removeQuantity(numberOfItens) {
    if (this.quantity > 0) {
      this.quantity -= numberOfItens;

      if (this.quantity < 0) {
        this.quantity = 0;
      }

      this.modifiedAt = new Date();
    }

    return this;
  }

  /**
   * @param {string} newDescription 
   */
  setDescription(newDescription) {
    this.description = newDescription;
    
    this.modifiedAt = new Date();

    return this;
  }
}
