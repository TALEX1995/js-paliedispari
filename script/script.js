console.log('JS OK')


// Esercizio numero 1

// Prompt to ask an user word
const userWord = prompt('Scrivi una parola, ti dirò se è palindroma o no');


// Function for palindrome word
function isPalindrome (word) {
    
    word = word.toLowerCase()
    
    // Start variable false value
    let palindromeWord = 'Non è una parola palindroma';

    // Reverse userWord
    reverseWord = ''

    // Prepare currentIndex
    let currentIndex = word.length - 1
    
    // Cicle to reverse the word
    while (reverseWord.length !== word.length) {
        reverseWord += word.charAt(currentIndex);
        currentIndex--
    }
    
    // Cicle with for
    // for(let i = (userWord.length - 1); reverseWord.length !== userWord.length; i-- ) {
    //     reverseWord += userWord.charAt(i);
    // }


    // Conditions to see if the user word and reverse word are the same
    if (word === reverseWord) {
        palindromeWord = 'E\' una parola palindroma'
    }

    console.log(palindromeWord)

    return palindromeWord;
}


// Added result in DOM
const palindromeWordPlaceholder = document.getElementById('palindrome-word');

palindromeWordPlaceholder.innerText = userWord + ' ' + isPalindrome(userWord)