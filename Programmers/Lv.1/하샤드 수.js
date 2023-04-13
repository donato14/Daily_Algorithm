function solution(x) {
  var answer = true;
  x = x+''
  let arr = x.split('');
  let add = 0;
  
  // console.log(arr)
  for(let i = 0; i < arr.length; i++){
      add += parseInt(arr[i])
  }
  
  if(parseInt(x) % add == 0){
      answer = true;
  }else{
      answer = false;
  }
  
  return answer;
}