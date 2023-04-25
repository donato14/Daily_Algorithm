function solution(myString) {
  var answer = '';
  let regex = /a/gi
  myString = myString.toLowerCase();
  answer = myString.replace(regex, 'A');
  return answer;
}