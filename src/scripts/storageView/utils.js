'use strict';

import { Product } from '../../classes/entities/Product.js';

/**
 * @param {Array<Product>} data
 */
function appendToProductsTableBody(...data) {
  const productsTableBody = document.querySelector('[data-id="productsTableBody"]');

  data.forEach((product) => {
    let newProductRow = '\t<tr>\n';

    for (let property in product) {
      const newProductDataCell = `\t\t<td data-productId="${product.id}">${product[property]}</td>\n`;
      newProductRow += newProductDataCell;        
    }

    newProductRow += '\t</tr>\n';

    productsTableBody.appendChild(newProductRow);
  });
}

export { appendToProductsTableBody };
