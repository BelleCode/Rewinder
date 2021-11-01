// Function that accesses the webpage and get the values from inputs
function getString() {

    // reset the alert in the results to invisible
    document.getElementById("alert").classList.add("invisible");

    // set up the system 
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);

}

// Function that reverses the string
// let name = Bobby
// name[0] = B
// name[1] = o
// name[2] = b  
// name[3] = b
// name[4] = y
// past position in an array.name.length -1


function reverseString(userString) {

    let revString = [];

    // reverse the string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    // return revString back to the controlling program 
    return revString;
}


// Function that reversed the string and displays it to the user
function displayString(revString) {

    //Write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}