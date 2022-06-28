'use strict';

/**
 * @param {number} price 
 */
function formatPrice(price) {
  if (price < 10) {
    const formattedPrice = String(price).padStart('2', '0').replace('.', ',');

    return `R$ ${formattedPrice}`;
  } else {
    return `R$ ${String(price).replace('.', ',')}`;
  }
}

/**
 * 
 * @param {number} quantity 
 */
function formatQuantity(quantity) {
  return `${quantity} UN(s)`;
}

export { formatPrice, formatQuantity };
