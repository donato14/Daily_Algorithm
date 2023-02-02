
function solution(s){  
  let answer="";
  let temp = s.split('')
  console.log(temp)
  let mySet = new Set();
  for(let i = 0; i < s.length; i++){
    mySet.add(temp[i])
  }
  temp = [...mySet]
  answer = temp.join('')
  return answer;
}
console.log(solution("ksekkset"));
