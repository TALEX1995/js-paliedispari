console.log('JS OK')


// Esercizio numero 1

// Prompt to ask an user word
const userWord = prompt('Scrivi una parola, ti dirò se è palindroma o no')


// Function for palindrome word
function isPalindrome () {
    
    // Start variable false value
    let palindromeWord = 'Non è una parola palindroma';

    // Reverse userWord
    reverseWord = ''

    // Prepare currentIndex
    let currentIndex = userWord.length - 1
    
    // Cicle to reverse the word
    while (reverseWord.length !== userWord.length) {
        reverseWord += userWord.charAt(currentIndex);
        currentIndex--
    }
    
    // Conditions to see if the user word and reverse word are the same
    if (userWord === reverseWord) {
        palindromeWord = 'E\' una parola palindroma'
    }

    console.log(palindromeWord)
}

isPalindrome(userWord)