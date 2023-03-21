function solution(n) {
  var answer = 0;
  let count = 0;
  let arr = [];
  let temp = 0;
  
  for(let i = 1; i <= n; i++){
      for(let j = 1; j <= i; j++){
          if(i % j === 0){
              count++;
          }
      }
      if(count >= 3){
          arr.push(i);
      }
      count = 0;
  }
  
  count = 0;
  answer = arr.length;
  
  return answer;
}