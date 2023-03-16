
function solution(s, t){
  let answer=0;
  let temp = [];

  temp = s.split('');
  // console.log(temp);

  for (let i = 0; i < temp.length; i++){
    if (temp[i] == t) {
      answer++;
    }
  }
  
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
