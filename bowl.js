let arr = [1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6];
function bowl(arr){
  let totalScore = 0;

  while (arr.length > 1) {
    let frameScore = arr[0] + arr[1];

    if (arr[0] === 10){
      totalScore += frameScore;
      totalScore += arr[2] + arr[3];
      arr.splice(0,2);
    } else if (frameScore === 10){
      totalScore += frameScore;
      totalScore += arr[2];
      arr.splice(0,2);
    } else {
      totalScore += frameScore;
      arr.splice(0,2);
    }  
  }
  return totalScore;
}

console.log(bowl(arr));