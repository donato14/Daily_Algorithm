function solution(my_string) {
  var answer = 0;
  let regex = /[a-zA-Z]/g;
  let arr = [];
  
  my_string = my_string.replace(regex, '');
  arr = my_string.split('');
  for(let i = 0; i < arr.length; i++){
      answer = answer + parseInt(arr[i]);
  }
  return answer;
}