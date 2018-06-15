function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(num >= str.length) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//should return "A-tisket...".

  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //should return "A-tisket a-tasket A green and yellow basket".