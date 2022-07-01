export class User {
  id;
  name;
  lastName;
  email;
  password;
  createdAt;
  modifiedAt;

  /**
   * @param {string} name 
   * @param {string} lastName 
   * @param {string} email 
   * @param {string} password
   */
  constructor(name, lastName, email, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;

    this.createdAt = new Date();
    this.modifiedAt = null;
  }
}