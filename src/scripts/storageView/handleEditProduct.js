'use strict';

import { LocalStorageManager } from "../../classes/utils/LocalStorageManager.js";

const updateItemButtonsList = document.querySelectorAll('.editItemButton');

updateItemButtonsList.forEach((button) => {
  button.addEventListener('click', (event) => {
    const productId = event.target.id;

    const newItemData = {};

    const itemToEdit = LocalStorageManager.edit(
      'products', 
      productId,
      newItemData, 
    );

    alert(`Item ${itemToEdit.title} alterado com sucesso!`);

    window.location.reload();
  });
});
