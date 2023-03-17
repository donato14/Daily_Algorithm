function solution(n) {
  var answer = 0;
  console.log(Math.sqrt(n))
  console.log(Number.isInteger(Math.sqrt(n)))
  if(Number.isInteger(Math.sqrt(n))){
      answer = 1;
  } else {
      answer = 2;
  }
  
  return answer;
}