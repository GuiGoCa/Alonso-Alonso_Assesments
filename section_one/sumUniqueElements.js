
/*Decided to use readline function again to allow the user 
the input of data*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*Calling a function that performs the action to seperate the common elements in the array
and not take it to sum them*/

function sumNonRepeatedElementsWithSets(arr) {
  const allElements = new Set();
  const nonRepeated = new Set();

  for (const num of arr) {
    if (allElements.has(num)) {
      nonRepeated.delete(num);
    } 
    else {
      allElements.add(num);
      nonRepeated.add(num); 
    }
  }

  let sum = 0;
  for (const num of nonRepeated) {
    sum += num;
  }
  return sum;
}


/**Using an async function 
 * to stop the 
 * while loop until the user 
 * inputs the number */

async function askQuestion(number) {
  return new Promise(resolve => readline.question(number, resolve));
} 


/*Begins to ask the user all the numbers he wants until 5
and add it to the array of numbers*/

async function collectNumbers() {
  let i = 0;
  const nums = [];

  while (i < 5) {
    const input = await askQuestion('Please enter your number: ');
    console.log(`You entered: ${input}`);
    nums.push(parseInt(input)); // I tried to convert each String number as Integer number
    i++;
  }

  console.log('All numbers entered:', nums);
  console.log('Your total sum is: ', sumNonRepeatedElementsWithSets(nums));
  readline.close(); 
}


collectNumbers();