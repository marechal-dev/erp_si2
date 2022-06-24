'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

const deleteProductButtonsList = document.querySelectorAll('.deleteProductButton');

deleteProductButtonsList.forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = event.target.id;

    const itemToRemove = LocalStorageManager.getAll('products').find((product) => product.id === productId);

    LocalStorageManager.remove('products', itemToRemove);

    alert(`Item ${itemToRemove.title} removido com sucesso`);

    location.reload();
  });
})
