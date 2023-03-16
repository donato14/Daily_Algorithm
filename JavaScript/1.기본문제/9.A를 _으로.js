
function solution(s) {
  let answer = "";
  let temp = [];
  temp = s.split('');

  for (let i = 0; i < temp.length; i++){
    if (temp[i] == 'A') {
      temp[i] = '#';
    }
  }

  answer = temp.join('');

  return answer;
}
            
let str="BANANA";
console.log(solution(str));
