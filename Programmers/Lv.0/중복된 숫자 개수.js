function solution(array, n) {
  var answer = 0;
  let selectedNum = 0;
  
  for(let i = 0; i < array.length; i++){
      selectedNum = n;
      if(selectedNum == array[i]){
          answer++;
      }
  }
  
  return answer;
}