'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { Product } from '../../classes/entities/Product.js';

const productTitle = document.querySelector('[data-id="productTitleInput"]');
const productPrice = document.querySelector('[data-id="productPriceInput"]');
const productQuantity = document.querySelector('[data-id="productQuantityInput"]');
const productDescription = document.querySelector('[data-id="productDescriptionInput"]');

const insertProductButton = document.querySelector('[data-id="insertProductButton"]');

insertProductButton.addEventListener('click', () => {
  let newProduct;

  if (productDescription.value) {
    newProduct = new Product(
      productTitle.value,
      parseFloat(productPrice.value),
      parseInt(productQuantity.value),
      productDescription.value
    );
  } else {
    newProduct = new Product(
      productTitle.value,
      parseFloat(productPrice.value),
      parseInt(productQuantity.value),
    );
  }

  LocalStorageManager.insert('products', newProduct);

  alert('Produto inserido com sucesso!');

  window.location.reload();
});
