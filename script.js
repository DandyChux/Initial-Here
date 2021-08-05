// Write code to complete the initialHere function 👇
function initialHere(firstName, middleName, lastName) {

  // Store the each initial in a variable appending a period (e.g "S." for Susan) 
  let firstInitial = firstName.slice(0,1).concat('.');
  // console.log(firstInitial);
  let middleInitial = middleName.slice(0,1).concat('.');
  // console.log(middleInitial);
  let lastInitial = lastName.slice(0,1).concat('.');
  // console.log(lastInitial);
  // Log the name to the console in the format "Susan B. Anthony, S.B.A."
  console.log(firstName+" "+middleName+" "+lastName+","+" "+firstInitial+middleInitial+lastInitial);
}


// DON’T TOUCH BELOW HERE
initialHere("Susan", "Brownell", "Anthony"); // output: "Susan B. Anthony, S.B.A."
initialHere("Martin", "Luther", "King"); // output: "Martin L. King, M.L.K."
initialHere("Ruth", "Bader", "Ginsburg"); // output: "Ruth B. Ginsburg, R.B.G."
initialHere("John", "Fitzgerald", "Kennedy"); // output: "John F. Kennedy, J.F.K."
initialHere("Franklin", "Delano", "Roosevelt"); // output: "Franklin D. Roosevelt, F.D.R."