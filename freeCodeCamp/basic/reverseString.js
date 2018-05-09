//version 1
function reverseString(str) {
    return str.split('').reverse().join('');
}

//tried to solve without the use of predefined methods
function reverseString(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
}