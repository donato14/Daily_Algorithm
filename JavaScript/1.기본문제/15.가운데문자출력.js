
function solution(s){  
  let answer;
  let temp = [];
  let midNum = 0;

  // console.log(s.length)
  temp = s.split('');
  // console.log(temp)
  midNum = Math.ceil(s.length/2)-1
  // console.log(midNum)
  if (s.length % 2 === 0) {
    answer = `${temp[midNum]}${temp[midNum+1]}`
  } else {
    answer = temp[midNum]
  }
  return answer;
}
console.log(solution("study"));
