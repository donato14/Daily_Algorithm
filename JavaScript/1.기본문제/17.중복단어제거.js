
function solution(s){  
  let answer;
  let temp;
  let mySet = new Set();
  for(let i = 0; i < s.length; i++){
    mySet.add(s[i])
  }
  temp = [...mySet]
  answer = temp.join()
  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
