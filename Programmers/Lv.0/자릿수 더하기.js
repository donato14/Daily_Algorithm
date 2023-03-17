function solution(n) {
  var answer = 0;
  let arr = [];
  n = n.toString();
  // console.log(typeof(n.toString()))
  
  arr = n.split('');
  for(let i = 0; i < arr.length; i++){
      answer = answer + parseInt(arr[i]);
  }
  
  return answer;
}