
function confirmEnding(str, target) {

    var t = target.length;
    if(target === str.substr(-t)){
      return true;
    } else {
      return false;
    }
  }

  function confirmEnd(str, target) {
    return str.substr(-target.length) === target;
  }
  
  confirmEnding("Bastian", "n");