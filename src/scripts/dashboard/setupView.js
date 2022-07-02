'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

import { setDisplayedUserName } from '../setDisplayedUserName.js'
import { handleLogout } from '../handleLogout.js';

window.addEventListener('load', () => {
  if (userIsLoggedIn()) {
    setDisplayedUserName();

    const logoutButtonElement = document.querySelector('#logoutButton');
    logoutButtonElement.addEventListener('click', () => handleLogout());

    const productsTableDontExist = !LocalStorageManager.tableExists('products');
    const customersTableDontExist = !LocalStorageManager.tableExists('customers');
    const sellersTableDontExist = !LocalStorageManager.tableExists('sellers');
    const suppliersTableDontExist = !LocalStorageManager.tableExists('suppliers');

    if (productsTableDontExist) {
      LocalStorageManager.createTable('products');
    }

    if (customersTableDontExist) {
      LocalStorageManager.createTable('customers');
    }

    if (sellersTableDontExist) {
      LocalStorageManager.createTable('sellers');
    }

    if (suppliersTableDontExist) {
      LocalStorageManager.createTable('suppliers');
    }

    const productsData = LocalStorageManager.getAll('products');
    const customersData = LocalStorageManager.getAll('customers');
    const sellersData = LocalStorageManager.getAll('sellers');
    const suppliersData = LocalStorageManager.getAll('suppliers');

    const totalStorageValueElement = document.querySelector('#storageValueTotal');
    const totalStorageQuantityElement = document.querySelector('#storageQuantityTotal');
    const totalRegisteredCustomersElement = document.querySelector('#registeredCustomersTotal');
    const totalRegisteredSellersElement = document.querySelector('#registeredSellersTotal');
    const totalRegisteredSuppliersElement = document.querySelector('#registeredSuppliersTotal');

    let totalStorageValueSum = 0;
    let totalStorageQuantitySum = 0;
    productsData.forEach((product) => {
      totalStorageValueSum += Number(product.price);
      totalStorageQuantitySum += Number(product.quantity);
    });

    totalStorageValueElement.textContent = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(totalStorageValueSum);
    totalStorageQuantityElement.textContent = totalStorageQuantitySum;
    totalRegisteredCustomersElement.textContent = customersData.length;
    totalRegisteredSellersElement.textContent = sellersData.length;
    totalRegisteredSuppliersElement.textContent = suppliersData.length;

    return;
  } else {
    window.location.href = '/index.html';
  }
});

/**
 * Checks if there is a logged user.
 * @returns {void}
 */
function userIsLoggedIn() {
  const loggedUserData = LocalStorageManager.getAll('loggedInUser');

  if (loggedUserData.length > 0) {
    return true;
  }

  return false;
}


