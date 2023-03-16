
function solution(s){  
  let answer = "";
  let temp = [];
  temp = s.split('');
  for (let i = 0; i < temp.length; i++){
    if (temp[i].charCodeAt(0) >= 97) {
      temp[i] = temp[i].toUpperCase();
    } else if (temp[i].charCodeAt(0) < 97) {
      temp[i] = temp[i].toLowerCase();
    }
  }
  answer = temp.join('');
  return answer;
}

console.log(solution("StuDY"));
