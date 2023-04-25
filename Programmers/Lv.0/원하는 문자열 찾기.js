function solution(myString, pat) {
  var answer = 0;
  myString = myString.toLowerCase();
  // console.log(myString)
  // console.log(myString.indexOf(pat.toLowerCase()))
  if(myString.indexOf(pat.toLowerCase()) != -1){
      answer = 1;
  }
  return answer;
}