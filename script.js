// document.getElementById('check-btn').addEventListener('click', function () {
//     const inputText = document.getElementById('text-input').value.trim();

//     // Check if input text is empty
//     if (inputText === '') {
//         alert('Please input a value');
//         return;
//     }

//     // Clean the input text (remove non-alphanumeric characters and convert to lowercase)
//     const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // Check if the cleaned text is a palindrome
//     const isPalindrome = checkPalindrome(cleanedText);

//     // Display result
//     const resultDiv = document.getElementById('result');
//     resultDiv.textContent = `${inputText} is ${isPalindrome ? '' : 'not '}a palindrome`;
// });

// function checkPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }




//function PalindromeChecker
function palindromeApp() {
    //Variable inputText
    const inputText = document.getElementById('text-input').value.trim();

    // Check if input text is not empty
    if (inputText === '') {
        alert('Please input a value');
        return "";
    }
    // Transformer the Text input
    const transformerText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the Transformer text is a palindrome
    const isPalindrome = checkPalindrome(transformerText);

    // Display result in div
    const divResult = document.getElementById('result');
    divResult.textContent = `${inputText} is ${isPalindrome ? '' : 'not '}a palindrome`;

}

//Function allow of cheched  the palindrome
function checkPalindrome(str) {
    return str === str.split('').reverse().join('');
}

//Active event button check
document.getElementById('check-btn').addEventListener('click', palindromeApp)