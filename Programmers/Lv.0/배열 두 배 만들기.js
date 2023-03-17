function solution(numbers) {
  var answer = [];
  answer = [...numbers];
  answer = answer.map(function(e){
      return e*2;
  })
  return answer;
}