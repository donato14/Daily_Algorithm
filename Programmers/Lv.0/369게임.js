function solution(order) {
  var answer = 0;
  let arr = [];
  
  arr = order.toString().split('');
  
  for(let i = 0; i < arr.length; i++){
      arr[i] = parseInt(arr[i])
      if(arr[i] === 3){
          answer++;
      } else if(arr[i] === 6){
          answer++;
      } else if(arr[i] === 9){
          answer++;
      }
  }
  
  return answer;
}