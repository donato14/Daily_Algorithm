function solution(cipher, code) {
  var answer = '';
  let cipherArr = [];
  
  codeArr = cipher.split('');
  
  for(let i = code - 1; i < codeArr.length; i= i + code){
      answer += codeArr[i];
  }
  return answer;
}