/*
will take a string with any character, clean it up and test it 
against the cleaned and reversed version
*/
function palindrome(str) {
    let cleanStr = str.replace(/[^a-z]/gi, "").toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

/*
takes a string and tests the first character against the last, 
if they are the same remove the last character to create a new 
last character
*/

function isPal(str) {
    str1 = str.split('');
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str1[str1.length - 1]) {
            str1 = str1[str1.length - 1].slice(1);
        } else {
            return `${str} is not a palindrome`;
        }
        if (str1.length <= 1) {
            return `${str} is a palindrome`;
        }
    }
}

