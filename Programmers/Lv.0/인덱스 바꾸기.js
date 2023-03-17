function solution(my_string, num1, num2) {
  var answer = '';
  let first = '';
  let second = '';
  let arr = [];
  
  arr = my_string.split('');
  
  first = arr[num1];
  second = arr[num2];
  
  arr[num1] = second;
  arr[num2] = first;
  
  answer = arr.join('')
  
  return answer;
}