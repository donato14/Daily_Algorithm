function solution(my_string) {
  var answer = '';
  let arr = [];
  
  arr = my_string.split('');
  answer = arr.reverse().join('');
  
  console.log(answer)
  
  return answer;
}