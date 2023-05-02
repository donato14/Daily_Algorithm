function solution(arr, k) {
  var answer = [];
  if(k % 2 == 1){
      for(let i = 0; i < arr.length; i++){
          arr[i] = arr[i] * k;
      }
  }else {
      for(let i = 0; i < arr.length; i++){
          arr[i] = arr[i] + k;
      }
  }
  answer = arr;
  return answer;
}