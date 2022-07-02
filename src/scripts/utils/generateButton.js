/**
 * Generate a new button dinamically.
 * 
 * @param {string} id 
 * @param {string} jsIdentifier
 * @param {string} textContent
 * @param {string} classes
 */
export function generateButton(id, jsIdentifier, textContent, classes) {
  return `<button data-js-identifier="${jsIdentifier}" id="${id}" class="${classes}" type="button">${textContent}</button>`;
}
