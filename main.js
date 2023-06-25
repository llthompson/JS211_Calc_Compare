// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

// date and time 

console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
const numberToString = num => String(num);


// Write a JavaScript program to convert a string to the number.
const stringToNumber = str => Number(str);


// calculator

  const form = document.getElementById('calculatorForm');
  const resultElement = document.getElementById('result');

  form.addEventListener("submit", e => {
    e.preventDefault()
  

    const firstNumber = parseFloat(document.getElementById('first-number').value);
    const secondNumber = parseFloat(document.getElementById('second-number').value);
    const operator = document.getElementById('operator').value;

    let result;
    let message;
  
    if (operator === 'add') {
      result = firstNumber + secondNumber;
      message = `The sum of ${firstNumber} and ${secondNumber} is <span class="answer">${result}</span>.`;
    } else if (operator === 'subtract') {
      result = firstNumber - secondNumber;
      message = `The difference between ${firstNumber} and ${secondNumber} is <span class="answer">${result}</span>.`;
    } else if (operator === 'multiply') {
      result = firstNumber * secondNumber;
      message = `The product of ${firstNumber} and ${secondNumber} is <span class="answer">${result}</span>.`;
    } else if (operator === 'divide') {
      result = firstNumber / secondNumber;
      message = `The dividend of ${firstNumber} divided by ${secondNumber} is <span class="answer">${result}</span>.`;
    } else {
      message = 'Please select an operator';
    }
  
    resultElement.textContent = `Result: ${result}`;
    resultElement.innerHTML = message;
  });
 

// truthy or falsy

function evaluateItems() {
  const firstItem = document.getElementById('first-item').value;
  const secondItem = document.getElementById('second-item').value;

  const firstItemResult = evaluateTruthiness(firstItem);
  const secondItemResult = evaluateTruthiness(secondItem);

  const outcomeElement = document.getElementById('outcome');
  outcomeElement.innerHTML = `${firstItem} is ${firstItemResult ? 'truthy' : 'falsy'} and ${secondItem} is ${secondItemResult ? 'truthy' : 'falsy'}.`;
}

function evaluateTruthiness(value) {
  return value !== '' && value !== 'null' && value !== 'undefined' && value !== 'false' && value !== '0';
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
