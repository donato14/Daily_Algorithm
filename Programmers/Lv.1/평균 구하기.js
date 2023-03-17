function solution(arr) {
  var answer = 0;
  // console.log(arr.length)
  for(let i = 0; i < arr.length; i++) {
      answer += arr[i];
  }
  
  answer = answer / (arr.length);
  return answer;
}