function solution(numbers) {
  var answer = 0;
  let arr = [];
  let arrMax = 0;
  
  arr = numbers.sort(function(a,b){
      return a - b;
  });
  
  arrMax = arr.length - 1;

  
  if(arr[0] * arr[1] > arr[arrMax] * arr[arrMax - 1]){
      answer = arr[0] * arr[1]    
  } else {
      answer = arr[arrMax] * arr[arrMax - 1]
  }
  
  
  return answer;
}