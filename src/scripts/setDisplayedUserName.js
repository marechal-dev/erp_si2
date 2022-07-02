'use strict';

import { LocalStorageManager } from '../classes/utils/LocalStorageManager.js';

/**
 * Set the displayed name to the full name from the currently logged user
 * 
 */
export function setDisplayedUserName() {
  const loggedUserName = LocalStorageManager.getAll('loggedInUser')[0].name;
  const loggedUserNameElement = document.querySelector('.user-info__user-name');
  loggedUserNameElement.textContent = `${loggedUserName}`
}