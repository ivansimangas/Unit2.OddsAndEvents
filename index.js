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
  numberBank.push(number); //adds the number to the number bank
  render(); //re-renders the app to display updated number bank
}

function NumberBank() {
  const $bank = document.createElement("ul"); //create an unordered list
  numberBank.forEach((number) => {
    const $li = document.createElement("li"); //create an <li> element for each number
    $li.textContent = number; //set the list items text content to the number
    $bank.appendChild($li); //a menthod that adds an element inside another element
  });
  return $bank;
}

//sort the first number from the number bank. only move one number(thats why we dont need a loop)
function sortFirst() {
  const number = numberBank.shift(); //remove the first number from the bank
  if (number % 2 === 0) {
    evenNumbers.push(number); //add the number to the even if its divisible by 2
  } else {
    oddNumbers.push(number); //add the number to the odd if its not divisible by 2
  }
  render();
}

//sort all numbers from the nnumber bank. while loop is best when you dont know how mnay times a loop needs to run
function sortAll() {
  while (numberBank.length > 0) {
    //loop stops when the bank is empty
    const number = numberBank.shift(); // remove the first number
    if (number % 2 === 0) {
      evenNumbers.push(number); //add to even numbers if even
    } else {
      oddNumbers.push(number); //add to odd numbers if odd
    }
  }
  render();
}

function SortButtons() {
  const $buttons = document.createElement("div");

  const $sortFirstButton = document.createElement("button");
  $sortFirstButton.textContent = "Sort 1"; //button to sort the first number
  $sortFirstButton.addEventListener("click", sortFirst); //add click event to sort the first number

  const $sortAllButton = document.createElement("button");
  $sortAllButton.textContent = "Sort All"; //button to sort all numbers
  $sortAllButton.addEventListener("click", sortAll); //add click event to sort all the numbers

  $buttons.appendChild($sortFirstButton); //add "sort 1" button inside the div
  $buttons.appendChild($sortAllButton); // add "sort all" button inside the div

  return $buttons;
}

function OddNumbers() {
  const $oddList = document.createElement("ul"); //create an unordered list for odd numbers
  oddNumbers.forEach((number) => {
    //loop through each odd number in the oddNumbers array
    const $li = document.createElement("li"); //create a list item for each number
    $li.textContent = number; //set the list item's text content to the number
    $oddList.appendChild($li); //add the list item to the unordered list
  });
  return $oddList; //return the unordered list  so it can be added to the page
}

function EvenNumbers() {
  const $evenList = document.createElement("ul");
  evenNumbers.forEach((number) => {
    const $li = document.createElement("li");
    $li.textContent = number;
    $evenList.appendChild($li);
  });
  return $evenList;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = "";
  $app.appendChild(NumberForm());
  $app.appendChild(NumberBank());
  $app.appendChild(SortButtons());
  $app.appendChild(OddNumbers());
  $app.appendChild(EvenNumbers());
}
render();
