function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let newWords = [];
    
    for (let i = 0; i < words.length; i++) {
     let first = words[i].charAt(0).toUpperCase(); 
     let letters = words[i].slice(1);
     newWords.push(first + letters);
    }
    return newWords.join(" "); 
  }


  function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    
    return words.map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
   }).join(" ");  
  }