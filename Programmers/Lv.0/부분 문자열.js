function solution(str1, str2) {
  var answer = 0;
  console.log(str2.indexOf(str1))
  if(str2.indexOf(str1) != -1){
      answer = 1;
  }
  return answer;
}