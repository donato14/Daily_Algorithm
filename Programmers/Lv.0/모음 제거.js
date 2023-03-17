function solution(my_string) {
  var answer = '';
  let regex = /[aeiou]/g
  
  answer = my_string.replace(regex, '');
  console.log(answer)
  return answer;
}