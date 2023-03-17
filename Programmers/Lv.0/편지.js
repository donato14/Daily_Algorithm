function solution(message) {
  var answer = 0;
  let char = [];
  
  char = message.split('');
  
  answer = char.length * 2;
  return answer;
}
