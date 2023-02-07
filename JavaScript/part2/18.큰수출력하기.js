
function solution(arr, chooseNum){         
  let answer=[];
  let temp = [...arr];
  console.log(temp)

  for(let i = 0; i < temp.length; i++) {
    if(chooseNum <= temp[i]) {
      answer.push(temp[i])
    }
  }
  answer = (answer.join(' '))
  return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
let chooseNum = 6;
console.log(solution(arr, chooseNum));
