export class Supplier {
  id;
  socialReason;
  createdAt;

  /**
   * @param {string} socialReason
   */
  constructor(socialReason) {
    this.id = crypto.randomUUID();
    this.socialReason = socialReason;
    this.createdAt = new Date();
  }
}