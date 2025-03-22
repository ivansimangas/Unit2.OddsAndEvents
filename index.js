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
    <input type= "number" id= "numberInput"/>
    <button type= "submit"> Add number </button>
    `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault(); //Prevents form submission from reloading page
    const number = parseInt($form.numberInput.value); //retrieves the value from the input field, then converts it into an integar
    if (!isNaN(number)) {
      //checks if the value is a valid number
      addNumber(number); //Calls a function to add the number to the bank
    }
  });
  return $form;
}

//Adds the number to the bank and triggers re-rendering
function addNumber(number) {
  number.Bank.push(number); //adds the number to the number bank
  render(); //re-renders the app to display updated number bank
}

function NumberBank() {
  const $bank = document.createElement("ul"); //create an unordered list
  numberBank.forEach((number) => {
    const $li = document.createElement("li"); //create an <li> element for each number
    $li.textContent = number; //set the list items text content to the number
    $bank.appendChild($li); //append the list item to the bank
  });
  return $bank;
}
