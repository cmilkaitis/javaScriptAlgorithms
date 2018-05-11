// first attempt: checks the first index vs the last and removes it if its equal
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

//refactored: cleans a string of non a-z characters, sets it to lowercase and compares to the reverse
//will return a boolean
function palindrome(str) {
    let cleanStr = str.replace(/[^a-z]/gi, "").toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}




