'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

const logoutButtom = document.querySelector('.logoutButton');

logoutButtom.addEventListener('click', () => {
  LocalStorageManager.dropTable('loggedInUser');

  window.location.href = '/index.html';
});
