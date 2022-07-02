'use strict';

import { LocalStorageManager } from '../classes/utils/LocalStorageManager.js';


export function handleLogout() {
  LocalStorageManager.dropTable('loggedInUser');

  window.location.href = '/index.html';
}
