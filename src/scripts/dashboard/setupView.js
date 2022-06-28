'use strict';

import { LocalStorageManager } from '../../classes/utils/LocalStorageManager.js';

window.addEventListener('load', () => {
  const sellsTableDoesNotExist = LocalStorageManager.tableExists('sells');

  if (sellsTableDoesNotExist) {
    LocalStorageManager.createTable('sells');
  }
});
