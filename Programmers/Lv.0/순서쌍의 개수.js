function solution(n) {
  var answer = 0;
  let arr = [];
  
  
  // 순서쌍은 구하지 않고 약수의 갯수만 더해서 맞추는 방법
  for(let i = 1; i < n + 1; i++){
      if(n % i == 0){
          answer++;
      }
  }
  
  // 순서쌍을 구해 갯수를 맞추는 방법
  for(let i = 1; i < n + 1; i++){
      if(n % i == 0){
          
          arr.push([i, n/i])
      }
  }
  
  console.log(arr.length)
  answer = arr.length;
  
  return answer;
}