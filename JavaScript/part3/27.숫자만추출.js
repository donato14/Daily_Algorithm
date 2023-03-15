
function solution(str){
  let answer="";
  let temp = '';
  let tempArr = [];
  const notNumberReg = /[^0-9]/g;
  temp = str.replace(notNumberReg, '');
  tempArr = temp.split('');
  if(tempArr[0] == 0){
    // console.log('앞자리가 0임')
    tempArr.shift();
  }
  answer = tempArr.join('');
  // console.log(answer)
  return answer
}

let str="g0en2T0s8eSoft";
console.log(solution(str));
