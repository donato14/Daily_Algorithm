
function solution(n){
  let answer;
  
  answer = (n / 12);

  answer = Math.ceil(answer);

  return answer;
}

console.log(solution(178));