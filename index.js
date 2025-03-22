// === State ===

/**
 * These state variables will let me track the numbers in the bank and the
 * sorted numbers. Whenever changes occur, these state variables will update
 */
let numberBank = []; // Holds all user-entered numbers

let oddNumbers = []; // Holds the odd numbers

let evenNumbers = []; // Holds the even numbers

// === Components ===

/**
 * I need components for:
 *  1. A form to add numbers
 *  2. A display of the number bank
 *  3. Displays for odd and even categories
 *  4. Buttons to trigger sorting
 */

function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <input type="number" id="numberInput"/>
    
    `;
}
