'use strict';

/**
 * @param {string} email 
 * @returns {boolean}
 */
export function emailIsValid(email) {
  return Boolean(email.includes("@") && email.includes(".com") && email.length > 0);
}