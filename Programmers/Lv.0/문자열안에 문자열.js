function solution(str1, str2) {
  var answer = 0;
  let pattern = str2;
  let regex = new RegExp(pattern, 'i')
  
  console.log(regex.test(str1))
  if(regex.test(str1) === true){
      answer = 1
  }else {
      answer = 2
  }
  
  return answer;
}