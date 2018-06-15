function telephoneCheck(str) {
    const REGEX = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/g;
    return REGEX.test(str);
  }
  telephoneCheck("(6505552368)");