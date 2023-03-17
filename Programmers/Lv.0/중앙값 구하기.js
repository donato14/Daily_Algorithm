function solution(array) {
  var answer = 0;
  let middleNum = 0;
  let sortArr = [];
  
  sortArr = array.sort(function(a,b){
      return a - b;
  })
  
  middleNum = Math.floor((sortArr.length / 2));
  console.log(middleNum)
  
  answer = sortArr[middleNum]
  
  return answer;
}