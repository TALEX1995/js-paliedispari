console.log('JS OK')


// User Chose odd or even and number

const oddEvenUser = prompt('Scegli pari o dispari');

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));


// Generate random pc number

const max = 5
const min = 1

// Function for random Number
function randomNumber (max, min) {
    const PcNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return PcNumber
}

