'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

export function handleEditProduct(event) {
  const productId = event.target.id;
  const productData = LocalStorageManager.getAll('products').find((product) => product.id === productId);

  let newProductTitle;
  let newProductPrice;
  let newProductQuantity;
  let newProductDescription;

  alert('ATENÇÃO: Se não deseja alterar algum campo, deixe em branco.');
  while (true) {
    const titlePromptValue = prompt('Digite o título do produto:');
    
    if (!titlePromptValue) {
      newProductTitle = productData.title;
      break;
    }

    if (titlePromptValue) {
      newProductTitle = titlePromptValue;
      break;
    }
  }

  while (true) {
    const pricePromptValue = prompt('Digite o preço do produto (use "." ao invés de ","):');
    
    if (!pricePromptValue) {
      newProductPrice = productData.price;
      break;
    } 

    if (pricePromptValue) {
      if (Number.isNaN(Number(pricePromptValue))) {
        alert('Por favor, insira um preço válido (use "." ao invés de ",")');
        continue;
      }
  
      if (Number(pricePromptValue) <= 0) {
        alert('Por favor, insira um preço válido (maior que 0)');
        continue;
      }

      newProductPrice = pricePromptValue;
      break;
    }
  }

  while (true) {
    const quantityPromptValue = prompt('Digite a quantidade inicial do produto (não use números com vírgula):');
    
    if (!quantityPromptValue) {
      newProductQuantity = productData.quantity;
      break;
    }

    if (quantityPromptValue) {
      if (Number.isNaN(Number(quantityPromptValue))) {
        alert('Por favor, insira uma quantidade inicial válida.');
        continue;
      }
  
      if (Number(quantityPromptValue) <= 0) {
        alert('Por favor, insira um preço válido (maior que 0)');
        continue;
      }

      newProductQuantity = Number(quantityPromptValue);
      break;
    }
  }

  const descriptionPromptValue = prompt('Digite a nova descrição do produto:');

  newProductDescription = descriptionPromptValue || productData.description;

  const payload = {
    title: newProductTitle,
    price: newProductPrice,
    quantity: newProductQuantity,
    description: newProductDescription
  };

  alert(`Item ${productData.title} alterado com sucesso!`);

  LocalStorageManager.edit('products', 'id', productId, payload);

  window.location.reload();
}




