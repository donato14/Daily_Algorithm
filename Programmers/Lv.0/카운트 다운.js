function solution(start, end) {
  var answer = [];
  let temp = start;
  for(let i = 0; i <= start-end; i++){
      answer.push(temp)
      temp--;
  }
  return answer;
}