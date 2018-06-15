function rot13(str) { // LBH QVQ VG!
    var converted = [];
    var words = str.split('');
    for(var i = 0; i < words.length; i++){
      for(var j = 0; j < words[i].length; j++){
        var char = words[i][j].charCodeAt(0);
        if(char > 90 || char < 65){
          converted.push(String.fromCharCode(char));
        } else if (char < 78){
          converted.push(String.fromCharCode(char + 13));
        } else {
          converted.push(String.fromCharCode(char - 13));
        }
      }
    }
    return converted.join('');
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");