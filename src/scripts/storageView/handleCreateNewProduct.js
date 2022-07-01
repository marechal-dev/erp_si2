'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { Product } from '../../classes/entities/Product.js';

const productTitle = document.querySelector('[data-id="productTitleInput"]');
const productPrice = document.querySelector('[data-id="productPriceInput"]');
const productQuantity = document.querySelector('[data-id="productQuantityInput"]');
const productDescription = document.querySelector('[data-id="productDescriptionInput"]');

const insertProductButton = document.querySelector('[data-id="insertProductButton"]');

export function handleCreateNewProduct() {
  let newProduct;
  let newProductTitle;
  let newProductPrice;
  let newProductQuantity;
  let newProductDescription;

  while (true) {
    const titlePromptValue = prompt('Digite o título do produto:');
    
    if (!titlePromptValue) {
      alert('Por favor, insira um nome válido');
      continue;
    }

    if (titlePromptValue) {
      newProductTitle = titlePromptValue;
      break;
    }
  }

  while (true) {
    const pricePromptValue = prompt('Digite o preço do produto (use "." ao invés de ","):');
    
    if (!pricePromptValue || Number.isNaN(Number(pricePromptValue))) {
      alert('Por favor, insira um preço válido (use "." ao invés de ",")');
      continue;
    }

    if (Number(pricePromptValue) <= 0) {
      alert('Por favor, insira um preço válido (maior que 0)');
      continue;
    }

    if (pricePromptValue) {
      newProductPrice = pricePromptValue;
      break;
    }
  }

  while (true) {
    const quantityPromptValue = prompt('Digite a quantidade inicial do produto (não use números com vírgula):');
    
    if (!quantityPromptValue || Number.isNaN(Number(quantityPromptValue))) {
      alert('Por favor, insira uma quantidade inicial válida.');
      continue;
    }

    if (Number(quantityPromptValue) <= 0) {
      alert('Por favor, insira um preço válido (maior que 0)');
      continue;
    }

    if (quantityPromptValue) {
      newProductQuantity = quantityPromptValue;
      break;
    }
  }

  const descriptionPromptValue = prompt('Digite a descrição do produto (pode ser deixada em branco):');

  if (descriptionPromptValue) {
    newProductQuantity = descriptionPromptValue || '---';
  }

  newProduct = new Product(
    productTitle.value,
    parseFloat(productPrice.value),
    parseInt(productQuantity.value),
    productDescription.value
  );

  LocalStorageManager.insert('products', newProduct);

  alert('Produto inserido com sucesso!');

  window.location.reload();
}
