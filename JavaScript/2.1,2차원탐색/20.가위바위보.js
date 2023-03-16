
function solution(a, b){         
  let answer="";
  for(let i = 0; i < a.length; i++){
    //a가 가위(1)를 냈을때
    if(a[i] === 1) {
      if(b[i] === 2) {
        answer += 'B';
      } else if (b[i] === 3) {
        answer += 'A';
      } else {answer += 'D'}
    }
    //a가 바위(2)를 냈을때
    else if(a[i] === 2) {
      if(b[i] === 1) {
        answer += 'A';
      } else if (b[i] === 3) {
        answer += 'B';
      } else { answer += 'D'}
    }
    //a가 보(3)를 냈을때
    else if (a[i] === 3) {
      if(b[i] === 1) {
        answer += 'B';
      } else if (b[i] === 2) {
        answer += 'A';
      } else { answer += 'D'}
    }
  }

  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
