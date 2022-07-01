/**
 * Generate a new button dinamically.
 * 
 * @param {string} id 
 * @param {string} jsIdentifier
 * @param {string} textContent
 */
export function generateButton(id, jsIdentifier, textContent) {
  return `<button data-js-identifier="${jsIdentifier}" id="${id}" type="button">${textContent}</button>`;
}
