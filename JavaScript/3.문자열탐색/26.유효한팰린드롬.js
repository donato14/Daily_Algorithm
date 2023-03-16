
function solution(s){
  let answer="YES";
  const specialCharReg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const spaceReg = /\s/g;
  const numberReg = /[0-9]/g;
  let resultReg = s.replace(specialCharReg, '');
  resultReg = resultReg.replace(spaceReg, '');
  resultReg = resultReg.replace(numberReg, '');

  let LowerResult = resultReg.toLowerCase();
  let resultArr = LowerResult.split('');
  let reverseArr = [...resultArr].reverse();
  let reverseString = reverseArr.join('');

  if(resultArr.join('') == reverseString){return answer}
  else{return 'NO'}

}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
