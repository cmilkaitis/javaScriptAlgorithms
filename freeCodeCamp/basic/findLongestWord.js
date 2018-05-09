function findLongestWord(str) {
    let words = [];
    str.split(' ').forEach(word => words.push(word.length));
    words.sort(function(a,b){return b - a});
    return words[0];
}

function longestWord(str) {
    let strArray = str.split(" ")
    let longestWord = "";
    for(let i = 0; i < strArray.length; i++) {
    	if(strArray[i].length > longestWord.length){
	    longestWord = strArray[i];
	}
    }
    return longestWord;
}
