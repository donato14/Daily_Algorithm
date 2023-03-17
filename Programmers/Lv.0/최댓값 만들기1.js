function solution(numbers) {
  var answer = 0;
  let twoOfMaxNum = [];
  
  numbers.sort(function(a,b){
      return b - a;
  });
  console.log(numbers);
  
  twoOfMaxNum.push(numbers[0]);
  twoOfMaxNum.push(numbers[1]);
  
  answer = twoOfMaxNum[0] * twoOfMaxNum[1];
  
  
  return answer;
}