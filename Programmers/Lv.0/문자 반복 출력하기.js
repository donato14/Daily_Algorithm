function solution(my_string, n) {
  var answer = '';
  let arr = [];
  
  arr = my_string.split('');

  answer = arr.map(function(e){
      return e.repeat(n);
  })
  answer = answer.join('');
  
  return answer;
}