function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
  };

  function repeatStringNumTimes(str, num) {
    if(num > 0){
      return str.repeat(num);
    } else {
      return "";
    }
  }
  
  repeatStringNumTimes("abc", 3); // "abcabcabc"