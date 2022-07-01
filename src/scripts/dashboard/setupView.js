'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

window.addEventListener('load', () => {
  if (userIsLoggedIn()) {
    const loggedUser = LocalStorageManager.getAll('loggendInUser')[0];
    const sellsTableDoesNotExist = LocalStorageManager.tableExists('sells');
  
    setDisplayedUserName(loggedUser.name, loggedUser.lastName);
  
    if (sellsTableDoesNotExist) {
      LocalStorageManager.createTable('sells');
    }
  } else {
    window.location.href = '/index.html';
  }

  return;
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

/**
 * Set the displayed name to the name + last name from the currently logged user
 * 
 * @param {string} name 
 * @param {string} lastName 
 */
function setDisplayedUserName(name, lastName) {
  const loggedUserNameElement = document.querySelector('.user-info__user-name');
  loggedUserNameElement.textContent = `${name} ${lastName}`
}
