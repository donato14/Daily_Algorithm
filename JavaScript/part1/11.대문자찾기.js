
function solution(s){         
  let answer=0;
  let temp = [];

  temp = s.split('');
  // console.log(temp)

  for (let i = 0; i < temp.length; i++){
    if (temp[i].charCodeAt(0) < 97) {
      answer++;
    }
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
