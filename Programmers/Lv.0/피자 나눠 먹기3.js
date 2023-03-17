function solution(slice, n) {
  var answer = 0;
  if(slice > n){
      answer = 1;
  }
  else{
      answer = Math.ceil(n/slice);
  }
  return answer;
}