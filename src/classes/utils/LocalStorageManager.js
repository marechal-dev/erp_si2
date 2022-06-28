export class LocalStorageManager {
  // Table Manipulation Methods
  /**
   * @param {string} tableName
   */
  static createTable(tableName) {
    const doesTableAlreadyExists = Boolean(this.tableExists(tableName));

    if (doesTableAlreadyExists) {
      throw new Error("Table already exists!");
    }

    localStorage.setItem(tableName, JSON.stringify([]));

    return this;
  }

  /**
   * @param {string} tableName
   */
  static dropTable(tableName) {
    const tableDoesNotExist = !Boolean(this.tableExists(tableName));

    if (tableDoesNotExist) {
      throw new Error("Table does not exist!");
    }

    localStorage.removeItem(tableName);

    return this;
  }

  /**
   * Drops **ALL** tables from the Local Storage
   * 
   * Use with f*cking caution.
   */
  static dropAllTables() {
    localStorage.clear();

    return this;
  }

  // Data Manipulation Methods
  /**
   * Get all data from a given table
   * @param {string} tableName
   * 
   * @returns {Array<any>}
   */
   static getAll(tableName) {
    const data = this.#getTableData(tableName);

    return data;
  }

  /**
   * Inserts a single or a bulk of itens on a given table
   * 
   * @param {string} tableName 
   * @param {Array<any>} items 
   */
  static insert(tableName, ...items) {
    const tableData = this.#getTableData(tableName);

    items.forEach((item) => {
      tableData.push(item);
    });

    localStorage.setItem(tableName, JSON.stringify(tableData));

    return this;
  }

  /**
   * Removes a single or a bulk of itens on a given table
   * 
   * @param {string} tableName 
   * @param {Array} items 
   */
  static remove(tableName, ...items) {
    const tableData = this.#getTableData(tableName);

    items.forEach((item) => {
      const toRemoveItemIndex = tableData.indexOf(item);

      tableData.splice(toRemoveItemIndex, 1);
    });

    localStorage.setItem(tableName, JSON.stringify(tableData));

    return this;
  }

  /**
   * @param {string} tableName
   * @param {string} itemIdentifier
   * @param {object} data
   */
  static edit(tableName, itemIdentifier, data) {
    throw new Error('Not implemented!');
  }

  // Utils Methods
  /**
   * @param {string} tableName
   */
   static tableExists(tableName) {
    const doesTableExist = Boolean(this.#getTableData(tableName));

    if (doesTableExist) {
      return true;
    }

    return false;
  }

  // Private Methods
  /**
   * @private
   * @param {string} tableName
   */
  static #getTableData(tableName) {
    const retrievedTable = JSON.parse(localStorage.getItem(tableName));

    if (!retrievedTable) {
      throw new Error('Table does not exists!');
    }

    return retrievedTable;
  }
}