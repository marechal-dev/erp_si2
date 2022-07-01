export class User {
  id;
  name;
  email;
  password;
  createdAt;

  /**
   * @param {string} name 
   * @param {string} email 
   * @param {string} password
   */
  constructor(name, email, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;

    this.createdAt = new Date();
  }
}