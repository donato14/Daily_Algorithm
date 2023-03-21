function solution(a, b) {
  var answer = 0;
  if(a>=b){
      console.log('a가 크거나 같다')
      for(let i = b; i <= a; i++){
          answer = answer + i;
      }
  } else if(b > a){
      console.log('b가 크다')
      for(let i = a; i <= b; i++){
          answer = answer + i;
      }
  }
  
  return answer;
}