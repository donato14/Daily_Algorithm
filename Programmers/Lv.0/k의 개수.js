function solution(i, j, k) {
  var answer = 0;
  let arr = [];
  let count = 0;
  
  for(let x = i; x <= j; x++){
      if(x >= 10){
          for(let z = 0; z < (x + '').split('').length; z++){
              arr.push((x + '').split('')[z]);
          }
      }else {
          arr.push(x)
      }
  }
  for(let n = 0; n < arr.length; n++){
      if(arr[n] == k){
          count++;
      }
  }
  answer = count;
  return answer;
}