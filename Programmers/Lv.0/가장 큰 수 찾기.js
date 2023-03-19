function solution(array) {
  var answer = [];
  let arr = [];
  let index = 0;
  
  arr = [...array];
  arr = arr.sort(function(a,b) {
      return b - a;
  });

  index = array.indexOf(arr[0]);
  
  answer.push(arr[0]);
  answer.push(index);
  
  return answer;
}