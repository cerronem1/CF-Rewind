// Controller function - Get string value from user input
function getValue() {
  // Make sure the alert is not visible to the user
  document.getElementById("alert").classList.add("invisible");
  // Get the value the user entered into the input and assign it to variable
  let userString = document.getElementById("userString").value;

  if (userString.length >= 2) {
    // Assign value returned by reverseString function to variable
    let revString = reverseString(userString);
    // Display the value stored in the variable
    displayString(revString);
  } else {
    alert("Please enter at least 2 characters.");
  }
}

// Logic Function - Reverse the string
function reverseString(userString) {
  // Declare an empty array 
  let reversedString = [];
  // Reverse the string using a for loop
  // Start a last index of array; decrement by 1 each time through loop until index == 0.
  for (let index = userString.length-1; index >= 0; index--) {
    // Each iteration will append the new value to the existing string, NOT overwrite it.
    reversedString += userString[index];
  }

  return reversedString;
}

// View Function - Display the reversed string on the webpage
function displayString(revString) {
  // Write the message to the page
  document.getElementById("msg").innerHTML = `Your string has been "rewinded" to "${revString}"`;
  // Turn on the alert to show the reversed string
  document.getElementById("alert").classList.remove("invisible");
}