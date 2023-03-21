function solution(num, k) {
  var answer = 0;
  let arr = [];
  
  arr = num.toString().split('');
  console.log(arr)
  
  arr = arr.map(function(e){
      return parseInt(e)
  })
  
  console.log(arr)
  if(arr.indexOf(k) < 0){
      answer = -1;
  }else{
      answer = arr.indexOf(k) + 1;
  }
  
  return answer;
}