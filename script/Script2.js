console.log('JS OK')


// User Chose odd or even and number

const oddEvenUser = prompt('Scegli pari o dispari');

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));


// Set 2 variable for max and min

const max = 5;
const min = 1;

// Function for random Number
function randomNumber (min, max) {
    const pcNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return pcNumber;
}

// Random Pc Number
const randomPcNumber = randomNumber(min, max);
console.log(randomPcNumber + ' random pc number')

// Sum user number and pc number
const sumUserPcNumber = userNumber + randomPcNumber;
console.log(sumUserPcNumber + ' sum number')

// Function to determinate if the number is odd or even
function isEven (number) {
    let evenOrOdd = 'pari'
    if (number % 2) {
        evenOrOdd = 'dispari'
    }

    return evenOrOdd
}

// Create a variable to save the result
const evenOrOdd = isEven(sumUserPcNumber)

// Condition to see who won



