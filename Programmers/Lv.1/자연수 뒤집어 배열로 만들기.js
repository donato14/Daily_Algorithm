function solution(n) {
  var answer = [];


  n = n.toString()
  answer = [...n]
  answer.reverse()
  let answer2 = answer.map((i)=> Number(i));


  return answer2;
}

console.log(solution(12345))